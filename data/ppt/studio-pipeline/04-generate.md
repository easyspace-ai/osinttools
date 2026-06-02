# Studio Pipeline — Generate

根据 design_spec 与 outline 生成**三轨输出**：pom-xml（PPT 主格式）+ 网页预览 HTML + slide-json（兼容）。

## 输出格式（严格遵守）

按顺序输出三个代码块：

1. ```pom-xml — 完整 pom 演示稿（PPT 预览/导出的**主来源**）
2. ```html — 单文件横向翻页 HTML（浏览器预览备用）
3. ```slide-json — 结构化摘要（兼容旧导出，字段与 pom 内容一致）

### pom-xml 要求（严格遵守，否则预览失败）

- 顶层为多个 `<Slide>` 元素，每页一个；`<Slide>` 内至少一个子节点
- 杂志风：背景 `F1EFEA`、accent `C41E3A`、标题色 `0A0A0B`
- 使用 **VStack / HStack / Layer** 布局；要点页用卡片网格（`HStack flexWrap="wrap"` + 白底圆角 `VStack`）
- data_hero 页用 stat 三列（`backgroundColor="E8E4DC"` 的 `VStack`）
- section 页深色背景 `1A1A2E` + 左侧 accent 竖条（`Shape` 竖条或 `HStack` + `Shape`）
- 中文正文：每个 `<Text>` / `<Ul>` / `<Ol>` / `<Li>` 建议 `fontFamily="PingFang SC"`（pom 默认日文字体）
- 参考 https://pom.pptx.app/llm.txt 与 pom `TAG_TO_TYPE` 节点语法

#### 允许的节点标签（PascalCase，无其它别名）

`Slide`（顶层）· 布局：`VStack` `HStack` `Layer` · 内容：`Text` `Ul` `Ol` `Image` `Shape` `Icon` `Svg` `Line` `Arrow` · 数据图：`Chart` `Table` `Timeline` `Matrix` `Tree` `Flow` `ProcessArrow` `Pyramid`

**禁止**：`<Box>` `<Div>` 等 React/CSS 标签 — 用 `VStack`/`HStack` + `backgroundColor`/`padding`/`borderRadius` 代替容器。

#### 通用属性（布局节点可用；`Text` 不要用 `padding`）

| 属性 | 说明 |
|------|------|
| `w` `h` | 数字、`"max"` 或 `"50%"` |
| `padding` `margin` | **仅数字**（px），或点号：`padding.top="8"` `margin.top="12"` — 禁止 `16px`、`8 16`、`marginTop` |
| `backgroundColor` | 6 位 hex，**无 `#`**，如 `F1EFEA` |
| `border` | `border.color="D4D0C8" border.width="1"` |
| `borderRadius` | 数字（px） |
| `shadow` | 用 `shadow`，**禁止 `boxShadow`**；示例：`shadow.type="outer" shadow.blur="4" shadow.offset="2" shadow.color="000000"` |
| `gap` `alignItems` `justifyContent` `flexWrap` | 仅 `VStack`/`HStack` |

#### Text 节点

- 常用：`fontSize` `bold` `color` `textAlign` `lineHeight` `fontFamily`
- **不要**在 `<Text>` 上写 `padding` / `margin`（易写错格式）；间距用外层 `VStack` 的 `gap`/`padding`
- `color` 为 6 位 hex，无 `#`

#### 常见错误对照

| 错误 | 正确 |
|------|------|
| `<Box>` | `<VStack>` 或 `<HStack>` |
| `boxShadow="..."` | `shadow.type="outer" shadow.blur="4" ...` |
| `marginTop="8"` | `margin.top="8"` |
| `padding="16px"` | `padding="16"`（仅布局节点） |
| `background="#fff"` | `backgroundColor="FFFFFF"` |

示例（封面）：

```xml
<Slide>
<VStack w="100%" h="max" padding="64" backgroundColor="F1EFEA" gap="24" alignItems="center" justifyContent="center">
  <Text fontSize="48" bold="true" color="0A0A0B" textAlign="center">主标题</Text>
  <Text fontSize="22" color="6B6B6B" textAlign="center">副标题</Text>
</VStack>
</Slide>
```

### slide-json 结构

slide-json 是 PPT 导出的**唯一结构化来源**，字段必须尽量完整，以便导出时还原杂志风视觉。

```json
{
  "version": 1,
  "title": "演示标题",
  "theme": "magazine",
  "colors": {
    "bg": "F1EFEA",
    "title": "0A0A0B",
    "body": "3D3D3D",
    "muted": "6B6B6B",
    "accent": "C41E3A",
    "sectionBg": "1A1A2E",
    "statBg": "E8E4DC",
    "footer": "999999"
  },
  "slides": [
    {
      "id": "s01",
      "layout": "hero",
      "title": "主标题",
      "subtitle": "副标题",
      "bullets": [],
      "stats": [],
      "heroValue": "",
      "footer": "来源 / 日期",
      "quote": "",
      "speakerNotes": ""
    }
  ]
}
```

### layout 与必填字段

| layout | 用途 | 建议字段 |
|--------|------|----------|
| hero | 封面 / 章节幕封 | title, subtitle, footer |
| section | 章节过渡 | title, subtitle |
| bullets | 要点列举 | title, bullets（2-5 条）, footer |
| data_hero | 关键数字 | title, heroValue **或** stats[{value, label}]（1-3 个）, footer |
| quote | 金句 / 结论 | quote（或 title）, subtitle（出处）, footer |
| image_grid | 多图（v1 占位） | title, subtitle, bullets |

### stats 示例（data_hero 三列数据）

```json
"stats": [
  { "value": "42%", "label": "同比增长" },
  { "value": "1.2M", "label": "活跃用户" },
  { "value": "98%", "label": "满意度" }
]
```

## HTML 要求

- 单文件，横向翻页（键盘左右、滚轮）
- **杂志风**：暖 beige 背景（#f1efea）、衬线大标题、深红 accent（#c41e3a）用于数据高亮
- 每页用 `<section class="slide">` 包裹，含 h1 标题；有副标题时用 `.subtitle`；数据页用 `.stats > .stat` 结构（内含 `.value` + `.label`）
- 每页对应 outline 一页，标题与 bullets 与 slide-json **完全一致**
- 无 WebGL 依赖（v1 简化），用 CSS 渐变背景即可

## 三轨一致性

- pom-xml、HTML、slide-json 的 slides 数量、顺序、标题、要点必须一一对应
- data_hero 页：三边 stats 或 heroValue 在三处一致
- footer 文本相同

## 禁止

- 不补充 MD 未出现的事实
- 三个代码块都必须输出；pom-xml 不可省略
