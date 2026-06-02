# Slide Schema 规范

Claude 在阶段 2 输出的 JSON。渲染脚本读取此格式并调用 PptxGenJS API。

**坐标系**：英寸，16:9 幻灯片 = `10" × 5.625"`。所有 `x,y,w,h` 不得超出此范围。

---

## 顶层结构

```json
{
  "meta": {
    "title": "演示文稿标题",
    "author": "作者",
    "language": "zh",
    "layout": "LAYOUT_16x9",
    "theme": {
      "preset": "midnight-exec",
      "primary": "1E3A5F",
      "secondary": "4ECDC4",
      "accent": "FF6B6B",
      "bg_dark": "1A1A2E",
      "bg_light": "F8F9FA",
      "text_dark": "2C3E50",
      "text_light": "FFFFFF",
      "font_heading": "Microsoft YaHei",
      "font_body": "Microsoft YaHei"
    }
  },
  "slides": []
}
```

`meta.theme.preset` 可选；若与具体色值同时存在，**色值优先**。

---

## Slide 类型一览

| type | 用途 |
|------|------|
| `title` | 封面 |
| `agenda` | 目录 / 议程 |
| `content` | 标题 + 要点 + 可选图标 |
| `split` | 左右分栏 |
| `grid` | 卡片网格 2×2 / 2×3 |
| `chart` | 数据图表 + 可选 stat |
| `timeline` | 时间线 / 里程碑 |
| `comparison` | 对比表（两列或多列） |
| `quote` | 金句 / 核心观点 |
| `closing` | 结语 / CTA / Q&A |

---

## 通用 Slide 字段

```json
{
  "type": "content",
  "bg_color": "F8F9FA",
  "footer": "来源 · 2026 Q1 报告",
  "notes": "演讲者备注，不渲染到幻灯片",
  "elements": []
}
```

### layout_preset 模式（推荐 · Mode P）

**优先使用** `layout_preset` + `slots`，不要手写坐标。预设 ID 与 slot 定义见 [layout-presets.md](layout-presets.md)。

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
    "footer": "2026 AI 中转站调研"
  }
}
```

| 字段 | 说明 |
|------|------|
| `layout_preset` | 预设 ID：`cover_hero`, `bullets_dense`, `three_col_cards`, … |
| `slots` | 具名内容槽，**不含** x/y/w/h |
| `type` | 使用 preset 时可省略；保留 `type` 仅作语义标注 |

同一 slide **不要** 同时出现 `layout_preset` 与 `elements[]`。需要完全自定义时用 raw elements（见下文）。

---

## 各类型示例

### type: "title"

```json
{
  "type": "title",
  "bg_color": "1A1A2E",
  "elements": [
    { "kind": "shape", "shape": "RECTANGLE", "x": 0, "y": 4.5, "w": 10, "h": 1.125, "fill": "4ECDC4" },
    { "kind": "text", "text": "演示标题", "x": 0.8, "y": 1.8, "w": 8.4, "h": 1.5,
      "fontSize": 44, "bold": true, "color": "FFFFFF", "align": "center" },
    { "kind": "text", "text": "副标题说明", "x": 0.8, "y": 3.5, "w": 8.4, "h": 0.8,
      "fontSize": 20, "color": "CCCCCC", "align": "center" },
    { "kind": "text", "text": "2026 · 公司名称", "x": 0.8, "y": 4.6, "w": 8.4, "h": 0.7,
      "fontSize": 14, "color": "FFFFFF", "align": "center" }
  ]
}
```

### type: "agenda"

```json
{
  "type": "agenda",
  "bg_color": "F8F9FA",
  "elements": [
    { "kind": "text", "text": "议程", "x": 0.4, "y": 0.2, "w": 9.2, "h": 0.8,
      "fontSize": 28, "bold": true, "color": "1E3A5F" },
    { "kind": "bullets", "items": ["市场背景", "产品方案", "商业模式", "融资计划"],
      "x": 0.6, "y": 1.2, "w": 5.0, "h": 3.8, "fontSize": 20, "color": "2C3E50" },
    { "kind": "shape", "shape": "RECTANGLE", "x": 6.2, "y": 1.0, "w": 3.4, "h": 4.0, "fill": "1E3A5F" },
    { "kind": "text", "text": "45 min", "x": 6.5, "y": 2.5, "w": 3.0, "h": 1.0,
      "fontSize": 36, "bold": true, "color": "FFFFFF", "align": "center" }
  ]
}
```

### type: "content"

```json
{
  "type": "content",
  "bg_color": "F8F9FA",
  "elements": [
    { "kind": "shape", "shape": "RECTANGLE", "x": 0, "y": 0, "w": 10, "h": 0.9, "fill": "1E3A5F" },
    { "kind": "text", "text": "页面标题", "x": 0.4, "y": 0.1, "w": 9.2, "h": 0.7,
      "fontSize": 28, "bold": true, "color": "FFFFFF" },
    { "kind": "bullets", "items": ["要点一", "要点二", "要点三"],
      "x": 0.6, "y": 1.2, "w": 5.5, "h": 3.8, "fontSize": 18, "color": "2C3E50" },
    { "kind": "icon_group", "icons": [
        { "name": "FaCheckCircle", "label": "高效", "color": "4ECDC4" },
        { "name": "FaRocket", "label": "快速", "color": "FF6B6B" },
        { "name": "FaShieldAlt", "label": "安全", "color": "1E3A5F" }
      ], "x": 6.5, "y": 1.2, "w": 3.2, "h": 3.8 }
  ]
}
```

### type: "split"

```json
{
  "type": "split",
  "bg_color": "FFFFFF",
  "elements": [
    { "kind": "shape", "shape": "RECTANGLE", "x": 0, "y": 0, "w": 4.8, "h": 5.625, "fill": "1E3A5F" },
    { "kind": "text", "text": "左侧标题", "x": 0.4, "y": 1.5, "w": 4.0, "h": 2.0,
      "fontSize": 32, "bold": true, "color": "FFFFFF", "valign": "middle" },
    { "kind": "text", "text": "右侧正文，展开说明核心信息。",
      "x": 5.2, "y": 1.2, "w": 4.4, "h": 3.5,
      "fontSize": 16, "color": "2C3E50", "lineSpacingMultiple": 1.4 }
  ]
}
```

### type: "chart"

```json
{
  "type": "chart",
  "bg_color": "F8F9FA",
  "elements": [
    { "kind": "text", "text": "数据洞察", "x": 0.4, "y": 0.2, "w": 9.2, "h": 0.8,
      "fontSize": 28, "bold": true, "color": "1E3A5F" },
    { "kind": "chart",
      "chartType": "BAR",
      "data": [
        { "name": "Q1", "values": [45] },
        { "name": "Q2", "values": [62] },
        { "name": "Q3", "values": [78] },
        { "name": "Q4", "values": [91] }
      ],
      "x": 0.5, "y": 1.2, "w": 6.0, "h": 3.8,
      "chartColors": ["1E3A5F", "4ECDC4", "FF6B6B"],
      "showValue": true, "barDir": "col"
    },
    { "kind": "stat_group", "stats": [
        { "value": "+32%", "label": "同比增长", "color": "4ECDC4" },
        { "value": "91分", "label": "满意度", "color": "1E3A5F" }
      ], "x": 6.8, "y": 1.5, "w": 2.8, "h": 3.2 }
  ]
}
```

**chartType 选型**：

| 数据特征 | chartType |
|---------|-----------|
| 分类对比 | `BAR`（`barDir: "col"`） |
| 时间趋势 | `LINE` |
| 占比 | `PIE` 或 `DOUGHNUT` |
| 多系列对比 | `BAR` + 多 `values` |
| 累计趋势 | `AREA` |

### type: "timeline"

```json
{
  "type": "timeline",
  "bg_color": "F8F9FA",
  "elements": [
    { "kind": "text", "text": "产品路线图", "x": 0.4, "y": 0.15, "w": 9.2, "h": 0.7,
      "fontSize": 28, "bold": true, "color": "1E3A5F" },
    { "kind": "timeline",
      "direction": "horizontal",
      "items": [
        { "date": "Q1", "title": "MVP", "description": "核心功能上线", "color": "4ECDC4" },
        { "date": "Q2", "title": "增长", "description": "10万用户", "color": "1E3A5F" },
        { "date": "Q3", "title": "商业化", "description": "付费转化", "color": "FF6B6B" },
        { "date": "Q4", "title": "扩展", "description": "Enterprise", "color": "F39C12" }
      ],
      "x": 0.4, "y": 1.3, "w": 9.2, "h": 3.8
    }
  ]
}
```

`direction`: `horizontal`（3–5 项）| `vertical`（4+ 项且描述较长）

### type: "comparison"

```json
{
  "type": "comparison",
  "bg_color": "FFFFFF",
  "elements": [
    { "kind": "text", "text": "方案对比", "x": 0.4, "y": 0.15, "w": 9.2, "h": 0.7,
      "fontSize": 28, "bold": true, "color": "1E3A5F" },
    { "kind": "comparison",
      "columns": [
        { "header": "方案 A", "header_color": "1E3A5F", "items": ["成本低", "上线快", "功能少"] },
        { "header": "方案 B", "header_color": "4ECDC4", "items": ["成本中", "功能全", "维护复杂"] }
      ],
      "highlight_column": 1,
      "x": 0.4, "y": 1.0, "w": 9.2, "h": 4.2
    }
  ]
}
```

可选第三列用于「推荐方案」；`highlight_column` 为 0-based 索引。

### type: "grid"

```json
{
  "type": "grid",
  "bg_color": "F8F9FA",
  "elements": [
    { "kind": "text", "text": "四大优势", "x": 0.4, "y": 0.15, "w": 9.2, "h": 0.7,
      "fontSize": 28, "bold": true, "color": "1E3A5F" },
    { "kind": "card_grid",
      "columns": 2,
      "cards": [
        { "icon": "FaBolt", "icon_color": "FF6B6B", "title": "高性能", "body": "毫秒级响应。" },
        { "icon": "FaLock", "icon_color": "4ECDC4", "title": "安全可靠", "body": "端对端加密。" },
        { "icon": "FaExpand", "icon_color": "1E3A5F", "title": "弹性扩展", "body": "按需扩容。" },
        { "icon": "FaHeadset", "icon_color": "F39C12", "title": "专业支持", "body": "7×24 SLA。" }
      ],
      "x": 0.4, "y": 1.0, "w": 9.2, "h": 4.3,
      "card_fill": "FFFFFF", "title_color": "1E3A5F", "body_color": "666666"
    }
  ]
}
```

### type: "quote"

```json
{
  "type": "quote",
  "bg_color": "1A1A2E",
  "elements": [
    { "kind": "shape", "shape": "RECTANGLE", "x": 0.6, "y": 2.0, "w": 0.15, "h": 1.8, "fill": "4ECDC4" },
    { "kind": "text", "text": "核心观点或数据结论。",
      "x": 1.0, "y": 1.8, "w": 8.0, "h": 2.2,
      "fontSize": 28, "bold": true, "color": "FFFFFF", "valign": "middle", "italic": true },
    { "kind": "text", "text": "— 来源", "x": 1.0, "y": 4.1, "w": 8.0, "h": 0.6,
      "fontSize": 14, "color": "AAAAAA" }
  ]
}
```

### type: "closing"

```json
{
  "type": "closing",
  "bg_color": "1A1A2E",
  "elements": [
    { "kind": "text", "text": "谢谢", "x": 0.8, "y": 1.8, "w": 8.4, "h": 1.2,
      "fontSize": 44, "bold": true, "color": "FFFFFF", "align": "center" },
    { "kind": "text", "text": "contact@example.com · example.com",
      "x": 0.8, "y": 3.2, "w": 8.4, "h": 0.6,
      "fontSize": 16, "color": "CCCCCC", "align": "center" },
    { "kind": "text", "text": "Q & A",
      "x": 0.8, "y": 4.0, "w": 8.4, "h": 0.5,
      "fontSize": 14, "color": "4ECDC4", "align": "center" }
  ]
}
```

---

## 元素 kind 速查

| kind | 必填字段 |
|------|---------|
| `text` | text, x, y, w, h, fontSize, color |
| `shape` | shape, x, y, w, h, fill |
| `bullets` | items[], x, y, w, h, fontSize, color |
| `chart` | chartType, data[], x, y, w, h |
| `icon` | name, x, y, w, h, color |
| `icon_group` | icons[], x, y, w, h |
| `card_grid` | cards[], columns, x, y, w, h |
| `stat_group` | stats[], x, y, w, h |
| `timeline` | items[], x, y, w, h |
| `comparison` | columns[], x, y, w, h |
| `image` | path 或 url, x, y, w, h |

**react-icons 命名**：`Fa*` / `Md*` / `Hi*` / `Bi*` 前缀 + PascalCase，如 `FaRocket`。

---

## 主题 preset

| preset | 主色 | 副色 | 场景 |
|--------|------|------|------|
| `midnight-exec` | 1E2761 | CADCFC | 投资路演 |
| `tech-dark` | 0D1117 | 58A6FF | 科技产品 |
| `coral-energy` | F96167 | F9E795 | 创业活动 |
| `forest-calm` | 2C5F2D | 97BC62 | 可持续 |
| `teal-trust` | 028090 | 02C39A | 医疗金融 |
| `minimal-white` | 333333 | 007AFF | 学术极简 |

完整品牌模板见 [brand-templates.md](brand-templates.md)。

---

## 校验规则（生成后自检）

- [ ] `slides.length` 与用户要求页数 ±1 以内
- [ ] 每个 element 的 `x+w ≤ 10` 且 `y+h ≤ 5.625`
- [ ] 颜色均为 6 位 hex，**无 `#` 前缀**
- [ ] `chart.data` 每项有 `name` + `values[]`
- [ ] 无空 `text` / 空 `items`
- [ ] `title` 与 `closing` 各最多 1 页
- [ ] Mode P：**优先** `layout_preset`；仅 one-off 页使用 raw `elements[]`
