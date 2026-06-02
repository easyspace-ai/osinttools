# PptxGenJS 渲染指南

将 Slide Schema JSON 转为 Node.js 脚本，输出可编辑 `.pptx`。

---

## Layout presets（优先）

Mode P 默认走 **layout_preset + slots**；坐标在 `scripts/layout-presets.json`，由 `generate.template.mjs` 展开。AI **不要**为 preset 页写 raw x/y/w/h。

```json
{
  "layout_preset": "bullets_dense",
  "slots": {
    "title": "核心发现",
    "bullets": ["要点一", "要点二", "要点三"]
  }
}
```

| Preset | 渲染器 |
|--------|--------|
| `cover_hero`, `bullets_dense`, `three_col_cards`, `stat_row` | ✅ 已实现 |
| 其余 4 个 | 文档化；暂用手写 `elements[]` |

详见 [layout-presets.md](layout-presets.md)。画布：`SLIDE_W=10"`, `MARGIN_X=0.6"`, `CONTENT_W=8.8"`（同 Studio `exportPptx.ts`）。

---

## 环境准备

```bash
npm init -y
npm install pptxgenjs react react-dom react-icons sharp
```

`sharp` 将 react-icons SVG 转 PNG；图表一律 `slide.addChart()` 保持原生可编辑。

---

## 脚本骨架

完整模板见 [../scripts/generate.template.mjs](../scripts/generate.template.mjs)。

```javascript
import pptxgen from "pptxgenjs";
import fs from "node:fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import sharp from "sharp";

const schema = JSON.parse(fs.readFileSync("./schema.json", "utf8"));
const OUT = process.env.OUT_FILE || "output/presentation.pptx";

async function main() {
  const pres = new pptxgen();
  pres.layout = schema.meta.layout || "LAYOUT_16x9";
  pres.title = schema.meta.title;
  pres.author = schema.meta.author || "AI Generated";

  for (const slideData of schema.slides) {
    const slide = pres.addSlide();
    slide.background = { color: slideData.bg_color || "FFFFFF" };
    if (slideData.notes) slide.addNotes(slideData.notes);
    await renderSlide(pres, slide, slideData, schema.meta.theme || {});
    if (slideData.footer) renderFooter(slide, slideData.footer, schema.meta.theme);
  }

  fs.mkdirSync("output", { recursive: true });
  await pres.writeFile({ fileName: OUT });
  console.log("✅", OUT);
}

main().catch((e) => { console.error(e); process.exit(1); });
```

---

## renderSlide 分发

```javascript
async function renderSlide(pres, slide, slideData, theme) {
  for (const el of slideData.elements) {
    await renderElement(pres, slide, el, theme);
  }
}

function renderFooter(slide, text, theme) {
  slide.addText(text, {
    x: 0.4, y: 5.35, w: 9.2, h: 0.25,
    fontSize: 9, color: "999999",
    fontFace: theme.font_body || "Calibri",
  });
}
```

---

## 元素渲染

### text / bullets

```javascript
async function renderElement(pres, slide, el, theme) {
  switch (el.kind) {
    case "text":
      slide.addText(el.text, {
        x: el.x, y: el.y, w: el.w, h: el.h,
        fontSize: el.fontSize || 18,
        fontFace: el.fontFace || theme.font_body || "Calibri",
        color: el.color || theme.text_dark || "333333",
        bold: !!el.bold, italic: !!el.italic,
        align: el.align || "left", valign: el.valign || "top",
        margin: el.margin ?? 4,
        lineSpacingMultiple: el.lineSpacingMultiple,
        wrap: true,
      });
      break;

    case "bullets": {
      const items = el.items.map((item, i) => ({
        text: item,
        options: {
          bullet: true,
          fontSize: el.fontSize || 16,
          color: el.color || theme.text_dark || "333333",
          breakLine: i < el.items.length - 1,
          paraSpaceAfter: 8,
        },
      }));
      slide.addText(items, {
        x: el.x, y: el.y, w: el.w, h: el.h,
        fontFace: el.fontFace || theme.font_body || "Calibri",
      });
      break;
    }
```

### shape

```javascript
    case "shape":
      slide.addShape(pres.shapes[el.shape] || pres.shapes.RECTANGLE, {
        x: el.x, y: el.y, w: el.w, h: el.h,
        fill: { color: el.fill || "CCCCCC" },
        line: el.stroke
          ? { color: el.stroke, width: el.strokeWidth || 1 }
          : { color: el.fill || "CCCCCC", width: 0 },
        rectRadius: el.rectRadius,
      });
      break;
```

### chart

多系列数据格式：

```json
"data": [
  { "name": "2024", "labels": ["Q1","Q2","Q3","Q4"], "values": [10, 20, 30, 40] },
  { "name": "2025", "labels": ["Q1","Q2","Q3","Q4"], "values": [15, 25, 35, 50] }
]
```

单系列可简写为 `{ "name": "Q1", "values": [45] }`，渲染时用 `data.map(s => s.name)` 作 labels。

```javascript
    case "chart": {
      const labels = el.data[0]?.labels || el.data.map((s) => s.name);
      const chartData = el.data.map((series) => ({
        name: series.name,
        labels: series.labels || labels,
        values: series.values,
      }));
      slide.addChart(pres.charts[el.chartType] || pres.charts.BAR, chartData, {
        x: el.x, y: el.y, w: el.w, h: el.h,
        barDir: el.barDir || "col",
        chartColors: el.chartColors || [theme.primary, theme.secondary, theme.accent].filter(Boolean),
        chartArea: { fill: { color: "FFFFFF" }, roundedCorners: true },
        catAxisLabelColor: "64748B", valAxisLabelColor: "64748B",
        valGridLine: { color: "E2E8F0", size: 0.5 },
        catGridLine: { style: "none" },
        showValue: el.showValue !== false,
        showLegend: el.showLegend || false,
        legendPos: el.legendPos || "b",
      });
      break;
    }
```

### icon / icon_group

```javascript
    case "icon":
    case "icon_group":
      await renderIcons(slide, el);
      break;

    case "card_grid":
      await renderCardGrid(pres, slide, el, theme);
      break;

    case "stat_group":
      renderStatGroup(slide, el, theme);
      break;

    case "timeline":
      renderTimeline(pres, slide, el, theme);
      break;

    case "comparison":
      renderComparison(pres, slide, el, theme);
      break;

    case "image":
      slide.addImage({
        path: el.path,
        data: el.url?.startsWith("data:") ? el.url : undefined,
        x: el.x, y: el.y, w: el.w, h: el.h,
      });
      break;

    default:
      console.warn("Unknown kind:", el.kind);
  }
}
```

### 图标辅助

```javascript
const ICON_SETS = [
  () => import("react-icons/fa"),
  () => import("react-icons/md"),
  () => import("react-icons/hi"),
  () => import("react-icons/bi"),
];

async function iconToBase64Png(iconName, color = "000000", size = 256) {
  let IconComponent;
  for (const load of ICON_SETS) {
    const set = await load();
    if (set[iconName]) { IconComponent = set[iconName]; break; }
  }
  if (!IconComponent) {
    console.warn("⚠️ icon not found:", iconName);
    return null;
  }
  const hex = color.replace(/^#/, "");
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: `#${hex}`, size: String(size) })
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}
```

### timeline

```javascript
function renderTimeline(pres, slide, el, theme) {
  const { items, x, y, w, h, direction = "horizontal" } = el;
  const n = items.length;
  if (direction === "horizontal") {
    const stepW = w / n;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: y + h * 0.35, w: w - 0.4, h: 0.04,
      fill: { color: theme.secondary || "CCCCCC" },
      line: { width: 0 },
    });
    items.forEach((item, i) => {
      const cx = x + i * stepW + stepW / 2;
      slide.addShape(pres.shapes.OVAL, {
        x: cx - 0.15, y: y + h * 0.35 - 0.12, w: 0.3, h: 0.3,
        fill: { color: item.color || theme.primary },
        line: { width: 0 },
      });
      slide.addText(item.date, {
        x: x + i * stepW, y: y + h * 0.05, w: stepW, h: 0.35,
        fontSize: 11, bold: true, color: item.color || theme.primary, align: "center",
      });
      slide.addText(item.title, {
        x: x + i * stepW + 0.05, y: y + h * 0.55, w: stepW - 0.1, h: 0.45,
        fontSize: 14, bold: true, color: theme.text_dark || "333333", align: "center",
      });
      if (item.description) {
        slide.addText(item.description, {
          x: x + i * stepW + 0.05, y: y + h * 0.72, w: stepW - 0.1, h: 0.55,
          fontSize: 10, color: "666666", align: "center", wrap: true,
        });
      }
    });
  } else {
    const stepH = h / n;
    items.forEach((item, i) => {
      const cy = y + i * stepH;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.1, y: cy + 0.15, w: 0.08, h: stepH - 0.2,
        fill: { color: item.color || theme.primary }, line: { width: 0 },
      });
      slide.addText(`${item.date} · ${item.title}`, {
        x: x + 0.35, y: cy + 0.1, w: w - 0.45, h: 0.35,
        fontSize: 14, bold: true, color: theme.text_dark || "333333",
      });
      if (item.description) {
        slide.addText(item.description, {
          x: x + 0.35, y: cy + 0.45, w: w - 0.45, h: stepH - 0.55,
          fontSize: 11, color: "666666", wrap: true,
        });
      }
    });
  }
}
```

### comparison

```javascript
function renderComparison(pres, slide, el, theme) {
  const { columns, x, y, w, h, highlight_column } = el;
  const colW = (w - (columns.length - 1) * 0.15) / columns.length;
  columns.forEach((col, i) => {
    const cx = x + i * (colW + 0.15);
    const highlighted = i === highlight_column;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y, w: colW, h,
      fill: { color: highlighted ? "F0F7FF" : "FFFFFF" },
      line: { color: highlighted ? (col.header_color || theme.primary) : "E2E8F0", width: highlighted ? 1.5 : 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y, w: colW, h: 0.55,
      fill: { color: col.header_color || theme.primary },
      line: { width: 0 },
    });
    slide.addText(col.header, {
      x: cx + 0.1, y: y + 0.08, w: colW - 0.2, h: 0.4,
      fontSize: 16, bold: true, color: "FFFFFF", align: "center",
    });
    const bulletItems = col.items.map((item, j) => ({
      text: item,
      options: {
        bullet: true, fontSize: 13, color: theme.text_dark || "333333",
        breakLine: j < col.items.length - 1, paraSpaceAfter: 6,
      },
    }));
    slide.addText(bulletItems, {
      x: cx + 0.15, y: y + 0.7, w: colW - 0.3, h: h - 0.85,
      fontFace: theme.font_body || "Calibri",
    });
  });
}
```

`renderCardGrid` / `renderStatGroup` / `renderIcons` 实现同 v1，见 [generate.template.mjs](../scripts/generate.template.mjs)。

---

## 常见陷阱

| # | 规则 |
|---|------|
| 1 | 颜色 **不加 `#`**：`"FF0000"` ✅ |
| 2 | shadow 用 `opacity: 0.15`，不用 8 位 hex |
| 3 | 每次 `addText` / `addShape` 用**新 options 对象**（PptxGenJS 会 mutate） |
| 4 | bullets 用 `bullet: true`，不要手写 `•` |
| 5 | 多段文字用 `breakLine: true` |
| 6 | 全屏背景 shape：`w: 10, h: 5.625` |
| 7 | 中文 Windows 用 `Microsoft YaHei`，macOS 用 `PingFang SC` |

---

## 调试

```bash
# 若有 Anthropic extract-text
extract-text output/presentation.pptx

# 通用：解压读 slide XML
unzip -p output/presentation.pptx ppt/slides/slide1.xml | sed 's/<[^>]*>/\n/g' | grep -v '^$'

# PDF → 截图（LibreOffice）
soffice --headless --convert-to pdf output/presentation.pptx
pdftoppm -jpeg -r 150 presentation.pdf slide
```
