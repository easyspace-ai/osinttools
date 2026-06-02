---
name: ai-pptx-hybrid
description: >
  混合模式生成可编辑 .pptx：Gorden 模板 + AI 智能选页（fit_score）+ 填槽后微调（surgery）。
  触发词：智能模板PPT、混合模式、调研报告PPT、Gorden改进、fit_score、模板微调。
  在 ai-pptx-gen Mode T 基础上增加自动选页与 post-build 安全修改，不替代原 skill。
---

# AI PPT 混合模式（Hybrid）

> **哲学**：模板提供视觉，AI 提供匹配与微调。

## 与原 skill 的关系

| | `ai-pptx-gen` (原) | `ai-pptx-hybrid` (本) |
|--|-------------------|----------------------|
| 选页 | 硬编码 `report-layout-map.md` 或人工 | **fit_score 自动排序** |
| 微调 | 只缩短文案 | **填槽 + surgery 安全 ops** |
| 失败 | 改文案重跑 strict | score < 0.6 → **preset / split 降级** |

**不要**覆盖或删除 `data/levenppt/SKILL.md`（原 ai-pptx-gen）。

---

## 三层架构

```
Theme（Gorden 模板视觉）
    ↓
Match（fit_score 选页 + slot 容量匹配）
    ↓
Adjust（edits 填槽 + surgery 隐藏/清理 + preset 降级）
```

| 层 | 职责 | 产物 |
|----|------|------|
| **Theme** | 保留 Gorden 排版、字体、配色 | `template.pptx` + `detail.json` |
| **Match** | 按 intent + 内容语义 + 槽位容量评分 | `score-report.json`、修订 `deck-plan` |
| **Adjust** | 填槽、strict 构建、可选 surgery | `edits.json` → `.pptx` |

---

## Gorden 许可

`data/levenppt/GordenPPTSkill/` 模板**仅供个人学习与研究**，**禁止商业用途**。启用前先执行：

```bash
cd data/levenppt/GordenPPTSkill && python3 scripts/apply_update.py
```

---

## 快速开始

```bash
python3 data/levenppt/ai-pptx-hybrid/scripts/build_hybrid.py \
  --template report-massive-reports \
  --deck-plan data/levenppt/output/gorden/deck-plan.json \
  --baseline-edits data/levenppt/output/gorden/edits.json \
  --source-md md/ai-relay-station-report.md \
  --out data/levenppt/output/ai-relay-station-hybrid.pptx
```

产物：
- `output/hybrid/score-report.json` — 每页评分与 re-pick 理由
- `output/hybrid/deck-plan-revised.json`
- `output/hybrid/edits.json`
- `output/ai-relay-station-hybrid.pptx`

---

## 渐进式加载

| 文件 | 何时读取 | 约 tokens |
|------|---------|-----------|
| 本文件 `SKILL.md` | 始终 | ~2.5K |
| [hybrid-workflow.md](references/hybrid-workflow.md) | 开工前 | ~2K |
| [template-matching.md](references/template-matching.md) | 写/跑 score 前 | ~2K |
| [template-surgery.md](references/template-surgery.md) | 需要 post-build 微调 | ~1.5K |
| [deck-plan-schema.md](references/deck-plan-schema.md) | 写 deck-plan | ~2K |
| Gorden `detail.json` | 选页/填槽 | 按需分页 |
| [layout-presets.md](../references/layout-presets.md) | preset 降级 | ~2K |

---

## 工作流摘要

```
deck-plan.json → score_slides.py → deck-plan-revised.json
              → generate_edits.py → edits.json
              → build_pptx.py --strict → .pptx
              → surgery.py (optional) → final .pptx
```

详见 [hybrid-workflow.md](references/hybrid-workflow.md)。

---

## 何时用 Hybrid vs 原 Mode T / Mode P

| 场景 | 路由 |
|------|------|
| 长文调研报告、要 Gorden 视觉、接受 AI 改选页 | **Hybrid（本 skill）** |
| 已有固定章节映射、人工审过选页 | 原 `ai-pptx-gen` Mode T |
| 无合适模板 / 全自定义 | 原 `ai-pptx-gen` Mode P |
| fit_score 最佳 < 0.6 | Hybrid 降级 preset 或 split |

---

## 脚本索引

| 脚本 | 作用 |
|------|------|
| `scripts/score_slides.py` | fit_score 排名 |
| `scripts/generate_edits.py` | deck-plan → edits.json |
| `scripts/build_hybrid.py` | 端到端编排 |
| `scripts/surgery.py` | post-build 安全修改 |
| `scripts/layout-presets.json` | Mode P 降级 preset 定义 |

Gorden 构建：`../GordenPPTSkill/scripts/build_pptx.py`
