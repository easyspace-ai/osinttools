import { useCallback, useMemo, useRef, type ReactNode } from 'react'
import { ResponsiveContainer, Treemap, type TreemapNode } from 'recharts'
import { GROUP_COLORS, type WordCloudWord } from '@/lib/dashboardApi'
import { usePanZoom } from './usePanZoom'

/** Prefer fewer readable tiles over many empty boxes. */
const TREEMAP_TOP_N = 36
/** Drop long-tail words below this fraction of the heaviest word. */
const MIN_WEIGHT_RATIO = 0.025
/** Show label text when tile is at least this large. */
const MIN_LABEL_W = 28
const MIN_LABEL_H = 18
const MIN_WEIGHT_W = 52
const MIN_WEIGHT_H = 36

interface WordCloudTreemapProps {
  words: WordCloudWord[]
  loading?: boolean
  error?: string | null
  onWordClick?: (word: string) => void
}

type TreemapDatum = {
  name: string
  value: number
  fill: string
}

function TreemapCell(props: TreemapNode) {
  const { x, y, width, height, name, value, children } = props
  const fill = (typeof props.fill === 'string' ? props.fill : null) || GROUP_COLORS.general
  const isLeaf = !children || children.length === 0

  if (!isLeaf || width <= 2 || height <= 2) return null

  const pad = 1.5
  const innerW = Math.max(0, width - pad * 2)
  const innerH = Math.max(0, height - pad * 2)
  const showLabel = innerW >= MIN_LABEL_W && innerH >= MIN_LABEL_H
  const showWeight = showLabel && innerW >= MIN_WEIGHT_W && innerH >= MIN_WEIGHT_H
  const fontSize = Math.max(
    10,
    Math.min(16, Math.min(innerW / Math.max(1, (name?.length ?? 1) * 0.62), innerH * 0.42)),
  )
  const tip = name ? `${name}${value != null ? ` · ${value}` : ''}` : ''

  return (
    <g>
      {tip ? <title>{tip}</title> : null}
      <rect
        x={x + pad}
        y={y + pad}
        width={Math.max(0, width - pad * 2)}
        height={Math.max(0, height - pad * 2)}
        rx={3}
        ry={3}
        style={{
          fill,
          stroke: '#ffffff',
          strokeWidth: 1,
          opacity: 0.9,
          cursor: 'pointer',
        }}
      />
      {showLabel && name ? (
        <text
          x={x + width / 2}
          y={y + height / 2 - (showWeight ? 6 : 0)}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#ffffff"
          fontSize={fontSize}
          fontWeight={600}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {name}
        </text>
      ) : null}
      {showWeight && value != null ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + fontSize * 0.75}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.85)"
          fontSize={Math.max(8, fontSize * 0.7)}
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {value}
        </text>
      ) : null}
    </g>
  )
}

function selectTreemapWords(words: WordCloudWord[]): TreemapDatum[] {
  if (words.length === 0) return []

  const sorted = [...words].sort((a, b) => b.weight - a.weight)
  const top = sorted.slice(0, TREEMAP_TOP_N)
  const maxWeight = Math.max(1, top[0]?.weight ?? 1)
  const minWeight = Math.max(1, maxWeight * MIN_WEIGHT_RATIO)

  return top
    .filter((w) => w.weight >= minWeight)
    .map((w) => ({
      name: w.text,
      value: Math.max(1, w.weight),
      fill: GROUP_COLORS[w.group] || GROUP_COLORS.general,
    }))
}

function TreemapEmpty({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-50 px-4 text-center text-[12px] text-slate-400">
      {children}
    </div>
  )
}

export function WordCloudTreemap({ words, loading, error, onWordClick }: WordCloudTreemapProps) {
  const data = useMemo(() => selectTreemapWords(words), [words])
  const containerRef = useRef<HTMLDivElement>(null)
  const {
    pan,
    scale,
    cursor,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    resetView,
    shouldSuppressClick,
  } = usePanZoom(containerRef, data)

  const handleClick = useCallback(
    (node: { name?: string | number }) => {
      if (shouldSuppressClick()) return
      if (node?.name && onWordClick) onWordClick(String(node.name))
    },
    [onWordClick, shouldSuppressClick],
  )

  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="shrink-0 border-b border-slate-200 bg-slate-50/80 px-3 py-1.5">
        <p className="text-[11px] font-medium text-slate-700">词云权重</p>
        <p className="text-[10px] text-slate-400">
          面积表示权重 · 拖拽平移 · 滚轮缩放 · 双击复位 · 点击搜索
        </p>
      </div>

      {loading ? (
        <TreemapEmpty>加载权重图…</TreemapEmpty>
      ) : error ? (
        <div className="flex h-full flex-1 items-center justify-center bg-slate-50 px-4 text-center text-[12px] text-red-500">
          {error}
        </div>
      ) : data.length === 0 ? (
        <TreemapEmpty>暂无词云权重数据</TreemapEmpty>
      ) : (
        <div
          ref={containerRef}
          className="relative min-h-0 flex-1 touch-none overflow-hidden bg-slate-50"
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
            className="h-full w-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              transformOrigin: '0 0',
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={data}
                dataKey="value"
                nameKey="name"
                type="flat"
                isAnimationActive={false}
                content={TreemapCell}
                onClick={handleClick}
              />
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}
