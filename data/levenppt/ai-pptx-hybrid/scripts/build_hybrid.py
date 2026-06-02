#!/usr/bin/env python3
"""Hybrid pipeline: score → revise deck-plan → edits → build_pptx → surgery → report."""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
SKILL_DIR = SCRIPT_DIR.parent
REPO_ROOT = SKILL_DIR.parent.parent.parent
GORDEN_DIR = REPO_ROOT / "data" / "levenppt" / "GordenPPTSkill"

sys.path.insert(0, str(SCRIPT_DIR))
from generate_edits import generate_edits  # noqa: E402
from score_slides import apply_scores_to_deck_plan, score_deck_plan  # noqa: E402


def resolve_template_paths(template_slug: str) -> tuple[Path, Path, Path]:
    base = GORDEN_DIR / "templates" / template_slug
    return base / "template.pptx", base / "detail.json", GORDEN_DIR / "scripts" / "build_pptx.py"


def run_build(
    build_script: Path,
    template_pptx: Path,
    edits_path: Path,
    out_pptx: Path,
    detail_path: Path,
    strict: bool,
) -> subprocess.CompletedProcess[str]:
    cmd = [
        sys.executable,
        str(build_script),
        str(template_pptx),
        str(edits_path),
        str(out_pptx),
        "--detail",
        str(detail_path),
    ]
    if strict:
        cmd.append("--strict")
    return subprocess.run(cmd, capture_output=True, text=True)


def main() -> None:
    ap = argparse.ArgumentParser(description="Hybrid Gorden build orchestrator")
    ap.add_argument("--template", required=True, help="Template slug e.g. report-massive-reports")
    ap.add_argument("--deck-plan", required=True, help="Input deck-plan.json")
    ap.add_argument("--source-md", help="Source markdown (informational)")
    ap.add_argument("--out", required=True, help="Output .pptx path")
    ap.add_argument("--baseline-edits", help="Baseline edits.json for unchanged slides")
    ap.add_argument("--surgery-ops", help="JSON with surgery[] ops")
    ap.add_argument("--work-dir", help="Intermediate files directory")
    ap.add_argument("--no-strict", action="store_true", help="Disable build_pptx --strict")
    ap.add_argument("--skip-build", action="store_true", help="Score + edits only")
    args = ap.parse_args()

    template_pptx, detail_path, build_script = resolve_template_paths(args.template)
    if not detail_path.exists():
        print(f"ERROR: detail.json not found: {detail_path}", file=sys.stderr)
        sys.exit(1)

    work = Path(args.work_dir) if args.work_dir else Path(args.out).parent / "hybrid"
    work.mkdir(parents=True, exist_ok=True)

    deck_plan = json.loads(Path(args.deck_plan).read_text(encoding="utf-8"))
    detail = json.loads(detail_path.read_text(encoding="utf-8"))

    # 1. Score slides
    score_report = score_deck_plan(detail, deck_plan)
    score_path = work / "score-report.json"
    score_path.write_text(json.dumps(score_report, ensure_ascii=False, indent=2), encoding="utf-8")

    # 2. Revise deck-plan
    revised_plan = apply_scores_to_deck_plan(deck_plan, score_report)
    revised_path = work / "deck-plan-revised.json"
    revised_path.write_text(json.dumps(revised_plan, ensure_ascii=False, indent=2), encoding="utf-8")

    # 3. Generate edits
    baseline = Path(args.baseline_edits) if args.baseline_edits else None
    edits = generate_edits(revised_plan, detail, baseline, deck_plan)
    edits_path = work / "edits.json"
    edits_path.write_text(json.dumps(edits, ensure_ascii=False, indent=2), encoding="utf-8")

    build_log = ""
    surgery_result: dict | None = None
    out_pptx = Path(args.out)
    out_pptx.parent.mkdir(parents=True, exist_ok=True)

    if not args.skip_build:
        # 4. build_pptx
        if not template_pptx.exists():
            print(f"ERROR: template.pptx not found: {template_pptx}", file=sys.stderr)
            sys.exit(1)
        proc = run_build(
            build_script,
            template_pptx,
            edits_path,
            out_pptx,
            detail_path,
            strict=not args.no_strict,
        )
        build_log = proc.stdout + proc.stderr
        (work / "build.log").write_text(build_log, encoding="utf-8")
        if proc.returncode != 0:
            print(build_log, file=sys.stderr)
            print(f"build_pptx failed (exit {proc.returncode})", file=sys.stderr)
            sys.exit(proc.returncode)

        # 5. Surgery
        if args.surgery_ops:
            from surgery import apply_surgery

            raw = json.loads(Path(args.surgery_ops).read_text(encoding="utf-8"))
            ops = raw.get("surgery", raw)
            surgery_result = apply_surgery(out_pptx, ops, detail_path)
            (work / "surgery-report.json").write_text(
                json.dumps(surgery_result, ensure_ascii=False, indent=2), encoding="utf-8"
            )

    # 6. Summary report
    summary = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "template": args.template,
        "source_md": args.source_md,
        "output_pptx": str(out_pptx),
        "score_report": str(score_path),
        "re_picked": [
            {
                "order": s["order"],
                "intent": s["intent"],
                "headline": s["headline"],
                "from": s["original_template_slide"],
                "to": s["recommended_template_slide"],
                "score": s["fit_score"],
                "mode": s["recommended_mode"],
            }
            for s in score_report["slides"]
            if s["re_picked"]
        ],
        "selected_slides": score_report["selected_slides"],
        "surgery_applied": surgery_result.get("applied") if surgery_result else [],
        "build_log_tail": build_log[-2000:] if build_log else "",
    }
    summary_path = work / "hybrid-summary.json"
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")

    print("=== Hybrid Build Report ===")
    print(f"Output: {out_pptx}")
    print(f"Score report: {score_path}")
    if summary["re_picked"]:
        print("\nRe-picked slides:")
        for r in summary["re_picked"]:
            print(
                f"  #{r['order']} {r['intent']}: slide {r['from']}→{r['to']} "
                f"(score={r['score']:.3f}, mode={r['mode']})"
            )
    else:
        print("\nNo slides re-picked (all scores acceptable or unchanged).")
    if surgery_result:
        print(f"\nSurgery: {len(surgery_result.get('applied', []))} ops applied")
    print(f"\nSummary: {summary_path}")


if __name__ == "__main__":
    main()
