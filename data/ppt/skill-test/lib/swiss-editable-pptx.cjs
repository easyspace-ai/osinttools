#!/usr/bin/env node
/**
 * Render SwissDeck IR → editable PPTX (pptxgenjs).
 * Recreates guizang Swiss visual language with native PPT shapes/text.
 */
const PptxGenJS = require('pptxgenjs');

const W = 10;
const H = 5.625;
const MX = 0.55;
const CW = W - MX * 2;

/** @param {import('./swiss-deck-ir.mjs').SwissDeck} deck */
function renderSwissEditablePptx(deck) {
  const c = { ...DEFAULT(), ...(deck.colors || {}) };
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = deck.title || 'Deck';
  pptx.author = 'guizang-export-editable';

  for (const slide of deck.slides || []) {
    const render = RENDERERS[slide.layout] || RENDERERS.S03;
    render(pptx, slide, c);
  }

  return pptx;
}

function DEFAULT() {
  return {
    paper: 'FAFAF8',
    ink: '0A0A0A',
    accent: '002FA7',
    grey1: 'F0F0EE',
    grey2: 'D4D4D2',
    grey3: '737373',
    white: 'FFFFFF',
  };
}

function chrome(slide, pptx, left, right, c, dark = false) {
  const color = dark ? 'FFFFFF' : c.grey3;
  slide.addText(left.toUpperCase(), {
    x: MX,
    y: 0.28,
    w: CW * 0.65,
    h: 0.25,
    fontSize: 8,
    fontFace: 'Courier New',
    color,
    charSpacing: 1.2,
  });
  slide.addText(right.toUpperCase(), {
    x: MX + CW * 0.35,
    y: 0.28,
    w: CW * 0.65,
    h: 0.25,
    fontSize: 8,
    fontFace: 'Courier New',
    color,
    align: 'right',
    charSpacing: 1.2,
  });
}

function accentTopBar(slide, pptx, c, h = 0.12) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: W,
    h,
    fill: { color: c.accent },
    line: { color: c.accent, width: 0 },
  });
}

function hairline(slide, pptx, y, c, w = CW) {
  slide.addShape(pptx.ShapeType.rect, {
    x: MX,
    y,
    w,
    h: 0.01,
    fill: { color: c.grey2 },
    line: { color: c.grey2, width: 0 },
  });
}

const RENDERERS = {
  S01(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.accent };
    chrome(sl, pptx, s.kicker || 'FIELD NOTE', s.footer || '01 / NN', c, true);
    if (s.kicker) {
      sl.addText(s.kicker.toUpperCase(), {
        x: MX,
        y: 0.75,
        w: CW,
        h: 0.3,
        fontSize: 9,
        color: 'FFFFFF',
        fontFace: 'Arial',
        charSpacing: 2,
      });
    }
    sl.addText(s.title || '', {
      x: MX,
      y: 1.6,
      w: CW,
      h: 2.2,
      fontSize: 36,
      color: 'FFFFFF',
      fontFace: 'Arial',
      bold: false,
      valign: 'middle',
      lineSpacingMultiple: 1.05,
    });
    hairline(sl, pptx, 4.35, { ...c, grey2: 'FFFFFF' });
    if (s.subtitle) {
      sl.addText(s.subtitle, {
        x: MX,
        y: 4.5,
        w: CW * 0.85,
        h: 0.75,
        fontSize: 14,
        color: 'FFFFFF',
        fontFace: 'Arial',
        lineSpacingMultiple: 1.35,
      });
    }
  },

  S09(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.ink };
    chrome(sl, pptx, s.kicker || 'STATEMENT', s.footer || '', c, true);
    sl.addText(s.title || '', {
      x: MX,
      y: 1.4,
      w: CW * 0.92,
      h: 1.8,
      fontSize: 32,
      color: 'FFFFFF',
      fontFace: 'Arial',
      lineSpacingMultiple: 1.08,
    });
    if (s.subtitle || s.body) {
      sl.addText(s.subtitle || s.body || '', {
        x: MX,
        y: 3.4,
        w: CW * 0.88,
        h: 1.6,
        fontSize: 14,
        color: 'CCCCCC',
        fontFace: 'Arial',
        lineSpacingMultiple: 1.4,
      });
    }
  },

  S03(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'CONCLUSION', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 1.4,
      w: CW * 0.92,
      h: 1.8,
      fontSize: 32,
      color: c.ink,
      fontFace: 'Arial',
      lineSpacingMultiple: 1.08,
    });
    if (s.subtitle || s.body) {
      sl.addText(s.subtitle || s.body || '', {
        x: MX,
        y: 3.4,
        w: CW * 0.88,
        h: 1.6,
        fontSize: 14,
        color: c.grey3,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.4,
      });
    }
  },

  S19(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    accentTopBar(sl, pptx, c);
    chrome(sl, pptx, s.kicker || '', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 0.55,
      w: CW,
      h: 0.75,
      fontSize: 26,
      color: c.ink,
      fontFace: 'Arial',
    });

    const cards = s.cards || [];
    const cols = 3;
    const rows = Math.ceil(cards.length / cols);
    const gap = 0.15;
    const cardW = (CW - gap * (cols - 1)) / cols;
    const cardH = (4.5 - gap * (rows - 1)) / Math.max(rows, 1);

    cards.forEach((card, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = MX + col * (cardW + gap);
      const y = 1.45 + row * (cardH + gap);
      const fill = card.accent ? c.accent : c.grey1;
      const textColor = card.accent ? c.white : c.ink;
      const bodyColor = card.accent ? 'EEEEEE' : c.grey3;

      sl.addShape(pptx.ShapeType.rect, {
        x,
        y,
        w: cardW,
        h: cardH,
        fill: { color: fill },
        line: { color: c.grey2, width: card.accent ? 0 : 0.5 },
      });
      sl.addText(card.title || '', {
        x: x + 0.12,
        y: y + 0.12,
        w: cardW - 0.24,
        h: 0.45,
        fontSize: 13,
        bold: true,
        color: textColor,
        fontFace: 'Arial',
      });
      sl.addText(card.body || '', {
        x: x + 0.12,
        y: y + 0.55,
        w: cardW - 0.24,
        h: cardH - 0.65,
        fontSize: 11,
        color: bodyColor,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.3,
      });
    });
  },

  S08(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'COMPARE', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 0.55,
      w: CW,
      h: 0.65,
      fontSize: 24,
      color: c.ink,
      fontFace: 'Arial',
    });

    const mid = MX + CW / 2;
    sl.addShape(pptx.ShapeType.rect, {
      x: mid - 0.01,
      y: 1.35,
      w: 0.02,
      h: 3.8,
      fill: { color: c.grey2 },
      line: { color: c.grey2, width: 0 },
    });

    for (const [side, offset] of [
      [s.left, MX],
      [s.right, mid + 0.15],
    ]) {
      if (!side) continue;
      const w = CW / 2 - 0.25;
      sl.addText((side.tag || '').toUpperCase(), {
        x: offset,
        y: 1.35,
        w,
        h: 0.25,
        fontSize: 9,
        color: c.grey3,
        fontFace: 'Courier New',
      });
      sl.addText(side.title || '', {
        x: offset,
        y: 1.65,
        w,
        h: 0.9,
        fontSize: 22,
        color: side === s.right ? c.accent : c.ink,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.05,
      });
      if (side.body) {
        sl.addText(side.body, {
          x: offset,
          y: 2.55,
          w,
          h: 0.9,
          fontSize: 12,
          color: c.grey3,
          fontFace: 'Arial',
          lineSpacingMultiple: 1.35,
        });
      }
      if (side.bullets?.length) {
        sl.addText(
          side.bullets.map((b) => ({
            text: b,
            options: {
              fontSize: 11,
              color: c.grey3,
              fontFace: 'Arial',
              bullet: { code: '2013', color: side === s.right ? c.accent : c.ink },
              paraSpaceAfter: 4,
            },
          })),
          { x: offset, y: 3.45, w, h: 1.5 },
        );
      }
    }
  },

  S20(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'DATA', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 0.55,
      w: CW,
      h: 0.65,
      fontSize: 24,
      color: c.ink,
      fontFace: 'Arial',
    });

    const stats = s.stats || [];
    stats.forEach((st, i) => {
      const y = 1.35 + i * 0.95;
      hairline(sl, pptx, y, c);
      sl.addText(st.value || '', {
        x: MX,
        y: y + 0.12,
        w: 1.8,
        h: 0.65,
        fontSize: 28,
        color: i === 0 || i === 3 ? c.accent : c.ink,
        fontFace: 'Arial',
      });
      sl.addText(st.label || '', {
        x: MX + 2.0,
        y: y + 0.12,
        w: CW - 2.2,
        h: 0.35,
        fontSize: 13,
        bold: true,
        color: c.ink,
        fontFace: 'Arial',
      });
      if (st.desc) {
        sl.addText(st.desc, {
          x: MX + 2.0,
          y: y + 0.45,
          w: CW - 2.2,
          h: 0.4,
          fontSize: 11,
          color: c.grey3,
          fontFace: 'Arial',
        });
      }
    });
  },

  S11(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'TIMELINE', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 0.55,
      w: CW,
      h: 0.65,
      fontSize: 24,
      color: c.ink,
      fontFace: 'Arial',
    });

    hairline(sl, pptx, 3.1, c);
    const items = s.timeline || [];
    const step = CW / Math.max(items.length, 1);

    items.forEach((item, i) => {
      const x = MX + i * step + step / 2 - 0.15;
      sl.addShape(pptx.ShapeType.rect, {
        x,
        y: 3.05,
        w: 0.12,
        h: 0.12,
        fill: { color: item.accent ? c.accent : c.ink },
        line: { color: item.accent ? c.accent : c.ink, width: 0 },
      });
      const labelY = i % 2 === 0 ? 2.35 : 3.35;
      sl.addText(item.date || '', {
        x: x - 0.5,
        y: labelY,
        w: 1.2,
        h: 0.22,
        fontSize: 8,
        align: 'center',
        color: item.accent ? c.accent : c.grey3,
        fontFace: 'Courier New',
      });
      sl.addText(item.title || '', {
        x: x - 0.65,
        y: labelY + 0.22,
        w: 1.5,
        h: 0.55,
        fontSize: 11,
        align: 'center',
        color: item.accent ? c.accent : c.ink,
        fontFace: 'Arial',
      });
    });
  },

  S13(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'FORCES', s.footer || '', c);

    sl.addShape(pptx.ShapeType.rect, {
      x: MX,
      y: 0.85,
      w: 2.8,
      h: 4.35,
      fill: { color: c.ink },
      line: { color: c.ink, width: 0 },
    });
    sl.addText(s.manifesto || s.title || '', {
      x: MX + 0.2,
      y: 1.5,
      w: 2.4,
      h: 2.2,
      fontSize: 22,
      color: 'FFFFFF',
      fontFace: 'Arial',
      lineSpacingMultiple: 1.05,
    });

    const cards = s.cards || [];
    cards.forEach((card, i) => {
      const y = 0.85 + i * 1.45;
      sl.addShape(pptx.ShapeType.rect, {
        x: MX + 3.0,
        y,
        w: CW - 3.0,
        h: 1.3,
        fill: { color: c.grey1 },
        line: { color: c.grey2, width: 0.5 },
      });
      sl.addText(String(i + 1).padStart(2, '0'), {
        x: MX + 3.15,
        y: y + 0.1,
        w: 0.6,
        h: 0.5,
        fontSize: 20,
        color: c.accent,
        fontFace: 'Arial',
      });
      sl.addText(card.title || '', {
        x: MX + 3.75,
        y: y + 0.12,
        w: CW - 3.9,
        h: 0.35,
        fontSize: 13,
        bold: true,
        color: c.ink,
        fontFace: 'Arial',
      });
      sl.addText(card.body || '', {
        x: MX + 3.75,
        y: y + 0.48,
        w: CW - 3.9,
        h: 0.7,
        fontSize: 11,
        color: c.grey3,
        fontFace: 'Arial',
      });
    });
  },

  S12(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };
    chrome(sl, pptx, s.kicker || 'MANIFESTO', s.footer || '', c);
    sl.addText(s.title || '', {
      x: MX,
      y: 0.85,
      w: CW * 0.48,
      h: 1.5,
      fontSize: 26,
      color: c.ink,
      fontFace: 'Arial',
      lineSpacingMultiple: 1.05,
    });
    if (s.body) {
      sl.addText(s.body, {
        x: MX + CW * 0.52,
        y: 0.85,
        w: CW * 0.48,
        h: 1.8,
        fontSize: 13,
        color: c.grey3,
        fontFace: 'Arial',
        lineSpacingMultiple: 1.4,
      });
    }
    sl.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 4.0,
      w: W,
      h: 1.625,
      fill: { color: c.ink },
      line: { color: c.ink, width: 0 },
    });
    sl.addText(s.manifesto || '', {
      x: MX,
      y: 4.25,
      w: CW * 0.75,
      h: 1.1,
      fontSize: 22,
      color: 'FFFFFF',
      fontFace: 'Arial',
    });
  },

  S10(pptx, s, c) {
    const sl = pptx.addSlide();
    sl.background = { color: c.paper };

    sl.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: W / 2,
      h: H,
      fill: { color: c.accent },
      line: { color: c.accent, width: 0 },
    });

    sl.addText(s.manifesto || s.title || '', {
      x: MX,
      y: 1.5,
      w: W / 2 - MX * 1.5,
      h: 2.0,
      fontSize: 26,
      color: 'FFFFFF',
      fontFace: 'Arial',
      lineSpacingMultiple: 1.05,
    });
    if (s.body) {
      sl.addText(s.body, {
        x: MX,
        y: 3.6,
        w: W / 2 - MX * 1.5,
        h: 1.2,
        fontSize: 12,
        color: 'EEEEEE',
        fontFace: 'Arial',
      });
    }

    const takeaways = s.takeaways || [];
    takeaways.forEach((t, i) => {
      const y = 0.75 + i * 1.45;
      hairline(sl, pptx, y, c, CW / 2 - 0.2);
      sl.addText(String(i + 1).padStart(2, '0'), {
        x: W / 2 + 0.25,
        y: y + 0.08,
        w: 0.5,
        h: 0.45,
        fontSize: 18,
        color: i === 2 ? c.accent : c.ink,
        fontFace: 'Arial',
      });
      sl.addText(t.title || '', {
        x: W / 2 + 0.85,
        y: y + 0.05,
        w: CW / 2 - 0.5,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: i === 2 ? c.accent : c.ink,
        fontFace: 'Arial',
      });
      sl.addText(t.body || '', {
        x: W / 2 + 0.85,
        y: y + 0.45,
        w: CW / 2 - 0.5,
        h: 0.75,
        fontSize: 11,
        color: c.grey3,
        fontFace: 'Arial',
      });
    });
  },
};

module.exports = { renderSwissEditablePptx, RENDERERS };
