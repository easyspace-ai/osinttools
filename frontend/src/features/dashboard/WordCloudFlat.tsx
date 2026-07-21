import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GROUP_COLORS, type WordCloudWord } from '@/lib/dashboardApi'
import { usePanZoom } from './usePanZoom'

interface WordCloudFlatProps {
  words: WordCloudWord[]
  onWordClick?: (word: string) => void
}

const FONT_FAMILY = 'Inter, system-ui, -apple-system, sans-serif'
/** Cap density so first paint stays readable. */
const MAX_WORDS = 48
/** Collision padding between word boxes (px). */
const COLLISION_PAD = 10
/** Spiral radius step — larger = more spacing, less overlap risk. */
const SPIRAL_STEP = 7
/** Arc sampling density along the spiral. */
const ARC_STEP_PX = 16
/** Squash Y so packing prefers horizontal spread. */
const Y_SQUASH = 0.48

type PlacedWord = {
  text: string
  x: number
  y: number
  fontSize: number
  color: string
  boxW: number
  boxH: number
}

let measureCanvas: HTMLCanvasElement | null = null

function measureText(text: string, fontSize: number): { boxW: number; boxH: number } {
  if (!measureCanvas) measureCanvas = document.createElement('canvas')
  const ctx = measureCanvas.getContext('2d')
  // Button padding (px-1.5 py-0.5) baked into box for collision
  const padX = 12
  const padY = 6
  if (!ctx) {
    const approxW = text.length * fontSize * 0.62 + padX
    return { boxW: approxW, boxH: fontSize * 1.2 + padY }
  }
  ctx.font = `600 ${fontSize}px ${FONT_FAMILY}`
  const metrics = ctx.measureText(text)
  return {
    boxW: metrics.width + padX,
    boxH: fontSize * 1.2 + padY,
  }
}

function boxesOverlap(
  ax: number,
  ay: number,
  aw: number,
  ah: number,
  bx: number,
  by: number,
  bw: number,
  bh: number,
  pad: number,
): boolean {
  return !(
    ax + aw / 2 + pad < bx - bw / 2 ||
    ax - aw / 2 - pad > bx + bw / 2 ||
    ay + ah / 2 + pad < by - bh / 2 ||
    ay - ah / 2 - pad > by + bh / 2
  )
}

function layoutWords(words: WordCloudWord[], width: number, height: number): PlacedWord[] {
  if (words.length === 0 || width <= 0 || height <= 0) return []

  const sorted = [...words].sort((a, b) => b.weight - a.weight).slice(0, MAX_WORDS)
  const maxW = Math.max(...sorted.map((x) => x.weight))
  const minW = Math.min(...sorted.map((x) => x.weight))
  const cx = width / 2
  const cy = height / 2
  const placed: PlacedWord[] = []
  const margin = 8

  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i]
    const t = maxW > minW ? (item.weight - minW) / (maxW - minW) : 1
    // Slightly restrained scale keeps dense clouds readable at zoom=1
    const fontSize = Math.round(11 + t * 26)
    const { boxW, boxH } = measureText(item.text, fontSize)
    const color = GROUP_COLORS[item.group] || GROUP_COLORS.general

    let found = false
    let x = cx
    let y = cy

    const maxR = Math.sqrt(width * width + height * height) / 2
    for (let r = 0; r < maxR && !found; r += SPIRAL_STEP) {
      const steps = r === 0 ? 1 : Math.max(10, Math.ceil((2 * Math.PI * r) / ARC_STEP_PX))
      for (let s = 0; s < steps; s++) {
        const theta = (s / steps) * Math.PI * 2
        x = cx + Math.cos(theta) * r
        y = cy + Math.sin(theta) * r * Y_SQUASH

        if (
          x - boxW / 2 < margin ||
          y - boxH / 2 < margin ||
          x + boxW / 2 > width - margin ||
          y + boxH / 2 > height - margin
        ) {
          continue
        }

        const hits = placed.some((p) =>
          boxesOverlap(x, y, boxW, boxH, p.x, p.y, p.boxW, p.boxH, COLLISION_PAD),
        )
        if (!hits) {
          found = true
          break
        }
      }
    }

    // Skip unplaceable words rather than stacking them in an overlapping grid
    if (!found) continue

    placed.push({ text: item.text, x, y, fontSize, color, boxW, boxH })
  }

  return placed
}

export function WordCloudFlat({ words, onWordClick }: WordCloudFlatProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const {
    pan,
    scale,
    cursor,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    resetView,
    shouldSuppressClick,
  } = usePanZoom(containerRef, words)

  const placed = useMemo(() => layoutWords(words, size.w, size.h), [words, size.w, size.h])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      setSize({ w: Math.floor(width), h: Math.floor(height) })
    })
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  const handleWordClick = useCallback(
    (text: string) => {
      if (shouldSuppressClick()) return
      onWordClick?.(text)
    },
    [onWordClick, shouldSuppressClick],
  )

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full touch-none select-none overflow-hidden bg-slate-50"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
      onDoubleClick={resetView}
      title="拖拽平移 · 滚轮缩放 · 双击复位"
      style={{ cursor }}
    >
      <div
        className="relative h-full w-full"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          transformOrigin: '0 0',
        }}
      >
        {placed.map((word) => (
          <button
            key={word.text}
            type="button"
            onClick={() => handleWordClick(word.text)}
            className="absolute rounded px-1.5 py-0.5 font-semibold transition-colors hover:bg-slate-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500"
            style={{
              left: word.x,
              top: word.y,
              transform: 'translate(-50%, -50%)',
              fontSize: word.fontSize,
              fontFamily: FONT_FAMILY,
              color: word.color,
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
            title={word.text}
          >
            {word.text}
          </button>
        ))}
      </div>
    </div>
  )
}
