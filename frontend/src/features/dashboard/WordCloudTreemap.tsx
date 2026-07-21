import { useMemo } from 'react'
import { ResponsiveContainer, Treemap, type TreemapNode } from 'recharts'
import { GROUP_COLORS, type WordCloudWord } from '@/lib/dashboardApi'

/** Prefer fewer readable tiles over many empty boxes. */
const TREEMAP_TOP_N = 36
/** Drop long-tail words below this fraction of the heaviest word. */
const MIN_WEIGHT_RATIO = 0.025
/** Skip leafs too small for a readable label (avoids empty colored rects). */
const MIN_LABEL_W = 32
const MIN_LABEL_H = 20
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

  const pad = 2
  const innerW = Math.max(0, width - pad * 2)
  const innerH = Math.max(0, height - pad * 2)

  // Tiny tiles: skip entirely — empty colored boxes add noise without value.
  if (innerW < MIN_LABEL_W || innerH < MIN_LABEL_H) return null

  const showWeight = innerW >= MIN_WEIGHT_W && innerH >= MIN_WEIGHT_H
  const fontSize = Math.max(
    10,
    Math.min(18, Math.min(innerW / Math.max(1, (name?.length ?? 1) * 0.62), innerH * 0.45)),
  )

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill,
          stroke: '#0b0e14',
          strokeWidth: 1.5,
          opacity: 0.92,
          cursor: 'pointer',
        }}
      />
      {name ? (
        <text
          x={x + width / 2}
          y={y + height / 2 - (showWeight ? 6 : 0)}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#f8fafc"
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
          fill="rgba(248,250,252,0.7)"
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

export function WordCloudTreemap({ words, loading, error, onWordClick }: WordCloudTreemapProps) {
  const data = useMemo(() => selectTreemapWords(words), [words])

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0b0e14] text-[12px] text-slate-500">
        加载权重图…
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0b0e14] px-4 text-center text-[12px] text-red-400">
        {error}
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0b0e14] text-[12px] text-slate-500">
        暂无词云权重数据
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0b0e14]">
      <div className="shrink-0 border-b border-slate-800 px-3 py-1.5">
        <p className="text-[11px] font-medium text-slate-300">词云权重</p>
        <p className="text-[10px] text-slate-600">面积表示权重 · 点击词条搜索</p>
      </div>
      <div className="min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="value"
            nameKey="name"
            type="flat"
            isAnimationActive={false}
            content={TreemapCell}
            onClick={(node) => {
              if (node?.name && onWordClick) onWordClick(String(node.name))
            }}
          />
        </ResponsiveContainer>
      </div>
    </div>
  )
}
