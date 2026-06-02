#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const templatePath = path.join(root, 'guizang-ppt-skill/assets/template-swiss.html');
const slidesPath = path.join(__dirname, 'guizang-slides.html');
const outDir = path.join(__dirname, 'guizang');
const outPath = path.join(outDir, 'index.html');

let html = fs.readFileSync(templatePath, 'utf8');
const slides = fs.readFileSync(slidesPath, 'utf8');

html = html.replace(
  /<title>.*?<\/title>/,
  '<title>2026 中国 AI 中转站 Token 业务调研 · Field Note</title>'
);

const start = html.indexOf('<!-- ============ 示例:第 1 页');
const end = html.indexOf('</section>\n\n</div>\n\n<div id="nav">', start);
if (start === -1 || end === -1) {
  console.error('Could not locate slide injection region in template-swiss.html');
  process.exit(1);
}

html = html.slice(0, start) + slides.trim() + '\n\n' + html.slice(end);

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(outDir, 'images'), { recursive: true });
fs.writeFileSync(outPath, html);
console.log('Wrote', outPath);
