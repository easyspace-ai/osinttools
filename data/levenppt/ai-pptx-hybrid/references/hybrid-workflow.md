# Hybrid 完整管线

```
源材料 (Markdown)
    ↓
deck-plan.json          ← AI 规划：intent / headline / bullets
    ↓
score_slides.py         ← fit_score 修订 template_slide
    ↓
deck-plan-revised.json
    ↓
generate_edits.py       ← 映射 slot_id（复用 baseline edits 若 slide 未变）
    ↓
edits.json
    ↓
build_pptx.py --strict  ← Gorden 构建
    ↓
surgery.py (optional)   ← 隐藏/清理
    ↓
QA + hybrid-summary.json
```

---

## Step 0：前置

```bash
cd data/levenppt/GordenPPTSkill && python3 scripts/apply_update.py
```

---

## Step 1：deck-plan

沿用 [deck-plan-schema.md](deck-plan-schema.md)。Hybrid 扩展字段：

- `fit_score` — 评分后写入
- `fallback_mode` — `template` | `preset` | `split`
- `surgery[]` — 可选 post-build ops

---

## Step 2：评分与改选

```bash
python3 ai-pptx-hybrid/scripts/score_slides.py \
  --detail GordenPPTSkill/templates/<slug>/detail.json \
  --deck-plan output/gorden/deck-plan.json \
  --out output/hybrid/score-report.json \
  --revise-plan output/hybrid/deck-plan-revised.json
```

审查 `re_picked_orders`；若某页 `mode=preset`，改走 Mode P preset 或人工换模板。

---

## Step 3：edits 生成

```bash
python3 ai-pptx-hybrid/scripts/generate_edits.py \
  --deck-plan output/hybrid/deck-plan-revised.json \
  --detail GordenPPTSkill/templates/<slug>/detail.json \
  --baseline-edits output/gorden/edits.json \
  --out output/hybrid/edits.json
```

- **未 re-pick** 的页：复用 `baseline-edits` 中同 `template_slide` 的精细填槽
- **re-pick** 的页：按 role 自动映射（小标题↔bullets）

---

## Step 4：构建

```bash
python3 GordenPPTSkill/scripts/build_pptx.py \
  templates/<slug>/template.pptx \
  output/hybrid/edits.json \
  output/ai-relay-station-hybrid.pptx \
  --detail templates/<slug>/detail.json \
  --strict
```

strict 失败 → 缩短 `edits.json` 文案，**不要**改 `selected_slides`。

---

## Step 5：Surgery（可选）

见 [template-surgery.md](template-surgery.md)。

---

## Step 6：QA

1. 对比 `score-report.json` 与旧 gorden deck 选页差异
2. 检查 re-pick 页无 SWOT/占位残留
3. 有 soffice 时 `render_slides.py` 截图

---

## 一键编排

```bash
python3 ai-pptx-hybrid/scripts/build_hybrid.py \
  --template report-massive-reports \
  --deck-plan output/gorden/deck-plan.json \
  --baseline-edits output/gorden/edits.json \
  --source-md md/ai-relay-station-report.md \
  --out output/ai-relay-station-hybrid.pptx
```

工作目录默认：`output/hybrid/`。

---

## 与 ai-relay-station 演示

| 页 | 原 gorden | Hybrid 预期 |
|----|-----------|---------------|
| 3 三重合规障碍 | slide 14 SWOT | → slide 4 或 10（risk_list 语义） |
| 11 刑民风险 | slide 4 | 保持或微调 |
| 其余 | 不变 | fit_score ≥ 0.6 则保留 |

输出对比：`ai-relay-station-gorden.pptx` vs `ai-relay-station-hybrid.pptx`。
