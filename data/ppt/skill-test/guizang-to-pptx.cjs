#!/usr/bin/env node
/**
 * Guizang HTML → PPTX via Playwright viewport screenshots.
 * Preserves WebGL, typography, layout — unlike html2pptx text extraction.
 */
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const PptxGenJS = require('pptxgenjs');

const WIDTH = 1920;
const HEIGHT = 1080;
const ANIM_WAIT_MS = 1200;
const SLIDE_GAP_MS = 300;

async function exportGuizangHtml(htmlPath, outputPath, opts = {}) {
  const absHtml = path.resolve(htmlPath);
  if (!fs.existsSync(absHtml)) throw new Error(`HTML not found: ${absHtml}`);

  const waitMs = opts.animWaitMs ?? ANIM_WAIT_MS;
  const lowPower = opts.lowPower !== false;

  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({
      viewport: { width: WIDTH, height: HEIGHT },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.goto(pathToFileURL(absHtml).href, { waitUntil: 'networkidle', timeout: 60000 });

    await page.waitForSelector('#deck .slide', { timeout: 15000 });
    const total = await page.evaluate(() => document.querySelectorAll('#deck .slide').length);
    if (total === 0) throw new Error('No .slide sections found in #deck');

    if (lowPower && typeof page.evaluate === 'function') {
      await page.evaluate(() => {
        if (typeof window.__setLowPowerMode === 'function') {
          window.__setLowPowerMode(true, { persist: false });
        } else {
          document.body.classList.add('low-power');
        }
      });
      await page.waitForTimeout(400);
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';
    pptx.title = path.basename(absHtml, '.html');

    for (let i = 0; i < total; i++) {
      process.stdout.write(`Screenshot slide ${i + 1}/${total}...\n`);
      await page.evaluate((n) => {
        const deck = document.getElementById('deck');
        const slides = deck.querySelectorAll('.slide');
        slides.forEach((s, idx) => {
          s.style.transform = idx === n ? 'none' : '';
        });
        deck.style.transform = `translateX(${-n * 100}vw)`;
        window.__currentSlideIndex = n;
        const el = slides[n];
        const isDark = el.classList.contains('dark') || el.classList.contains('accent');
        document.body.classList.toggle('dark-bg', isDark);
        if (window.__playSlide) window.__playSlide(n);
        document.querySelectorAll('#nav .dot').forEach((d, idx) => {
          d.classList.toggle('active', idx === n);
        });
      }, i);

      await page.waitForTimeout(waitMs);

      const buffer = await page.screenshot({
        type: 'png',
        fullPage: false,
        animations: 'disabled',
      });

      const slide = pptx.addSlide();
      slide.background = { color: 'FAFAF8' };
      slide.addImage({
        data: `image/png;base64,${buffer.toString('base64')}`,
        x: 0,
        y: 0,
        w: '100%',
        h: '100%',
      });

      await page.waitForTimeout(SLIDE_GAP_MS);
    }

    fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });
    await pptx.writeFile({ fileName: path.resolve(outputPath) });
    process.stdout.write(`Wrote ${outputPath}\n`);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  const htmlPath = process.argv[2] || path.join(__dirname, 'guizang/index.html');
  const outputPath =
    process.argv[3] || path.join(__dirname, 'output/ai-relay-station-guizang.pptx');
  exportGuizangHtml(htmlPath, outputPath).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { exportGuizangHtml };
