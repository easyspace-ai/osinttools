import { useState } from 'react'
import { Loader2, RefreshCw, LayoutGrid, Globe2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GROUP_COLORS, GROUP_LABELS, WORD_CLOUD_GROUPS, type WordCloudWord } from '@/lib/dashboardApi'
import { WordCloudFlat } from './WordCloudFlat'
import { WordCloudGlobeView } from './WordCloudGlobe'

export type WordCloudStyle = 'flat' | 'globe'

interface WordCloudPanelProps {
  words: WordCloudWord[]
  loading: boolean
  error: string | null
  itemCount?: number
  onRefresh: () => void
  refreshing?: boolean
  onWordClick?: (word: string) => void
}

export function WordCloudPanel({
  words,
  loading,
  error,
  itemCount,
  onRefresh,
  refreshing,
  onWordClick,
}: WordCloudPanelProps) {
  const [style, setStyle] = useState<WordCloudStyle>('flat')

  return (
    <div className="relative flex h-full min-h-0 flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-slate-50/80 px-3 py-1.5">
        <div className="min-w-0">
          <p className="text-[11px] font-medium text-slate-700">词云</p>
          <p className="truncate text-[10px] text-slate-400">
            {itemCount != null ? `近24h · ${itemCount} 条` : '近24小时高频词'}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="flex rounded-md border border-slate-200 bg-white p-0.5 shadow-sm">
            <button
              type="button"
              title="平面词云"
              onClick={() => setStyle('flat')}
              className={cn(
                'flex h-6 items-center gap-1 rounded px-2 text-[10px] transition-colors',
                style === 'flat'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
              )}
            >
              <LayoutGrid className="h-3 w-3" />
              平面
            </button>
            <button
              type="button"
              title="球面词云"
              onClick={() => setStyle('globe')}
              className={cn(
                'flex h-6 items-center gap-1 rounded px-2 text-[10px] transition-colors',
                style === 'globe'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800',
              )}
            >
              <Globe2 className="h-3 w-3" />
              球体
            </button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRefresh}
            disabled={refreshing || loading}
            className="h-7 w-7 p-0 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
            title="刷新词云"
          >
            {refreshing || loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RefreshCw className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      </div>

      <div className="min-h-0 flex-1">
        {loading ? (
          <div className="flex h-full items-center justify-center bg-slate-50">
            <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
          </div>
        ) : error ? (
          <div className="flex h-full items-center justify-center bg-slate-50 px-4 text-center text-[12px] text-red-500">
            {error}
          </div>
        ) : words.length === 0 ? (
          <div className="flex h-full items-center justify-center bg-slate-50 text-[12px] text-slate-400">
            近 24 小时暂无足够文本生成词云
          </div>
        ) : style === 'flat' ? (
          <WordCloudFlat words={words} onWordClick={onWordClick} />
        ) : (
          <WordCloudGlobeView words={words} onWordClick={onWordClick} />
        )}
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white px-3 py-1.5">
        <div className="mb-1 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5">
          {WORD_CLOUD_GROUPS.map((group) => (
            <span key={group} className="inline-flex items-center gap-1 text-[9px] text-slate-500">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: GROUP_COLORS[group] }}
              />
              {GROUP_LABELS[group]}
            </span>
          ))}
        </div>
        <p className="text-center text-[10px] text-slate-400">
          {style === 'flat'
            ? '拖拽平移 · 滚轮缩放 · 双击复位 · 点击词条搜索'
            : '拖拽旋转 · 滚轮缩放 · 点击词条搜索'}
        </p>
      </div>
    </div>
  )
}
