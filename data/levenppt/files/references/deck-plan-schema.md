# deck-plan.json 中间产物

在 Mode T 中，**先**输出 `deck-plan.json` 供审阅，**再**展开为 `edits.json`。便于在不触碰 slot 寻址细节前对齐叙事与选页。

---

## Schema

```json
{
  "$schema": "deck-plan/v1",
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
      "headline": "2026 AI中转站调研",
      "bullets": ["月流水可达500万", "合规窗口关闭"],
      "notes": "用销售渠道页的大数字版式作开篇"
    },
    {
      "order": 2,
      "template_slide": 21,
      "intent": "executive_summary",
      "headline": "调研摘要",
      "bullets": [
        "法律：三重合规障碍",
        "商业：暴利依赖灰色手段",
        "结论：个人小团队已无搞头"
      ]
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
| `meta.title` | ✓ |  deck 标题 |
| `meta.target_slides` | | 目标页数 |
| `slides[].order` | ✓ | 输出顺序（1-based） |
| `slides[].template_slide` | ✓ | 原模板 1-indexed 页码 |
| `slides[].intent` | ✓ | 叙事角色，见下表 |
| `slides[].headline` | ✓ | 该页主标题（展开时映射到段落标题 slot） |
| `slides[].bullets` | | 要点列表（展开时映射到正文 slot） |
| `slides[].notes` | | 选页理由 / 槽位提示 |

---

## intent 枚举（常用）

| intent | 典型 Gorden 版式 |
|--------|------------------|
| `title` | 大数字 / 业绩首屏 |
| `executive_summary` | 四象限完成情况 |
| `swot` / `comparison` | SWOT、对比结构 |
| `case_study` | 问题-改进、复盘 |
| `tier_list` | 三段/多段目标拆解 |
| `timeline` | 甘特、季度规划 |
| `pyramid` | 金字塔逻辑 |
| `quote` | 树状图 / 大段引用 |
| `risk_list` | 问题与不足 |
| `conclusion` | 工作计划 / 总结 |

---

## 展开为 edits.json

1. 对每个 `slides[]` 项，在 `detail.json` 找到 `template_slide` 对应页。
2. 按 `intent` 将 `headline` → `段落标题` / `页面主标题` slot，`bullets` → `小标题` + `正文段落` slot。
3. 写入 `selected_slides`（按 `order` 排列的 `template_slide` 列表）与 `edits[]`（含 `slot_id` + `new_text`）。
4. 运行 `build_pptx.py --strict`；溢出则回到 deck-plan 缩短 bullets，**不改 template_slide**。

---

## 示例路径

```
data/levenppt/output/gorden/deck-plan.json   # 规划
data/levenppt/output/gorden/edits.json       # 构建输入
data/levenppt/output/ai-relay-station-gorden.pptx
```
