---
name: ai-pptx-gen
description: >
  双模式生成可编辑 .pptx：Mode T（默认）Gorden 模板填槽，商业级排版；Mode P（备选）AI 规划 +
  PptxGenJS 程序化渲染。触发词：生成PPT、制作幻灯片、做演示、路演、pitch deck、PowerPoint、
  pptx、汇报材料、商业计划书幻灯片、根据文档/CSV做PPT、模板PPT、麦肯锡风、工作汇报。
  用户提供主题/文字/PDF/DOCX/CSV 并要求 .pptx 输出时必须使用。
---

# AI PPT 生成（双模式）

## 模式路由（先读此节）

| 模式 | 名称 | 何时使用 | 核心产物 |
|------|------|----------|----------|
| **Mode T** | Template（Gorden 填槽） | **默认**。要商业级排版、有合适内置模板、用户给 Markdown/报告做调研型 deck | `deck-plan.json` → `edits.json` → `.pptx` |
| **Mode P** | Programmatic（PptxGenJS） | 无合适模板、用户要求全自定义/原创、或 Mode T strict 反复失败 | `schema.json` → `generate.mjs` → `.pptx` |

**路由规则**：
1. 用户提供长文/Markdown 调研报告 → 优先 **Mode T**，读 [report-layout-map.md](references/report-layout-map.md) 类映射（若有）。
2. 用户明确「不用模板 / 原创 / 简单干净」→ **Mode P**。
3. 用户指定品牌 theme 且无 Gorden 匹配 → **Mode P** + [brand-templates.md](references/brand-templates.md)。
4. Gorden 模板 `page_roles.cover` 为空时，**不要硬凑封面**；Mode P 可自由建 title slide。

> 若用户已有 Markdown 且要走 **pptgen/pom** 管线，改用 `data/ppt/pptgen-skill/SKILL.md`，不要与本 skill 混用。

### Gorden 许可（Mode T · Phase 1）

`data/levenppt/GordenPPTSkill/` 内置模板**仅供个人学习与研究**，**禁止商业用途**（含客户提案、对内营利汇报、培训分发等）。商用需获模板原作者授权。启用 Mode T 时先执行：

```bash
cd data/levenppt/GordenPPTSkill && python3 scripts/apply_update.py
```

---

## Mode T 工作流（Template · 默认）

**先读** [template-workflow.md](references/template-workflow.md)；规划阶段可读 [deck-plan-schema.md](references/deck-plan-schema.md)。

```
输入 → INDEX 选模板 → intro + detail 选页 → deck-plan.json → edits.json
     → build_pptx.py --strict → (可选) render_slides.py → QA
```

| 步 | 动作 |
|----|------|
| 1 | `GordenPPTSkill/templates/INDEX.md` 筛 slug（主色 + 场景 + 密度） |
| 2 | 读 `intro.md` + `detail.json`（`use_for`、`text_slots.max_chars`） |
| 3 | 写 `deck-plan.json`（slides[].intent / headline / bullets） |
| 4 | 展开为 `edits.json`（`selected_slides` + `slot_id` + `new_text`） |
| 5 | `python3 scripts/build_pptx.py templates/<slug>/template.pptx edits.json out.pptx --detail templates/<slug>/detail.json --strict` |
| 6 | strict 溢出 → **只缩短文案**，不改 layout，重跑 |
| 7 | 质检见 [qa-guide.md](references/qa-guide.md) Mode T 节 |

**chart 限制**：多数 Gorden 页图表为装饰形状；`chart_data` 仅对原生 chart 有效。Phase 1 数字写文本槽即可。

---

## Mode P 工作流（Programmatic · 备选）

### 产品架构（四层）

```
输入层 → AI 规划层 → 代码生成层 → 质检 & 输出层
                              ↑__________|  （失败回溯重生成）
```

| 层 | 职责 | 本 skill 对应 |
|----|------|--------------|
| **输入层** | 自然语言、文件上传、模板选择、偏好配置 | 阶段 1 |
| **AI 规划层** | 大纲、内容、设计决策 → **Slide Schema JSON** | 阶段 2 |
| **代码生成层** | Schema → PptxGenJS → `.pptx` | 阶段 3 |
| **质检层** | 截图 + 溢出检测 → 修复后重跑 | 阶段 4 |

**核心差异化**：AI 只输出结构化 JSON；PptxGenJS 负责渲染；图表用 `addChart()` 保持可编辑。

---

## 渐进式加载（控制 context）

| 文件 | 何时读取 | 约 tokens |
|------|---------|-----------|
| 本文件 `SKILL.md` | 始终 | ~3.5K |
| [references/template-workflow.md](references/template-workflow.md) | Mode T 开工前 | ~2K |
| [references/deck-plan-schema.md](references/deck-plan-schema.md) | Mode T 写规划前 | ~1.5K |
| [references/report-layout-map.md](references/report-layout-map.md) | 特定报告映射时 | ~1.5K |
| [references/slide-schema.md](references/slide-schema.md) | Mode P 阶段 2 | ~4K |
| [references/render-guide.md](references/render-guide.md) | Mode P 阶段 3 | ~5K |
| [references/qa-guide.md](references/qa-guide.md) | 任一模式质检前 | ~2.5K |
| [references/brand-templates.md](references/brand-templates.md) | Mode P 选 theme 时 | ~2K |
| [references/layout-presets.md](references/layout-presets.md) | Mode P 用 preset 填槽时 | ~2K |
| [references/own-templates.md](references/own-templates.md) | Phase 3 自有模板 | ~1K |

**不要**在阶段 1 一次性读完所有 reference。

---

## Mode P · 阶段 1：意图理解

收集信息；未提供时用默认值。**信息足够后直接进入阶段 2，勿反复确认。**

| 维度 | 选项 / 默认 |
|------|------------|
| **主题** | 必填 |
| **受众** | 技术 / 商业 / 学术 / 通用（默认：通用） |
| **页数** | 5–20（默认：8） |
| **风格** | 商务 / 科技 / 创意 / 简约（默认：商务） |
| **语言** | 中文 / 英文（默认：中文） |
| **画幅** | `LAYOUT_16x9`（默认） |
| **模板** | 见 brand-templates；未指定则按风格选 theme preset |

---

## Mode P · 阶段 2：AI 内容规划

**先读** [slide-schema.md](references/slide-schema.md) 与 [layout-presets.md](references/layout-presets.md)。

**优先 `layout_preset` + `slots`**，避免手写 `elements[]` 坐标。仅当预设无法表达时再使用 raw elements。

叙事结构：`cover_hero → section/content × N → stat_row | chart → three_col_cards → closing_cta`

先输出简要大纲，再输出完整 `schema.json`。

---

## Mode P · 阶段 3：PptxGenJS 渲染

**先读** [render-guide.md](references/render-guide.md)。

```bash
mkdir -p output && npm init -y && npm install pptxgenjs react react-dom react-icons sharp
node generate.mjs   # 默认 output/presentation.pptx
```

---

## Mode P · 阶段 4：质检与修复

**先读** [qa-guide.md](references/qa-guide.md)（Mode P 节）。

完成一轮修复循环后，若无新高/中严重度问题则停止。

---

## 设计原则（Mode P）

- **优先 layout_preset** — 见 [layout-presets.md](references/layout-presets.md)；raw `elements[]` 仅作 one-off
- 不用 PptxGenJS 默认蓝 — 从 theme preset 取色
- 每页必有视觉元素；三明治结构（首尾深色）
- 图表可编辑 — 用 `addChart()`，不用截图代替

---

## 交付清单

向用户报告：
- [ ] 输出文件路径
- [ ] 模式（T 或 P）、模板 slug / theme
- [ ] 幻灯片数量与各页标题
- [ ] strict 构建是否通过（Mode T）
- [ ] 质检是否通过、修复了哪些问题
