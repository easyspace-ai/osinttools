/**
 * Parse guizang Swiss HTML → structured IR for editable PPTX export.
 */
const { parse } = require('node-html-parser');

const DEFAULT_COLORS = {
  paper: 'FAFAF8',
  ink: '0A0A0A',
  accent: '002FA7',
  grey1: 'F0F0EE',
  grey2: 'D4D4D2',
  grey3: '737373',
};

function hasClass(el, name) {
  return (el.classNames || '').split(/\s+/).includes(name);
}

function parseGuizangHtmlNode(html) {
  const root = parse(html);
  const title =
    root.querySelector('title')?.text?.split('·')[0]?.trim() || 'Untitled Deck';
  const sections = root.querySelectorAll('#deck .slide, #deck > section.slide');

  const slides = sections.map((sec, i) => {
    const layout = sec.getAttribute('data-layout') || guessLayout(sec);
    const slide = { id: `s${String(i + 1).padStart(2, '0')}`, layout };

    const q = (sel) => sec.querySelector(sel)?.text?.replace(/\s+/g, ' ').trim() || '';

    slide.kicker = q('.t-meta') || q('.t-cat');
    slide.footer = sec.querySelector('.chrome-min .r')?.text?.trim() || '';

    if (layout === 'S01') {
      slide.kicker = q('[data-anim="kicker"]') || slide.kicker;
      slide.title = q('h1');
      slide.subtitle = q('.lead');
      return slide;
    }

    if (layout === 'S09') {
      slide.title = q('h2');
      slide.body = q('.lead') || q('p');
      return slide;
    }

    if (layout === 'S03') {
      slide.title = q('h2');
      slide.body = q('.lead') || q('p');
      return slide;
    }

    if (layout === 'S08') {
      slide.title = q('h2.h-xl-zh') || q('h2');
      const cols = sec.querySelectorAll('.duo-compare .col');
      if (cols[0]) {
        slide.left = {
          tag: cols[0].querySelector('.col-tag')?.text?.trim() || '',
          title: cols[0].querySelector('.col-ttl')?.text?.replace(/\s+/g, ' ').trim() || '',
          body: cols[0].querySelector('.col-desc')?.text?.trim() || '',
          bullets: cols[0].querySelectorAll('.col-list li').map((li) => li.text?.trim() || ''),
        };
      }
      if (cols[1]) {
        slide.right = {
          tag: cols[1].querySelector('.col-tag')?.text?.trim() || '',
          title: cols[1].querySelector('.col-ttl')?.text?.replace(/\s+/g, ' ').trim() || '',
          body: cols[1].querySelector('.col-desc')?.text?.trim() || '',
          bullets: cols[1].querySelectorAll('.col-list li').map((li) => li.text?.trim() || ''),
        };
      }
      return slide;
    }

    if (layout === 'S19') {
      slide.title = q('h2.h-xl-zh') || q('h2');
      slide.cards = sec.querySelectorAll('.sub-card').map((c) => ({
        title: c.querySelector('h3, h4')?.text?.trim() || '',
        body: c.querySelector('p')?.text?.trim() || '',
        accent: hasClass(c, 'card-accent'),
      }));
      return slide;
    }

    if (layout === 'S20') {
      slide.title = q('h2.h-xl-zh') || q('h2');
      slide.stats = sec.querySelectorAll('[data-anim="row"]').map((row) => {
        let value = '';
        for (const p of row.querySelectorAll('p')) {
          const t = (p.text || '').replace(/\s+/g, '').trim();
          if (/[\d/+%万]/.test(t)) {
            value = t;
            break;
          }
        }
        const ps = row.querySelectorAll('p');
        return {
          value,
          label: row.querySelector('.t-cat, h3')?.text?.trim() || '',
          desc: ps.length > 1 ? ps[ps.length - 1]?.text?.trim() || '' : '',
        };
      });
      return slide;
    }

    if (layout === 'S11') {
      slide.title = q('h2.h-xl-zh') || q('h2');
      slide.timeline = sec.querySelectorAll('.th-node').map((n) => ({
        date: n.querySelector('.yr')?.text?.trim() || '',
        title: n.querySelector('.name')?.text?.trim() || '',
        desc: n.querySelector('.desc')?.text?.trim() || '',
        accent: hasClass(n, 'accent'),
      }));
      return slide;
    }

    if (layout === 'S13') {
      slide.manifesto = sec.querySelector('.card-ink h2')?.text?.replace(/\s+/g, ' ').trim() || '';
      slide.body = sec.querySelector('.card-ink p')?.text?.trim() || '';
      slide.cards = sec.querySelectorAll('.card-fill').map((c) => ({
        title: c.querySelector('h3')?.text?.trim() || '',
        body: c.querySelector('p')?.text?.trim() || '',
      }));
      return slide;
    }

    if (layout === 'S12') {
      slide.title = q('h2');
      slide.body = sec.querySelector('[data-anim="right"] p')?.text?.trim() || '';
      slide.manifesto = sec.querySelector('[data-anim="banner"] p')?.text?.trim() || '';
      return slide;
    }

    if (layout === 'S10') {
      slide.manifesto = sec.querySelector('.b-accent h2')?.text?.replace(/\s+/g, ' ').trim() || '';
      slide.body =
        sec.querySelector('.b-accent div[style*="font-size"]')?.text?.trim() ||
        sec.querySelector('.b-accent p')?.text?.trim() ||
        '';
      slide.takeaways = sec.querySelectorAll('[data-anim="rules"] > div').map((row) => ({
        title: row.querySelector('h3')?.text?.trim() || '',
        body: row.querySelector('p')?.text?.trim() || '',
      }));
      return slide;
    }

    slide.title = q('h1') || q('h2');
    slide.body = q('p');
    return slide;
  });

  return { version: 1, title, theme: 'swiss-ikb', colors: DEFAULT_COLORS, slides };
}

function guessLayout(sec) {
  const dl = sec.getAttribute('data-layout');
  if (dl) return dl;
  if (hasClass(sec, 'accent')) return 'S01';
  if (hasClass(sec, 'split')) return 'S10';
  if (sec.querySelector('.duo-compare')) return 'S08';
  if (sec.querySelector('.timeline-h')) return 'S11';
  if (hasClass(sec, 'dark')) return 'S09';
  return 'S03';
}

module.exports = { parseGuizangHtmlNode, DEFAULT_COLORS };
