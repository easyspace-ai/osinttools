#!/usr/bin/env node
/**
 * Headless HTML slide deck -> image-based PPTX (playwright + pptxgenjs).
 * Used when ohmyppt headless service cannot run Electron BrowserWindow export.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import pptxgen from 'pptxgenjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function parseArgs(argv) {
  const args = { projectDir: '', out: '' }
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--project-dir') args.projectDir = argv[++i]
    else if (argv[i] === '--out') args.out = argv[++i]
  }
  if (!args.projectDir || !args.out) {
    console.error('Usage: node html-to-pptx.mjs --project-dir DIR --out FILE.pptx')
    process.exit(1)
  }
  return args
}

async function main() {
  const { projectDir, out } = parseArgs(process.argv)
  const indexPath = path.join(projectDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    throw new Error(`index.html not found in ${projectDir}`)
  }

  const tmpDir = path.join(path.dirname(out), '.pptx-capture')
  fs.mkdirSync(tmpDir, { recursive: true })

  const indexHtml = fs.readFileSync(indexPath, 'utf-8')
  const pagesDataMatch = indexHtml.match(
    /<script type="application\/json" id="pages-data">([\s\S]*?)<\/script>/
  )
  let pageFiles = []
  if (pagesDataMatch) {
    const pages = JSON.parse(pagesDataMatch[1])
    pageFiles = pages.map((p) => p.htmlPath || `${p.pageId}.html`).filter(Boolean)
  }
  if (pageFiles.length === 0) {
    pageFiles = fs
      .readdirSync(projectDir)
      .filter((f) => /^page-.+\.html$/.test(f))
      .sort()
  }

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
  const pngPaths = []

  for (let i = 0; i < pageFiles.length; i++) {
    const htmlPath = path.join(projectDir, pageFiles[i])
    if (!fs.existsSync(htmlPath)) continue
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle', timeout: 120_000 })
    await page.waitForTimeout(2000)
    const pngPath = path.join(tmpDir, `slide-${String(i + 1).padStart(2, '0')}.png`)
    await page.screenshot({ path: pngPath })
    pngPaths.push(pngPath)
  }

  await browser.close()

  if (pngPaths.length === 0) {
    throw new Error('No slide HTML pages found to capture')
  }

  const pres = new pptxgen()
  pres.layout = 'LAYOUT_16x9'
  pres.author = 'OhMyPPT'
  pres.title = path.basename(out, '.pptx')

  for (const png of pngPaths) {
    const slide = pres.addSlide()
    slide.addImage({ path: png, x: 0, y: 0, w: '100%', h: '100%' })
  }

  fs.mkdirSync(path.dirname(out), { recursive: true })
  await pres.writeFile({ fileName: out })
  console.log(`Wrote ${pngPaths.length} slides -> ${out}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
