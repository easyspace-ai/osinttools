---
name: pptgen-skill
description: Plan pom-native slide decks from Markdown for the pptgen CLI. Outputs outline.json (layouts, bullets, stats)—never raw pom XML. Merges guizang narrative rhythm, studio-pipeline stages, pom-slide tag rules, and Gorden template names when available.
---

# pptgen skill (plan-only)

Use with the **pptgen** Go CLI (`pptgen/plan`, `pptgen/pom`, `pptgen/build`). This skill does **not** generate pom XML; the Go builder in `pptgen/internal/pom` does.

## When to use

- User wants PPTX from Markdown via pom (not HTML guizang deck)
- User reports overflow, monotone cards, or bad footers in pptgen output
- User asks for "pom-native" presentation planning

## Pipeline

1. **Ingest** — `go run ./cmd/pptgen plan -input <file.md> -out outline.json`
2. **Refine (this skill)** — edit `outline.json`: layouts, bullet splits, footers
3. **Build** — `pptgen pom` → `pptgen build`

## Output schema (JSON only)

Match `pptgen/internal/plan`:

```json
{
  "title": "Deck title",
  "theme": "magazine",
  "color_theme": "ink-classic",
  "slides": [
    {
      "id": "s03",
      "layout": "hero|section|bullets|two_column|list|data_hero|quote",
      "title": "Slide title",
      "subtitle": "optional",
      "bullets": ["max 4 short lines per slide"],
      "stats": [{ "value": "37天", "label": "刑拘" }],
      "quote": "optional",
      "footer": "short source line",
      "purpose": "why this slide exists"
    }
  ]
}
```

## Layout rules (from guizang + studio-pipeline)

| layout | Use when |
|--------|----------|
| `hero` | Cover only |
| `section` | H2 chapter break |
| `data_hero` | 2–3 key metrics or one big number |
| `list` | 5+ bullets or any bullet >90 chars |
| `two_column` | 4 bullets comparing two sides |
| `bullets` | 1–3 short punchy points in cards |
| `quote` | Closing thesis |

**Rhythm:** Do not assign `bullets` more than twice in a row. Prefer `list` or `two_column` for dense report sections.

**Copy:** One idea per bullet; ≤90 Chinese chars for card layouts; split long sections into multiple slides (`s04-1`, `s04-2`).

**Footer:** One short horizontal line (source name), not the full deck title.

## References to load

| Topic | Path |
|-------|------|
| pom tag whitelist | `data/pom/skills/pom-slide/SKILL.md` (XML section) |
| guizang layouts/themes | `~/.claude/skills/guizang-ppt-skill/references/` or vendor into `data/ppt/guizang-ppt-skill/` |
| Studio stages | `data/ppt/studio-pipeline/01-comprehend.md` … `03-design.md` |
| Gorden templates | `data/ppt/GordenPPTSkill/assets/` (when vendored) → map to `layout` + notes |

## Forbidden

- Emitting `<Slide>`, `<Box>`, `<Icon>`, or full pom XML as the deliverable
- More than 4 bullets on one slide
- Using deck title as footer on every slide

## Handoff command

```bash
cd pptgen
go run ./cmd/pptgen pom -input outline.json -out output/deck.pom.xml
go run ./cmd/pptgen build -input output/deck.pom.xml -out output/deck.pptx
```
