# osint-report template (Phase 3)

Repo-owned template for OSINT / research report decks. **Scaffold only** — add `template.pptx` when design is ready.

## Files

| File | Purpose |
|------|---------|
| `template.pptx` | *(not yet)* Master slide file |
| `detail.json` | Slot map + `max_chars` (from compute_capacity) |
| `detail.stub.json` | Minimal stub until real template exists |
| `intro.md` | Human-readable scene / palette notes |
| `preview.png` | Optional thumbnail for INDEX |

## Bootstrap detail.json

After placing `template.pptx`:

```bash
cd data/levenppt/GordenPPTSkill

# 1. Hand-author or export an initial detail.stub.json with slides[] + text_slots
# 2. Run capacity pass (fills max_chars, box_cm, font_size_pt)
python3 scripts/compute_capacity.py \
  ../templates/osint-report/detail.stub.json \
  ../templates/osint-report/template.pptx \
  -o ../templates/osint-report/detail.json
```

Use the same `build_pptx.py --strict` flow as Gorden templates:

```bash
python3 scripts/build_pptx.py \
  ../templates/osint-report/template.pptx \
  ../output/osint/edits.json \
  ../output/osint/report.pptx \
  --detail ../templates/osint-report/detail.json \
  --strict
```

## Design targets

- **Slide count**: 12–18 from a ~200-line Markdown report
- **Roles**: cover, section dividers, dense bullet content, 3-col risk pillars, stat/KPI row, closing
- **Avoid**: sparse single-bullet pages; prefer Gorden-style density or Mode P `three_col_cards` / `bullets_dense`

## Phase 1 → Phase 3 path

| Phase | Template source | License |
|-------|-----------------|---------|
| **1 (now)** | Gorden `report-massive-reports` | Personal / research only |
| **2** | Mode P layout presets | N/A (programmatic) |
| **3 (this dir)** | `osint-report/template.pptx` | Own / commercial-ready |

Until Phase 3 ships, route long reports via [report-layout-map.md](../../references/report-layout-map.md) → Gorden slug, or Mode P presets per [layout-presets.md](../../references/layout-presets.md).

Registered in [own-templates.md](../../references/own-templates.md).
