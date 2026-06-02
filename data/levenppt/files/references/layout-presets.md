# Mode P Layout Presets

Commercial-ready fallback layouts for **Mode P** (Programmatic). AI fills **named slots** only — coordinates live in `scripts/layout-presets.json` and the renderer.

> **Rule**: Prefer `layout_preset` + `slots` over hand-written `elements[]` with raw `x/y/w/h`.

---

## When to use

| Situation | Use |
|-----------|-----|
| Mode T strict keeps failing | Mode P with presets |
| No Gorden template match | Mode P + preset |
| Need dense, balanced pages fast | `bullets_dense`, `three_col_cards`, `stat_row` |
| User wants custom but not pixel-pushing | Presets for 80% of slides; raw `elements[]` only for one-offs |

Machine-readable definitions: [../scripts/layout-presets.json](../scripts/layout-presets.json).

---

## Canvas constants

Aligned with `frontend/src/studio/lib/exportPptx.ts`:

| Constant | Value | Unit |
|----------|-------|------|
| `SLIDE_W` | 10 | inch |
| `SLIDE_H` | 5.625 | inch |
| `MARGIN_X` | 0.6 | inch |
| `CONTENT_W` | 8.8 | inch |

---

## Preset catalog

| ID | Purpose | Key slots |
|----|---------|-----------|
| `cover_hero` | Opening cover | `title`, `subtitle?`, `footer?` |
| `section_break` | Chapter divider (dark) | `title`, `subtitle?` |
| `bullets_dense` | Findings / content list | `title`, `bullets[]`, `footer?` |
| `three_col_cards` | 3 pillars / options | `title`, `cards[{title,body}]`, `footer?` |
| `stat_row` | KPI row (1–3 stats) | `title?`, `stats[{value,label}]`, `footer?` |
| `chart_sidebar` | Chart + side stats | `title`, `chart`, `stats?`, `footer?` |
| `comparison_table` | 2–3 column compare | `title`, `columns[]`, `highlight_column?`, `footer?` |
| `closing_cta` | Thank you / Q&A | `headline`, `contact?`, `cta?` |

---

## Slide JSON shape (preset mode)

```json
{
  "layout_preset": "three_col_cards",
  "bg_color": "F8F9FA",
  "slots": {
    "title": "三层合规障碍",
    "cards": [
      { "title": "电信许可", "body": "无证经营可能构成非法经营罪。" },
      { "title": "AI 备案", "body": "海外模型无法完成网信办备案。" },
      { "title": "数据出境", "body": "路由境外需安全评估或标准合同。" }
    ],
    "footer": "2026 AI 中转站调研 · 第三章"
  },
  "notes": "演讲者备注"
}
```

**Do not** mix `layout_preset` and `elements[]` on the same slide. If you need a one-off layout, omit `layout_preset` and use raw elements (see [slide-schema.md](slide-schema.md)).

---

## Slot schemas (summary)

### cover_hero

| Slot | Type | Required | Max |
|------|------|----------|-----|
| title | string | yes | 60 chars |
| subtitle | string | no | 120 |
| footer | string | no | 80 |

### section_break

| Slot | Type | Required |
|------|------|----------|
| title | string | yes |
| subtitle | string | no |

Uses `meta.theme.bg_dark` as slide background and accent bar.

### bullets_dense

| Slot | Type | Required |
|------|------|----------|
| title | string | yes |
| bullets | string[] | yes (2–8) |
| footer | string | no |

### three_col_cards

| Slot | Type | Required |
|------|------|----------|
| title | string | yes |
| cards | `{title, body}[]` | yes (2–3) |
| footer | string | no |

### stat_row

| Slot | Type | Required |
|------|------|----------|
| title | string | no |
| stats | `{value, label}[]` | yes (1–3) |
| footer | string | no |

### chart_sidebar

| Slot | Type | Required |
|------|------|----------|
| title | string | yes |
| chart | `{chartType, data[]}` | yes |
| stats | `{value, label}[]` | no (≤3) |
| footer | string | no |

### comparison_table

| Slot | Type | Required |
|------|------|----------|
| title | string | yes |
| columns | `{header, items[], header_color?}[]` | yes (2–3) |
| highlight_column | number | no |
| footer | string | no |

### closing_cta

| Slot | Type | Required |
|------|------|----------|
| headline | string | yes |
| contact | string | no |
| cta | string | no |

---

## Renderer support

| Preset | `generate.template.mjs` |
|--------|-------------------------|
| cover_hero | ✅ implemented |
| bullets_dense | ✅ implemented |
| three_col_cards | ✅ implemented |
| stat_row | ✅ implemented |
| section_break | documented only |
| chart_sidebar | documented only |
| comparison_table | documented only (use raw `elements[]` + `comparison` kind until wired) |
| closing_cta | documented only |

For undocumented presets, expand to `elements[]` manually using regions in `layout-presets.json`, or use equivalent raw schema examples in slide-schema.md.

---

## Recommended deck rhythm (Mode P + presets)

```
cover_hero → section_break? → bullets_dense × N → stat_row | chart_sidebar
→ three_col_cards → comparison_table? → closing_cta
```

Pair with theme presets from [brand-templates.md](brand-templates.md).
