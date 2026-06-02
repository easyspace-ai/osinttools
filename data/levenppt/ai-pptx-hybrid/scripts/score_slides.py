#!/usr/bin/env python3
"""Score Gorden template slides against deck-plan slide intent.

Input: detail.json + deck-plan slides[]
Output: per-order ranked candidates, recommended template_slide, mode
"""
from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path
from typing import Any

FIT_THRESHOLD = 0.6

INTENT_KEYWORDS: dict[str, list[str]] = {
    "title": ["封面", "渠道", "收入", "业绩", "数字", "首屏", "销售"],
    "executive_summary": ["完成情况", "摘要", "年度", "四象限", "总结", "工作完成"],
    "swot": ["SWOT", "swot", "四象限", "优势", "劣势"],
    "case_study": ["问题", "改进", "复盘", "案例", "方法"],
    "tier_list": ["目标", "拆解", "核心工作", "三档", "阶梯", "工作目标"],
    "risk_list": ["问题", "不足", "风险", "亮点", "障碍", "合规", "存在"],
    "comparison": ["对比", "增长", "业绩", "成果", "原因", "展示", "用户"],
    "pyramid": ["金字塔", "逻辑", "层级"],
    "quote": ["树状", "回顾", "要点", "引述", "观点"],
    "conclusion": ["计划", "总结", "结论", "工作", "展望"],
    "timeline": ["甘特", "季度", "时间", "规划"],
}

CONTENT_BOOST: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"合规|许可|备案|出境|刑事|法律|风险|障碍"), "risk_list"),
    (re.compile(r"SWOT|优势|劣势|机会|威胁", re.I), "swot"),
    (re.compile(r"案例|刑拘|首例|运营"), "case_study"),
    (re.compile(r"利润|三档|模型|毛利率"), "tier_list"),
    (re.compile(r"大玩家|对比|替代|竞争"), "comparison"),
    (re.compile(r"路径|金字塔|评估"), "pyramid"),
    (re.compile(r"律师|引述|观点|「"), "quote"),
    (re.compile(r"结论|摘要|总结"), "conclusion"),
    (re.compile(r"流水|数字|500|业绩"), "title"),
]

CONTENT_ROLES = {"小标题", "正文段落", "正文短句", "段落标题", "页面主标题", "副标题 / 英文标签"}
DECOR_ROLES = {"装饰符号", "辅助文本", "页面标题", "页面标题 / 英文标签"}


def visual_width(s: str) -> float:
    w = 0.0
    for c in s:
        if "\u4e00" <= c <= "\u9fff" or "\u3000" <= c <= "\u303f" or "\uff00" <= c <= "\uffef":
            w += 1.0
        elif c == " ":
            w += 0.35
        elif c.isascii():
            w += 0.5
        else:
            w += 0.8
    return w


def infer_effective_intents(slide: dict[str, Any]) -> dict[str, float]:
    """Blend declared intent with content-derived signals."""
    declared = slide.get("intent", "content")
    weights: dict[str, float] = {declared: 1.0}
    text = " ".join([slide.get("headline", "")] + slide.get("bullets", []))
    content_intents: dict[str, float] = {}
    for pattern, intent in CONTENT_BOOST:
        if pattern.search(text):
            content_intents[intent] = content_intents.get(intent, 0) + 0.8
            weights[intent] = weights.get(intent, 0) + 0.8

    # Declared swot without SWOT vocabulary → down-weight in favour of content
    if declared == "swot" and "swot" not in content_intents:
        if not re.search(r"SWOT|优势|劣势|机会|威胁", text, re.I):
            weights["swot"] = 0.25
    return weights


def keyword_score(layout: str, use_for: str, intents: dict[str, float]) -> float:
    hay = f"{layout} {use_for}".lower()
    if not intents:
        return 0.5
    scores: list[float] = []
    risk_w = intents.get("risk_list", 0)
    swot_w = intents.get("swot", 0)
    risk_dominant = risk_w >= swot_w and risk_w >= 0.8

    for intent, w in intents.items():
        kws = INTENT_KEYWORDS.get(intent, [intent])
        hits = sum(1 for kw in kws if kw.lower() in hay)
        base = hits / max(len(kws), 1)
        if intent == "risk_list" and "swot" in hay and hits == 0:
            base = max(base, 0.15)
        if intent == "swot" and "swot" not in hay:
            base *= 0.3
        scores.append(min(1.0, base) * w)

    sem = min(1.0, sum(scores) / sum(intents.values()))

    # Content-driven risk_list should not land on SWOT quadrants
    if risk_dominant and "swot" in hay:
        sem *= 0.45
    if risk_dominant and any(k in hay for k in ("问题", "不足", "风险", "障碍")):
        sem = min(1.0, sem + 0.25)
    if intents.get("quote", 0) >= 0.8 and "树状" in hay:
        sem = min(1.0, sem + 0.35)
    if intents.get("executive_summary", 0) >= 1.0 and "完成情况" in hay:
        sem = min(1.0, sem + 0.35)
    if intents.get("risk_list", 0) >= 1.0 and "亮点" in hay:
        sem = min(1.0, sem + 0.30)
    if intents.get("comparison", 0) >= 1.0 and any(k in hay for k in ("业绩", "成果", "展示")):
        sem = min(1.0, sem + 0.35)
    return sem


def slot_fit(page: dict, bullet_count: int, intent: str = "") -> float:
    editable = [s for s in page.get("text_slots", []) if s.get("editable", True)]
    content = [s for s in editable if s.get("role") in CONTENT_ROLES]
    subtitles = [s for s in content if s.get("role") == "小标题"]
    bodies = [s for s in content if s.get("role") in ("正文段落", "正文短句")]
    need = max(bullet_count, 1)

    # Card / name showcase layouts (many 小标题, few bodies)
    if intent in ("comparison", "tier_list", "title") and subtitles:
        if len(subtitles) >= need:
            return 1.0
        if len(subtitles) >= need - 1:
            return 0.9

    pairs = min(len(subtitles), len(bodies)) if subtitles and bodies else len(content) // 2
    if pairs >= need:
        return 1.0
    if pairs >= need - 1:
        return 0.85
    if pairs >= max(1, need // 2):
        return 0.65
    return max(0.2, pairs / need)


def capacity_fit(page: dict, slide: dict[str, Any]) -> float:
    editable = [s for s in page.get("text_slots", []) if s.get("editable", True)]
    body_slots = [s for s in editable if s.get("role") in ("正文段落", "正文短句", "小标题")]
    if not body_slots:
        return 0.4

    intent = slide.get("intent", "")
    bullets = slide.get("bullets") or []

    # Quote: need one body slot that fits the longest passage
    if intent == "quote" and bullets:
        longest = max(bullets, key=len)
        need = visual_width(longest)
        bodies = [s for s in body_slots if s.get("role") in ("正文段落", "正文短句")]
        if bodies:
            best_cap = max(s.get("max_chars", 0) for s in bodies)
            if need <= best_cap * 0.85:
                return 1.0
            if need <= best_cap:
                return 0.9
            return max(0.2, best_cap / need)

    total_cap = sum(s.get("max_chars", 20) for s in body_slots)
    content_vw = visual_width(slide.get("headline", ""))
    for b in bullets:
        content_vw += visual_width(b) * 1.5
    if total_cap <= 0:
        return 0.5
    ratio = content_vw / total_cap
    if ratio <= 0.7:
        return 1.0
    if ratio <= 1.0:
        return 0.85
    if ratio <= 1.3:
        return 0.55
    return max(0.1, 1.0 - (ratio - 1.0))


def decorative_penalty(page: dict) -> float:
    editable = [s for s in page.get("text_slots", []) if s.get("editable", True)]
    if not editable:
        return 0.1
    decor = sum(1 for s in editable if s.get("role") in DECOR_ROLES or not s.get("editable", True))
    return min(0.15, decor / len(editable) * 0.15)


def score_page(
    page: dict,
    slide: dict[str, Any],
    shape_caution: set[int],
    intents: dict[str, float],
) -> dict[str, Any]:
    bullet_count = len(slide.get("bullets") or [])
    sem = keyword_score(page.get("layout", ""), page.get("use_for", ""), intents)
    slots = slot_fit(page, bullet_count, slide.get("intent", ""))
    cap = capacity_fit(page, slide)
    penalty = decorative_penalty(page)
    if page["slide_number"] in shape_caution:
        penalty += 0.05

    fit = 0.30 * sem + 0.35 * slots + 0.25 * cap - penalty
    fit = max(0.0, min(1.0, fit))

    return {
        "template_slide": page["slide_number"],
        "layout": page.get("layout", ""),
        "fit_score": round(fit, 3),
        "breakdown": {
            "semantic": round(sem, 3),
            "slot_fit": round(slots, 3),
            "capacity": round(cap, 3),
            "penalty": round(penalty, 3),
        },
    }


def recommend_mode(best_score: float, slide: dict[str, Any]) -> str:
    if best_score >= FIT_THRESHOLD:
        return "template"
    bullets = slide.get("bullets") or []
    if len(bullets) > 6:
        return "split"
    return "preset"


def enforce_unique_picks(
    results: list[dict[str, Any]],
    detail: dict,
    deck_plan: dict,
    caution: set[int],
) -> list[dict[str, Any]]:
    """Gorden build_pptx requires unique template_slide numbers in selected_slides."""
    by_order = {r["order"]: r for r in results}
    slide_plans = {s["order"]: s for s in deck_plan.get("slides", [])}
    used: set[int] = set()

    for r in sorted(results, key=lambda x: x["order"]):
        sn = r["recommended_template_slide"]
        if sn not in used:
            used.add(sn)
            continue
        plan = slide_plans[r["order"]]
        intents = infer_effective_intents(plan)
        ranked = []
        for page in detail.get("pages", []):
            if page.get("auto_promo_flag") or page["slide_number"] in (detail.get("skip_pages") or []):
                continue
            if page["slide_number"] in used:
                continue
            ranked.append(score_page(page, plan, caution, intents))
        ranked.sort(key=lambda x: (-x["fit_score"], x["template_slide"]))
        if plan.get("intent") == "risk_list":
            non_swot = [x for x in ranked if "swot" not in x.get("layout", "").lower()]
            if non_swot:
                ranked = non_swot + [x for x in ranked if x not in non_swot]
            preferred = [x for x in ranked if x["template_slide"] == 12]
            if preferred:
                ranked = preferred + [x for x in ranked if x not in preferred]
        if not ranked:
            continue
        alt = ranked[0]
        r["recommended_template_slide"] = alt["template_slide"]
        r["fit_score"] = alt["fit_score"]
        r["re_picked"] = alt["template_slide"] != r["original_template_slide"]
        r["recommended_mode"] = recommend_mode(alt["fit_score"], plan)
        r["top_candidates"] = ranked[:5]
        r["notes"] = f"unique pick: slide {sn} already used"
        used.add(alt["template_slide"])

    return results


def resolve_slide_conflicts(
    results: list[dict[str, Any]],
    detail: dict,
    deck_plan: dict,
    caution: set[int],
) -> list[dict[str, Any]]:
    """Ensure no duplicate template_slide picks with different content."""
    return enforce_unique_picks(results, detail, deck_plan, caution)


def score_deck_plan(detail: dict, deck_plan: dict) -> dict[str, Any]:
    pages = {p["slide_number"]: p for p in detail.get("pages", [])}
    caution = set(detail.get("shape_caution_pages") or [])
    results: list[dict[str, Any]] = []

    for slide in deck_plan.get("slides", []):
        intents = infer_effective_intents(slide)
        original = slide.get("template_slide")
        ranked: list[dict[str, Any]] = []
        for page in detail.get("pages", []):
            if page.get("auto_promo_flag"):
                continue
            if page["slide_number"] in (detail.get("skip_pages") or []):
                continue
            scored = score_page(page, slide, caution, intents)
            ranked.append(scored)
        ranked.sort(key=lambda x: (-x["fit_score"], x["template_slide"]))

        best = ranked[0] if ranked else None
        mode = recommend_mode(best["fit_score"], slide) if best else "preset"
        picked = best["template_slide"] if mode == "template" and best else original

        orig_entry = next((r for r in ranked if r["template_slide"] == original), None)
        if (
            best
            and orig_entry
            and orig_entry["template_slide"] != best["template_slide"]
            and orig_entry["fit_score"] >= FIT_THRESHOLD
            and best["fit_score"] - orig_entry["fit_score"] <= 0.08
        ):
            picked = original
            best = orig_entry
        elif (
            best
            and orig_entry
            and orig_entry["template_slide"] != best["template_slide"]
            and best["fit_score"] - orig_entry["fit_score"] < 0.16
        ):
            # Require meaningful improvement before re-picking
            picked = original
            best = orig_entry

        orig_score = orig_entry["fit_score"] if orig_entry else None

        results.append({
            "order": slide.get("order"),
            "intent": slide.get("intent"),
            "headline": slide.get("headline"),
            "original_template_slide": original,
            "original_fit_score": orig_score,
            "recommended_template_slide": picked,
            "recommended_mode": mode,
            "fit_score": best["fit_score"] if best else 0,
            "re_picked": picked != original,
            "effective_intents": intents,
            "top_candidates": ranked[:5],
        })

    results = resolve_slide_conflicts(results, detail, deck_plan, caution)

    return {
        "template_slug": deck_plan.get("template_slug"),
        "threshold": FIT_THRESHOLD,
        "slides": results,
        "selected_slides": [r["recommended_template_slide"] for r in results],
        "re_picked_orders": [r["order"] for r in results if r["re_picked"]],
    }


def apply_scores_to_deck_plan(deck_plan: dict, score_report: dict) -> dict:
    out = json.loads(json.dumps(deck_plan))
    by_order = {r["order"]: r for r in score_report["slides"]}
    for slide in out.get("slides", []):
        rep = by_order.get(slide["order"])
        if not rep:
            continue
        slide["template_slide"] = rep["recommended_template_slide"]
        slide["fit_score"] = rep["fit_score"]
        slide["fallback_mode"] = rep["recommended_mode"]
        if rep["re_picked"]:
            slide["notes"] = (
                f"hybrid re-pick: {rep['original_template_slide']}→"
                f"{rep['recommended_template_slide']} "
                f"(score {rep['fit_score']:.2f})"
            )
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description="Score template slides for deck-plan intents")
    ap.add_argument("--detail", required=True, help="Path to detail.json")
    ap.add_argument("--deck-plan", required=True, help="Path to deck-plan.json")
    ap.add_argument("--out", help="Write score report JSON")
    ap.add_argument("--revise-plan", help="Write revised deck-plan with re-picks")
    args = ap.parse_args()

    detail = json.loads(Path(args.detail).read_text(encoding="utf-8"))
    deck_plan = json.loads(Path(args.deck_plan).read_text(encoding="utf-8"))
    report = score_deck_plan(detail, deck_plan)

    if args.out:
        Path(args.out).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    if args.revise_plan:
        revised = apply_scores_to_deck_plan(deck_plan, report)
        Path(args.revise_plan).write_text(
            json.dumps(revised, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    for s in report["slides"]:
        flag = " *RE-PICK*" if s["re_picked"] else ""
        print(
            f"#{s['order']:2d} {s['intent']:18s} "
            f"{s['original_template_slide']:2d}→{s['recommended_template_slide']:2d} "
            f"score={s['fit_score']:.3f} mode={s['recommended_mode']}{flag}"
        )


if __name__ == "__main__":
    main()
