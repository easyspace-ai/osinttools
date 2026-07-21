import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GROUP_COLORS, type WordCloudWord } from '@/lib/dashboardApi'

interface WordCloudFlatProps {
  words: WordCloudWord[]
  onWordClick?: (word: string) => void
}

const MIN_SCALE = 0.45
const MAX_SCALE = 3.5
const DRAG_THRESHOLD = 5
const FONT_FAMILY = 'Inter, system-ui, -apple-system, sans-serif'

type PlacedWord = {
  text: string
  x: number
  y: number
  fontSize: number
  rotate: 0 | 90
  color: string
  boxW: number
  boxH: number
}

let measureCanvas: HTMLCanvasElement | null = null

function measureText(text: string, fontSize: number, rotate: 0 | 90): { boxW: number; boxH: number } {
  if (!measureCanvas) measureCanvas = document.createElement('canvas')
  const ctx = measureCanvas.getContext('2d')
  if (!ctx) {
    const approxW = text.length * fontSize * 0.62
    return rotate === 90
      ? { boxW: fontSize * 1.15, boxH: approxW }
      : { boxW: approxW, boxH: fontSize * 1.15 }
  }
  ctx.font = `600 ${fontSize}px ${FONT_FAMILY}`
  const metrics = ctx.measureText(text)
  const textW = metrics.width + fontSize * 0.35
  const textH = fontSize * 1.25
  return rotate === 90 ? { boxW: textH, boxH: textW } : { boxW: textW, boxH: textH }
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
  pad = 3,
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

  const maxW = Math.max(...words.map((x) => x.weight))
  const minW = Math.min(...words.map((x) => x.weight))
  const cx = width / 2
  const cy = height / 2
  const placed: PlacedWord[] = []

  const sorted = [...words].sort((a, b) => b.weight - a.weight)

  for (let i = 0; i < sorted.length; i++) {
    const item = sorted[i]
    const t = maxW > minW ? (item.weight - minW) / (maxW - minW) : 1
    const fontSize = Math.round(11 + t * 36)
    const rotate: 0 | 90 = i % 5 === 2 || i % 7 === 0 ? 90 : 0
    const { boxW, boxH } = measureText(item.text, fontSize, rotate)
    const color = GROUP_COLORS[item.group] || GROUP_COLORS.general

    let found = false
    let x = cx
    let y = cy

    // Spiral search from center
    const maxR = Math.sqrt(width * width + height * height) / 2
    for (let r = 0; r < maxR && !found; r += 4) {
      const steps = r === 0 ? 1 : Math.max(8, Math.ceil((2 * Math.PI * r) / 10))
      for (let s = 0; s < steps; s++) {
        const theta = (s / steps) * Math.PI * 2
        x = cx + Math.cos(theta) * r
        y = cy + Math.sin(theta) * r * 0.78

        if (
          x - boxW / 2 < 4 ||
          y - boxH / 2 < 4 ||
          x + boxW / 2 > width - 4 ||
          y + boxH / 2 > height - 4
        ) {
          continue
        }

        const hits = placed.some((p) =>
          boxesOverlap(x, y, boxW, boxH, p.x, p.y, p.boxW, p.boxH),
        )
        if (!hits) {
          found = true
          break
        }
      }
    }

    if (!found) {
      // Fallback: place near edge with slight offset
      x = 20 + (i % 8) * (width / 9)
      y = 20 + Math.floor(i / 8) * 28
    }

    placed.push({ text: item.text, x, y, fontSize, rotate, color, boxW, boxH })
  }

  return placed
}

export function WordCloudFlat({ words, onWordClick }: WordCloudFlatProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [dragging, setDragging] = useState(false)
  const viewRef = useRef({ pan: { x: 0, y: 0 }, scale: 1 })
  const dragRef = useRef<{
    active: boolean
    moved: boolean
    startX: number
    startY: number
    originX: number
    originY: number
  }>({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  })
  // Suppress button click after a drag gesture
  const suppressClickRef = useRef(false)

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

  useEffect(() => {
    viewRef.current = { pan: { x: 0, y: 0 }, scale: 1 }
    setPan({ x: 0, y: 0 })
    setScale(1)
  }, [words])

  useEffect(() => {
    viewRef.current = { pan, scale }
  }, [pan, scale])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = container.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const { pan: p, scale: s } = viewRef.current
      const factor = Math.exp(-e.deltaY * 0.002)
      const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s * factor))
      const wx = (mx - p.x) / s
      const wy = (my - p.y) / s
      const nextPan = {
        x: mx - wx * nextScale,
        y: my - wy * nextScale,
      }
      viewRef.current = { pan: nextPan, scale: nextScale }
      setPan(nextPan)
      setScale(nextScale)
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return
    const { pan: p } = viewRef.current
    dragRef.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      originX: p.x,
      originY: p.y,
    }
    suppressClickRef.current = false
    setDragging(true)
    // Intentionally no setPointerCapture — keeps word button clicks working
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      dragRef.current.moved = true
      suppressClickRef.current = true
    }
    if (!dragRef.current.moved) return
    const nextPan = {
      x: dragRef.current.originX + dx,
      y: dragRef.current.originY + dy,
    }
    viewRef.current = { ...viewRef.current, pan: nextPan }
    setPan(nextPan)
  }, [])

  const onPointerUp = useCallback(() => {
    dragRef.current.active = false
    setDragging(false)
  }, [])

  const resetView = useCallback(() => {
    viewRef.current = { pan: { x: 0, y: 0 }, scale: 1 }
    setPan({ x: 0, y: 0 })
    setScale(1)
  }, [])

  const handleWordClick = useCallback(
    (text: string) => {
      if (suppressClickRef.current || dragRef.current.moved) return
      onWordClick?.(text)
    },
    [onWordClick],
  )

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full touch-none select-none overflow-hidden bg-[#0b0e14]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
      onDoubleClick={resetView}
      title="拖拽平移 · 滚轮缩放 · 双击复位"
      style={{ cursor: dragging && dragRef.current.moved ? 'grabbing' : 'grab' }}
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
            className="absolute rounded px-1.5 py-0.5 font-semibold transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-400"
            style={{
              left: word.x,
              top: word.y,
              transform: `translate(-50%, -50%) rotate(${word.rotate}deg)`,
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
