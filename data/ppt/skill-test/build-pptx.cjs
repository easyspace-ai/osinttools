#!/usr/bin/env node
/**
 * powerpoint-skill workflow: html2pptx-compatible slides → .pptx
 * Content mirrors guizang deck (same md source), using 720pt×405pt slide HTML.
 */
const fs = require('node:fs');
const path = require('node:path');
const pptxgen = require('pptxgenjs');
const html2pptx = require('../powerpoint-skill/scripts/html2pptx');

const OUT = path.join(__dirname, 'output', 'ai-relay-station.pptx');
const SLIDES_DIR = path.join(__dirname, 'pptx-slides');

const ACCENT = '002FA7';
const INK = '0A0A0A';
const GREY = '525252';

function slideHtml(bodyInner) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 720pt; height: 405pt;
    display: flex; flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    color: #${INK}; background: #FAFAF8;
    padding: 36pt 40pt 32pt;
  }
  h1 { font-size: 32pt; font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 14pt; }
  h2 { font-size: 24pt; font-weight: 400; line-height: 1.1; margin-bottom: 12pt; }
  h3 { font-size: 16pt; font-weight: 600; margin-bottom: 6pt; }
  p { font-size: 14pt; line-height: 1.45; color: #${GREY}; margin-bottom: 8pt; }
  .kicker { font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase; color: #737373; margin-bottom: 10pt; }
  .accent-bar { width: 100%; height: 6pt; background: #${ACCENT}; margin-bottom: 18pt; }
  .cols { display: flex; gap: 20pt; flex: 1; }
  .col { flex: 1; }
  .card { background: #F0F0EE; padding: 14pt; margin-bottom: 10pt; }
  .card-accent { background: #${ACCENT}; }
  .card-accent p, .card-accent h3 { color: #FFFFFF; }
  ul { margin-left: 16pt; font-size: 13pt; line-height: 1.5; color: #${GREY}; }
  li { margin-bottom: 6pt; }
  .stat { font-size: 28pt; font-weight: 300; color: #${ACCENT}; line-height: 1; margin-bottom: 0; }
  .row { display: flex; align-items: center; gap: 16pt; padding: 8pt 0; border-bottom: 1px solid #E0E0E0; }
  .cover { background: #${ACCENT}; color: #FFFFFF; justify-content: center; }
  .cover h1, .cover p, .cover .kicker { color: #FFFFFF; }
  .cover p { opacity: 0.9; }
</style></head><body>${bodyInner}</body></html>`;
}

const slides = [
  {
    file: '01-cover.html',
    html: slideHtml(`
      <div class="cover" style="margin:-36pt -40pt -32pt;padding:36pt 40pt 32pt;height:405pt;">
        <p class="kicker">Feasibility · Token Resale · 2026</p>
        <h1>2026 中国 AI 中转站 Token 业务深度调研</h1>
        <p>从野蛮生长到合规洗牌——法律、商业与竞争的三重挤压。</p>
        <p style="margin-top:auto;font-size:11pt;opacity:.75">来源 · md/ai-relay-station-report.md</p>
      </div>
    `),
  },
  {
    file: '02-summary.html',
    html: slideHtml(`
      <p class="kicker">Executive Summary · 02</p>
      <div class="accent-bar"></div>
      <h1>灰色入局风险极高，合规窗口已基本关闭</h1>
      <p>头部月流水可达 500 万、毛利率 50% 建立在模型替换、Token 虚报与数据倒卖之上；正规经营毛利率普遍不足 20%。国产模型价格仅为 GPT 的 1/10，大玩家入场后个人与小团队套利窗口已关闭。</p>
    `),
  },
  {
    file: '03-legal.html',
    html: slideHtml(`
      <p class="kicker">Policy & Legal · 03</p>
      <h2>三重合规障碍</h2>
      <div class="cols">
        <div class="col">
          <div class="card"><h3>电信经营许可</h3><p>须取得 ICP/EDI；无证经营可构成非法经营罪。</p></div>
          <div class="card"><h3>生成式 AI 备案</h3><p>海外模型未备案，中转站无法走通备案程序。</p></div>
        </div>
        <div class="col">
          <div class="card"><h3>数据出境评估</h3><p>用户请求路由境外构成数据出境，须履行评估。</p></div>
          <div class="card card-accent"><h3>上海首例刑拘</h3><p>2026 年 5 月站长被刑拘 37 天，刑事风险已兑现。</p></div>
        </div>
      </div>
    `),
  },
  {
    file: '04-profit.html',
    html: slideHtml(`
      <p class="kicker">Profit Model · 04</p>
      <h2>暴利表象下的灰色根基</h2>
      <div class="cols">
        <div class="col">
          <h3>正规档</h3>
          <p>企业批量采购转零售；毛利率不足 20%，合规成本高，无法与灰色低价竞争。</p>
          <ul><li>对公发票与资质投入</li><li>劣币驱逐良币</li></ul>
        </div>
        <div class="col">
          <h3 style="color:#${ACCENT}">灰色档</h3>
          <p>号池套利、模型替换；200 美元账号可拆分套利至 2000–5000 美元，毛利率常超 50%。</p>
          <ul><li>订阅-API 差价套利</li><li>Token 虚报与数据倒卖</li></ul>
        </div>
      </div>
    `),
  },
  {
    file: '05-data.html',
    html: slideHtml(`
      <p class="kicker">Market Data · 05</p>
      <h2 style="margin-bottom:8pt">关键数字</h2>
      <div class="row"><div><p class="stat">500万</p></div><div><h3>月流水</h3><p>头部项目毛利率约 50%</p></div></div>
      <div class="row"><div><p class="stat" style="color:#${INK}">1/10</p></div><div><h3>国产模型价格</h3><p>DeepSeek 仅为 GPT 1/10</p></div></div>
      <div class="row"><div><p class="stat" style="color:#${INK}">92+</p></div><div><h3>同类产品</h3><p>TokenNav 统计 92+ 个</p></div></div>
    `),
  },
  {
    file: '06-competition.html',
    html: slideHtml(`
      <p class="kicker">Competition · 06</p>
      <h2>2026 年 5 月 · 名人资本密集入局</h2>
      <ul>
        <li><b>05.01</b> 孙宇晨 B.AI — 区块链登录、USDT 支付</li>
        <li><b>05.01</b> 傅盛 EasyRouter — 40+ 模型、8.5 折</li>
        <li><b>05.05</b> Trump WLFI WorldRouter — 最高 9999 USD 套餐</li>
        <li><b>开源</b> One API 33k stars — 技术壁垒消失</li>
        <li><b>趋势</b> 国产模型 Token 调用量超过美国</li>
      </ul>
      <p style="margin-top:12pt">竞争焦点：稳定性 · 工程成熟度 · 真实成本控制</p>
    `),
  },
  {
    file: '07-paths.html',
    html: slideHtml(`
      <p class="kicker">Long-term Value · 07</p>
      <h2>三条路径均前景黯淡</h2>
      <div class="card"><h3>01 · 纯灰色运营</h3><p>高暴利、高刑事风险；监管进入主动执法，预期收益被风险吞噬。</p></div>
      <div class="card"><h3>02 · 合规化运营</h3><p>备案结构性不可能；合规成本压缩本已微薄的 20% 毛利。</p></div>
      <div class="card"><h3>03 · 转型出海</h3><p>国产 Token 反向输出或是新方向，仍面临合规与竞争压力。</p></div>
    `),
  },
  {
    file: '08-cooling.html',
    html: slideHtml(`
      <p class="kicker">Market Signal · 08</p>
      <h2>拼合规的阶段到了</h2>
      <p>21 财经 2026.05.28：多家民间中转站关闭支付渠道；名人背景平台声明「不面向中国大陆用户」。混乱近三个月后，行业进入收缩期。</p>
      <div class="card card-accent" style="margin-top:16pt"><h3>个人与小团队：已经没有搞头</h3><p style="color:rgba(255,255,255,.9)">21世纪经济报道 · 垦丁律所麻策</p></div>
    `),
  },
  {
    file: '09-conclusion.html',
    html: slideHtml(`
      <p class="kicker">Conclusion · 09</p>
      <h1>法律风险 · 竞争挤压 · 模式失效</h1>
      <p>上海首例刑拘划出红线；海外模型无法备案使合规基本不可能；国产降价与大玩家补贴持续收窄利润空间。</p>
    `),
  },
  {
    file: '10-closing.html',
    html: slideHtml(`
      <div class="cover" style="margin:-36pt -40pt -32pt;padding:36pt 40pt 32pt;height:405pt;">
        <p class="kicker">Closing · 10</p>
        <h1>窗口已关。转向合规能力。</h1>
        <p>01 刑事红线已划出 · 02 合规结构性障碍 · 03 商业窗口关闭</p>
        <p style="margin-top:14pt;font-size:13pt">有资源机构可探索国产 Token 出海、私有化部署，或退出大陆市场。</p>
        <p style="margin-top:auto;font-size:11pt;opacity:.75">报告日期 · 2026.05.29</p>
      </div>
    `),
  },
];

async function main() {
  fs.mkdirSync(SLIDES_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  for (const s of slides) {
    fs.writeFileSync(path.join(SLIDES_DIR, s.file), s.html);
  }

  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'ppt-skill-test';
  pptx.title = '2026 中国 AI 中转站 Token 业务调研';

  for (const s of slides) {
    const htmlFile = path.join(SLIDES_DIR, s.file);
    process.stdout.write(`Converting ${s.file}...\n`);
    await html2pptx(htmlFile, pptx);
  }

  await pptx.writeFile({ fileName: OUT });
  console.log('Wrote', OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
