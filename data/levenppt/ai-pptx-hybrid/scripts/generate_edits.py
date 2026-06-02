#!/usr/bin/env python3
"""Generate edits.json from deck-plan + detail.json slot roles."""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


def _truncate(text: str, max_chars: int) -> str:
    if len(text) <= max_chars:
        return text
    return text[: max(1, max_chars - 1)] + "…"


def _slots_for_slide(detail: dict, slide_num: int) -> list[dict]:
    for page in detail.get("pages", []):
        if page["slide_number"] == slide_num:
            return page.get("text_slots", [])
    return []


def _pick_title_slots(slots: list[dict]) -> list[dict]:
    """Paragraph title run slots (skip decorative prefix runs)."""
    out: list[dict] = []
    for s in slots:
        if not s.get("editable", True):
            continue
        role = s.get("role", "")
        if role in ("段落标题", "副标题 / 英文标签") and "p0r2" in s.get("slot_id", ""):
            out.append(s)
        elif role == "段落标题" and s.get("level", 99) <= 7:
            sid = s.get("slot_id", "")
            if sid.endswith("p0r2") or sid.endswith("p0r3"):
                out.append(s)
    if not out:
        out = [s for s in slots if s.get("role") == "段落标题" and s.get("editable", True)]
    return out[:2]


def _pick_subtitle_slots(slots: list[dict]) -> list[dict]:
    return [s for s in slots if s.get("editable", True) and s.get("role") == "小标题"]


def _pick_body_slots(slots: list[dict]) -> list[dict]:
    return [
        s
        for s in slots
        if s.get("editable", True) and s.get("role") in ("正文段落", "正文短句")
    ]


def _pick_stat_slots(slots: list[dict]) -> list[dict]:
    """Large number / KPI slots on title slides."""
    candidates = [
        s
        for s in slots
        if s.get("editable", True)
        and s.get("role") in ("正文短句", "小标题", "辅助文本")
        and (s.get("max_chars", 99) <= 12 or "数字" in s.get("guidance", ""))
    ]
    return candidates[:6]


def _fill_slide12_risk(slide_num: int, slide_plan: dict[str, Any]) -> list[dict]:
    """Slide 12 fallback for displaced risk_list (order 11 刑民风险)."""
    return [
        {"slide": slide_num, "slot_id": "s12_sh16_p0r2", "new_text": _truncate(slide_plan.get("headline", "刑民风险"), 13)},
        {"slide": slide_num, "slot_id": "s12_sh30_p0r0", "new_text": "非法经营"},
        {"slide": slide_num, "slot_id": "s12_sh29_p0r0", "new_text": "违反许可制度→非法经营罪（《刑法》第225条），个人非法经营5万元即应立案。"},
        {"slide": slide_num, "slot_id": "s12_sh41_p0r0", "new_text": "个人信息"},
        {"slide": slide_num, "slot_id": "s12_sh40_p0r0", "new_text": "出售用户对话数据→侵犯公民个人信息罪（《刑法》第253条之一）。"},
        {"slide": slide_num, "slot_id": "s12_sh46_p0r0", "new_text": "数据违法"},
        {"slide": slide_num, "slot_id": "s12_sh45_p0r0", "new_text": "违反《网络安全法》《数据安全法》：未履行安全评估与备案义务。"},
    ]


def _fill_slide13_legal(slide_num: int, slide_plan: dict[str, Any]) -> list[dict]:
    """Rich fill for slide 13 used for legal obstacle sections (re-pick from SWOT)."""
    headline = slide_plan.get("headline", "合规障碍")
    return [
        {"slide": slide_num, "slot_id": "s13_sh16_p0r2", "new_text": _truncate(headline, 16)},
        {"slide": slide_num, "slot_id": "s13_sh21_p0r0", "new_text": "电信许可"},
        {"slide": slide_num, "slot_id": "s13_sh22_p0r10", "new_text": "须提供增值电信许可证与ICP备案，无证经营达入罪标准可构成非法经营罪。"},
        {"slide": slide_num, "slot_id": "s13_sh24_p0r0", "new_text": "AI备案"},
        {"slide": slide_num, "slot_id": "s13_sh25_p0r0", "new_text": "OpenAI等海外模型未在网信办备案，中转站客观上无法走通生成式AI服务备案程序。"},
        {"slide": slide_num, "slot_id": "s13_sh26_p0r0", "new_text": "数据出境"},
        {"slide": slide_num, "slot_id": "s13_sh27_p0r0", "new_text": "用户请求含个人信息与商业秘密，路由境外构成数据出境，达规模须安全评估或标准合同。"},
        {"slide": slide_num, "slot_id": "s13_sh28_p0r0", "new_text": "刑事风险"},
        {"slide": slide_num, "slot_id": "s13_sh29_p0r0", "new_text": "2026年5月上海首例站长刑拘37天，标志监管从默许观察进入主动执法阶段。"},
    ]


def _fill_slide4_legal(slide_num: int, slide_plan: dict[str, Any]) -> list[dict]:
    """Rich fill for slide 4 «存在问题与不足» used for legal/risk sections."""
    headline = slide_plan.get("headline", "合规障碍")
    bullets = slide_plan.get("bullets") or []
    bodies = [
        "须提供增值电信许可证与ICP备案，无证经营达入罪标准可构成非法经营罪。",
        "OpenAI等海外模型未在网信办备案，中转站客观上无法走通生成式AI服务备案程序。",
        "用户请求含个人信息与商业秘密，路由境外构成数据出境，达规模须安全评估或标准合同。",
        "2026年5月上海首例站长刑拘37天，标志监管从默许观察进入主动执法阶段。",
    ]
    titles = bullets[:4] if len(bullets) >= 4 else ["电信许可", "AI备案", "数据出境", "刑事风险"]
    return [
        {"slide": slide_num, "slot_id": "s4_sh16_p0r2", "new_text": _truncate(headline, 16)},
        {"slide": slide_num, "slot_id": "s4_sh80_p0r0", "new_text": _truncate(titles[0], 7)},
        {"slide": slide_num, "slot_id": "s4_sh81_p0r0", "new_text": _truncate(bodies[0], 81)},
        {"slide": slide_num, "slot_id": "s4_sh59_p0r0", "new_text": _truncate(titles[1], 7)},
        {"slide": slide_num, "slot_id": "s4_sh60_p0r0", "new_text": _truncate(bodies[1], 86)},
        {"slide": slide_num, "slot_id": "s4_sh73_p0r0", "new_text": _truncate(titles[2], 7)},
        {"slide": slide_num, "slot_id": "s4_sh74_p0r0", "new_text": _truncate(bodies[2], 86)},
        {"slide": slide_num, "slot_id": "s4_sh92_p0r0", "new_text": _truncate(titles[3], 7)},
        {"slide": slide_num, "slot_id": "s4_sh87_p0r0", "new_text": _truncate(bodies[3], 81)},
        {"slide": slide_num, "slot_id": "s4_sh101_p0r0", "new_text": "许可、备案、出境三重合规缺口叠加刑事执法风险。"},
    ]


def _fill_slide10_risk(slide_num: int, slide_plan: dict[str, Any]) -> list[dict]:
    """Rich fill for slide 10 «主要工作亮点» used for grey-market tactics list."""
    return [
        {"slide": slide_num, "slot_id": "s10_sh16_p0r2", "new_text": _truncate(slide_plan.get("headline", ""), 16)},
        {"slide": slide_num, "slot_id": "s10_sh72_p0r0", "new_text": "替换"},
        {"slide": slide_num, "slot_id": "s10_sh73_p0r0", "new_text": "虚报"},
        {"slide": slide_num, "slot_id": "s10_sh74_p0r0", "new_text": "倒卖"},
        {"slide": slide_num, "slot_id": "s10_sh39_p0r0", "new_text": "用廉价开源模型冒充Claude Opus，CISPA论文显示逾四成端点模型指纹验证失败。"},
        {"slide": slide_num, "slot_id": "s10_sh40_p0r0", "new_text": "部分网关实际收费比预期高出62.8%，后台调高计费倍率截取差价。"},
        {"slide": slide_num, "slot_id": "s10_sh41_p0r0", "new_text": "用户对话、代码、推理过程被打包出售给国内大模型公司作训练数据。"},
        {"slide": slide_num, "slot_id": "s10_sh42_p0r0", "new_text": "厂商缓存优惠价被截留；重复内容按原价向用户收费。"},
        {"slide": slide_num, "slot_id": "s10_sh81_p0r0", "new_text": "模型替换"},
        {"slide": slide_num, "slot_id": "s10_sh82_p0r0", "new_text": "Token虚报"},
        {"slide": slide_num, "slot_id": "s10_sh83_p0r0", "new_text": "数据转卖"},
        {"slide": slide_num, "slot_id": "s10_sh84_p0r0", "new_text": "缓存截留差价"},
    ]


def fill_slide_edits(
    slide_num: int,
    slide_plan: dict[str, Any],
    detail: dict,
    baseline_edits: list[dict] | None = None,
) -> list[dict]:
    """Map headline/bullets to slot_ids for one template slide."""
    if baseline_edits:
        existing = [e for e in baseline_edits if e.get("slide") == slide_num]
        if existing:
            return existing

    slots = _slots_for_slide(detail, slide_num)
    if not slots:
        return []

    edits: list[dict] = []
    intent = slide_plan.get("intent", "")
    headline = slide_plan.get("headline", "")
    bullets = slide_plan.get("bullets") or []

    # Rich templates for common re-picks
    if slide_num == 12 and intent == "risk_list":
        return _fill_slide12_risk(slide_num, slide_plan)
    if slide_num == 13 and intent in ("swot", "risk_list") and "合规" in headline + "".join(bullets):
        return _fill_slide13_legal(slide_num, slide_plan)
    if slide_num == 4 and intent in ("swot", "risk_list") and "合规" in headline + "".join(bullets):
        return _fill_slide4_legal(slide_num, slide_plan)
    if slide_num == 10 and intent == "risk_list":
        return _fill_slide10_risk(slide_num, slide_plan)

    # Title slide pattern
    if intent == "title":
        titles = _pick_title_slots(slots)
        if titles:
            edits.append({
                "slide": slide_num,
                "slot_id": titles[0]["slot_id"],
                "new_text": _truncate(headline, titles[0].get("max_chars", 20)),
            })
        stats = _pick_stat_slots(slots)
        for i, b in enumerate(bullets[: min(4, len(stats))]):
            edits.append({
                "slide": slide_num,
                "slot_id": stats[i]["slot_id"],
                "new_text": _truncate(b, stats[i].get("max_chars", 12)),
            })
        return edits

    # Quote: one long body slot
    if intent == "quote":
        bodies = sorted(_pick_body_slots(slots), key=lambda s: -s.get("max_chars", 0))
        titles = _pick_title_slots(slots)
        if titles:
            edits.append({
                "slide": slide_num,
                "slot_id": titles[0]["slot_id"],
                "new_text": _truncate(headline, titles[0].get("max_chars", 20)),
            })
        if bodies and bullets:
            text = bullets[0] if len(bullets) == 1 else " ".join(bullets)
            edits.append({
                "slide": slide_num,
                "slot_id": bodies[0]["slot_id"],
                "new_text": _truncate(text, bodies[0].get("max_chars", 100)),
            })
        return edits

    # Default: title + paired subtitle/body columns
    titles = _pick_title_slots(slots)
    if titles:
        edits.append({
            "slide": slide_num,
            "slot_id": titles[0]["slot_id"],
            "new_text": _truncate(headline, titles[0].get("max_chars", 20)),
        })

    subs = _pick_subtitle_slots(slots)
    bodies = _pick_body_slots(slots)
    n = max(len(subs), len(bodies))
    pairs = min(len(bullets), n if n else len(bullets))

    for i in range(pairs):
        b = bullets[i]
        if i < len(subs):
            edits.append({
                "slide": slide_num,
                "slot_id": subs[i]["slot_id"],
                "new_text": _truncate(b, subs[i].get("max_chars", 12)),
            })
        if i < len(bodies):
            # Use bullet as body; expand with headline fragment if short
            body_text = b
            if len(b) < 8 and i < len(subs):
                body_text = b
            edits.append({
                "slide": slide_num,
                "slot_id": bodies[i]["slot_id"],
                "new_text": _truncate(body_text, bodies[i].get("max_chars", 80)),
            })

    # Executive summary: fill remaining body slots with expanded bullets
    if intent == "executive_summary" and len(bullets) > pairs:
        for j, b in enumerate(bullets[pairs:], start=pairs):
            if j < len(bodies):
                edits.append({
                    "slide": slide_num,
                    "slot_id": bodies[j]["slot_id"],
                    "new_text": _truncate(b, bodies[j].get("max_chars", 80)),
                })

    return edits


def generate_edits(
    deck_plan: dict,
    detail: dict,
    baseline_path: Path | None = None,
    original_plan: dict | None = None,
) -> dict:
    baseline_all: list[dict] = []
    baseline_by_slide: dict[int, list[dict]] = {}
    orig_by_order: dict[int, int] = {}
    if original_plan:
        for s in original_plan.get("slides", []):
            orig_by_order[s["order"]] = s["template_slide"]

    if baseline_path and baseline_path.exists():
        baseline = json.loads(baseline_path.read_text(encoding="utf-8"))
        baseline_all = baseline.get("edits", [])
        for e in baseline_all:
            baseline_by_slide.setdefault(e["slide"], []).append(e)

    selected: list[int] = []
    all_edits: list[dict] = []

    for slide_plan in sorted(deck_plan.get("slides", []), key=lambda s: s["order"]):
        sn = slide_plan["template_slide"]
        order = slide_plan["order"]
        selected.append(sn)

        # Reuse baseline only when order + template_slide unchanged from original plan
        orig_sn = orig_by_order.get(order)
        if orig_sn == sn and sn in baseline_by_slide:
            all_edits.extend(baseline_by_slide[sn])
            continue

        edits = fill_slide_edits(sn, slide_plan, detail, None)
        all_edits.extend(edits)

    return {
        "template_slug": deck_plan.get("template_slug"),
        "selected_slides": selected,
        "edits": all_edits,
    }


def main() -> None:
    import argparse

    ap = argparse.ArgumentParser()
    ap.add_argument("--deck-plan", required=True)
    ap.add_argument("--detail", required=True)
    ap.add_argument("--baseline-edits", help="Reuse slot fills for unchanged slides")
    ap.add_argument("--original-plan", help="Original deck-plan for order-aware baseline reuse")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    deck_plan = json.loads(Path(args.deck_plan).read_text(encoding="utf-8"))
    detail = json.loads(Path(args.detail).read_text(encoding="utf-8"))
    baseline = Path(args.baseline_edits) if args.baseline_edits else None
    original = Path(args.original_plan).read_text(encoding="utf-8") if getattr(args, "original_plan", None) else None
    original_plan = json.loads(original) if original else None
    out = generate_edits(deck_plan, detail, baseline, original_plan)
    Path(args.out).write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(out['edits'])} edits → {args.out}")


if __name__ == "__main__":
    main()
