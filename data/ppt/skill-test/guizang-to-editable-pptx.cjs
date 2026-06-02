#!/usr/bin/env node
/**
 * guizang HTML → parse IR → editable Swiss PPTX
 */
const fs = require('node:fs');
const path = require('node:path');
const { parseGuizangHtmlNode } = require('./lib/swiss-deck-ir.cjs');
const { renderSwissEditablePptx } = require('./lib/swiss-editable-pptx.cjs');

async function main() {
  const htmlPath = path.resolve(process.argv[2] || path.join(__dirname, 'guizang/index.html'));
  const outPath = path.resolve(
    process.argv[3] || path.join(__dirname, 'output/ai-relay-station-editable.pptx'),
  );
  const jsonPath = process.argv[4]
    ? path.resolve(process.argv[4])
    : outPath.replace(/\.pptx$/i, '.slides.json');

  const html = fs.readFileSync(htmlPath, 'utf8');
  const deck = parseGuizangHtmlNode(html);

  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(deck, null, 2), 'utf8');
  console.log('Wrote IR', jsonPath);

  const pptx = renderSwissEditablePptx(deck);
  await pptx.writeFile({ fileName: outPath });
  console.log('Wrote editable PPTX', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
