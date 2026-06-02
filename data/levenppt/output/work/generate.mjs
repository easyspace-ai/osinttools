/**
 * Slide Schema → PPTX renderer template for ai-pptx-gen skill.
 * Usage: node generate.mjs   (reads ./schema.json, writes output/presentation.pptx)
 */
import pptxgen from "pptxgenjs";
import fs from "node:fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import sharp from "sharp";

const schema = JSON.parse(fs.readFileSync(new URL("./schema.json", import.meta.url)));
const OUT = process.env.OUT_FILE || "output/presentation.pptx";

const ICON_LOADERS = [
  () => import("react-icons/fa"),
  () => import("react-icons/md"),
  () => import("react-icons/hi"),
  () => import("react-icons/bi"),
];

async function iconToBase64Png(iconName, color = "000000", size = 256) {
  let IconComponent;
  for (const load of ICON_LOADERS) {
    const set = await load();
    if (set[iconName]) {
      IconComponent = set[iconName];
      break;
    }
  }
  if (!IconComponent) {
    console.warn("icon not found:", iconName);
    return null;
  }
  const hex = String(color).replace(/^#/, "");
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: `#${hex}`, size: String(size) })
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return `image/png;base64,${png.toString("base64")}`;
}

function renderStatGroup(slide, el, theme) {
  const { stats, x, y, w, h } = el;
  const itemH = h / stats.length;
  stats.forEach((stat, i) => {
    const sy = y + i * itemH;
    slide.addText(stat.value, {
      x, y: sy, w, h: itemH * 0.6,
      fontSize: 36, bold: true, color: stat.color || theme.primary,
      align: "center", valign: "bottom",
    });
    slide.addText(stat.label, {
      x, y: sy + itemH * 0.6, w, h: itemH * 0.35,
      fontSize: 13, color: "888888", align: "center",
    });
  });
}

async function renderIcons(slide, el) {
  if (el.kind === "icon") {
    const data = await iconToBase64Png(el.name, el.color, 256);
    if (data) slide.addImage({ data, x: el.x, y: el.y, w: el.w, h: el.h });
    return;
  }
  const icons = el.icons;
  const itemH = el.h / icons.length;
  for (let i = 0; i < icons.length; i++) {
    const ic = icons[i];
    const iy = el.y + i * itemH;
    const data = await iconToBase64Png(ic.name, ic.color, 256);
    if (data) slide.addImage({ data, x: el.x, y: iy + 0.05, w: 0.45, h: 0.45 });
    slide.addText(ic.label, {
      x: el.x + 0.55, y: iy, w: el.w - 0.55, h: itemH,
      fontSize: 15, color: ic.color, bold: true, valign: "middle",
    });
  }
}

async function renderCardGrid(pres, slide, el, theme) {
  const { cards, columns = 2, x, y, w, h, card_fill, title_color, body_color } = el;
  const rows = Math.ceil(cards.length / columns);
  const cardW = (w - (columns - 1) * 0.2) / columns;
  const cardH = (h - (rows - 1) * 0.15) / rows;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const col = i % columns;
    const row = Math.floor(i / columns);
    const cx = x + col * (cardW + 0.2);
    const cy = y + row * (cardH + 0.15);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cardW, h: cardH,
      fill: { color: card_fill || "FFFFFF" },
      line: { color: "E2E8F0", width: 0.5 },
    });

    if (card.icon) {
      const data = await iconToBase64Png(card.icon, card.icon_color || theme.primary, 256);
      if (data) slide.addImage({ data, x: cx + 0.2, y: cy + 0.2, w: 0.4, h: 0.4 });
    }

    slide.addText(card.title, {
      x: cx + 0.15, y: cy + 0.65, w: cardW - 0.3, h: 0.45,
      fontSize: 15, bold: true, color: title_color || theme.primary,
      fontFace: theme.font_body || "Calibri",
    });

    slide.addText(card.body, {
      x: cx + 0.15, y: cy + 1.1, w: cardW - 0.3, h: cardH - 1.25,
      fontSize: 12, color: body_color || "555555",
      fontFace: theme.font_body || "Calibri", wrap: true, lineSpacingMultiple: 1.3,
    });
  }
}

function renderTimeline(pres, slide, el, theme) {
  const { items, x, y, w, h, direction = "horizontal" } = el;
  const n = items.length;
  if (direction === "horizontal") {
    const stepW = w / n;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: y + h * 0.35, w: w - 0.4, h: 0.04,
      fill: { color: theme.secondary || "CCCCCC" }, line: { width: 0 },
    });
    items.forEach((item, i) => {
      const cx = x + i * stepW + stepW / 2;
      slide.addShape(pres.shapes.OVAL, {
        x: cx - 0.15, y: y + h * 0.35 - 0.12, w: 0.3, h: 0.3,
        fill: { color: item.color || theme.primary }, line: { width: 0 },
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
      fill: { color: col.header_color || theme.primary }, line: { width: 0 },
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

function renderFooter(slide, text, theme) {
  slide.addText(text, {
    x: 0.4, y: 5.35, w: 9.2, h: 0.25,
    fontSize: 9, color: "999999", fontFace: theme.font_body || "Calibri",
  });
}

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
        margin: el.margin ?? 4, lineSpacingMultiple: el.lineSpacingMultiple, wrap: true,
      });
      break;
    case "bullets": {
      const items = el.items.map((item, i) => ({
        text: item,
        options: {
          bullet: true, fontSize: el.fontSize || 16,
          color: el.color || theme.text_dark || "333333",
          breakLine: i < el.items.length - 1, paraSpaceAfter: 8,
        },
      }));
      slide.addText(items, {
        x: el.x, y: el.y, w: el.w, h: el.h,
        fontFace: el.fontFace || theme.font_body || "Calibri",
      });
      break;
    }
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
        valGridLine: { color: "E2E8F0", size: 0.5 }, catGridLine: { style: "none" },
        showValue: el.showValue !== false, showLegend: el.showLegend || false, legendPos: el.legendPos || "b",
      });
      break;
    }
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

async function renderSlide(pres, slide, slideData, theme) {
  for (const el of slideData.elements) {
    await renderElement(pres, slide, el, theme);
  }
}

async function main() {
  const pres = new pptxgen();
  const theme = schema.meta.theme || {};
  pres.layout = schema.meta.layout || "LAYOUT_16x9";
  pres.title = schema.meta.title;
  pres.author = schema.meta.author || "AI Generated";

  for (const slideData of schema.slides) {
    const slide = pres.addSlide();
    slide.background = { color: slideData.bg_color || "FFFFFF" };
    if (slideData.notes) slide.addNotes(slideData.notes);
    await renderSlide(pres, slide, slideData, theme);
    if (slideData.footer) renderFooter(slide, slideData.footer, theme);
  }

  fs.mkdirSync(new URL("./output/", import.meta.url), { recursive: true });
  await pres.writeFile({ fileName: OUT });
  console.log("✅", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
