# deck-plan.json 中间产物（Hybrid 扩展）

在 Mode T / Hybrid 中，**先**输出 `deck-plan.json` 供审阅，**再**经 fit_score 修订，**最后**展开为 `edits.json`。

---

## Schema

```json
{
  "$schema": "deck-plan/v2-hybrid",
  "template_slug": "report-massive-reports",
  "source_material": "md/ai-relay-station-report.md",
  "meta": {
    "title": "2026年中国AI中转站Token业务可行性调研",
    "language": "zh",
    "target_slides": 12,
    "audience": "商业/投资"
  },
  "slides": [
    {
      "order": 1,
      "template_slide": 16,
      "intent": "title",
      "headline": "AI中转站Token调研",
      "bullets": ["2026年5月", "头部月流水约500万"],
      "fit_score": 0.85,
      "fallback_mode": "template",
      "notes": "hybrid re-pick: 14→4 (score 0.72)",
      "surgery": []
    }
  ]
}
```

---

## 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `template_slug` | ✓ | Gorden `templates/<slug>/` |
| `source_material` | | 源 Markdown / 文档路径 |
| `meta.title` | ✓ | deck 标题 |
| `meta.target_slides` | | 目标页数 |
| `slides[].order` | ✓ | 输出顺序（1-based） |
| `slides[].template_slide` | ✓ | 原模板 1-indexed 页码（score 后可被覆盖） |
| `slides[].intent` | ✓ | 叙事角色 |
| `slides[].headline` | ✓ | 该页主标题 |
| `slides[].bullets` | | 要点列表 |
| `slides[].notes` | | 选页理由 / re-pick 记录 |
| `slides[].fit_score` | | Hybrid：`score_slides.py` 写入 |
| `slides[].fallback_mode` | | `template` \| `preset` \| `split` |
| `slides[].surgery` | | post-build ops，见 template-surgery.md |

---

## intent 枚举（常用）

| intent | 典型 Gorden 版式 | fit_score 关键词 |
|--------|------------------|------------------|
| `title` | 大数字 / 业绩首屏 | 渠道、收入、数字 |
| `executive_summary` | 四象限完成情况 | 年度、完成情况 |
| `swot` | SWOT 四象限 | SWOT（需内容也匹配） |
| `case_study` | 问题-改进、复盘 | 问题、改进 |
| `tier_list` | 三段目标拆解 | 目标、拆解 |
| `timeline` | 甘特、季度 | 季度、规划 |
| `pyramid` | 金字塔逻辑 | 金字塔 |
| `quote` | 树状 / 大段引用 | 树状、回顾 |
| `risk_list` | 问题与不足、亮点列表 | 问题、风险、合规 |
| `comparison` | 对比、业绩展示 | 对比、成果 |
| `conclusion` | 工作计划 / 总结 | 计划、结论 |

---

## fallback_mode 路由

| mode | 下一步 |
|------|--------|
| `template` | 正常 `generate_edits` → `build_pptx` |
| `preset` | 读 `layout-presets.json`，Mode P 渲染该页 |
| `split` | 拆成 2 条 `slides[]`，重新 score |

---

## 展开为 edits.json

1. `score_slides.py` 更新 `template_slide`
2. `generate_edits.py` 按 role 映射 slot
3. 未 re-pick 的页可复用 baseline `edits.json`
4. `build_pptx.py --strict`

---

## 示例路径

```
data/levenppt/output/gorden/deck-plan.json       # 初始规划
data/levenppt/output/hybrid/deck-plan-revised.json
data/levenppt/output/hybrid/score-report.json
data/levenppt/output/hybrid/edits.json
data/levenppt/output/ai-relay-station-hybrid.pptx
```
