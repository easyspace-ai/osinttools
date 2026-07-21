import { useEffect, useRef, type ReactNode } from 'react'
import { ExternalLink, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { DashboardItem } from '@/lib/dashboardApi'
import { cn } from '@/lib/utils'

function formatDateShort(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dateStr
  }
}

export type StreamCategoryListProps = {
  items: DashboardItem[]
  loading: boolean
  loadingMore: boolean
  localHasMore: boolean
  showBackfillButton: boolean
  onLoadMore: () => void
  onBackfill: () => void
  onItemClick?: (item: DashboardItem) => void
  selectedItemId?: number | null
  highlightKeyword?: string
  emptyText?: string
}

function highlightKeyword(text: string, keyword: string) {
  const q = keyword.trim()
  if (!q) return text
  const lower = text.toLowerCase()
  const ql = q.toLowerCase()
  const parts: ReactNode[] = []
  let start = 0
  let pos = lower.indexOf(ql, start)
  let key = 0
  while (pos !== -1) {
    if (pos > start) parts.push(text.slice(start, pos))
    parts.push(
      <mark
        key={key++}
        className="rounded bg-amber-200/80 px-0.5 text-slate-900 dark:bg-amber-500/40 dark:text-slate-100"
      >
        {text.slice(pos, pos + q.length)}
      </mark>,
    )
    start = pos + q.length
    pos = lower.indexOf(ql, start)
  }
  if (start < text.length) parts.push(text.slice(start))
  return parts.length > 0 ? parts : text
}

export function StreamCategoryList({
  items,
  loading,
  loadingMore,
  localHasMore,
  showBackfillButton,
  onLoadMore,
  onBackfill,
  onItemClick,
  selectedItemId,
  highlightKeyword: highlight,
  emptyText = '暂无数据',
}: StreamCategoryListProps) {
  const scrollRootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = scrollRootRef.current
    if (!root) return
    const viewport = root.querySelector('[data-slot="scroll-area-viewport"]') as HTMLDivElement | null
    if (!viewport) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewport
      const threshold = 120
      if (
        scrollHeight - scrollTop - clientHeight < threshold &&
        localHasMore &&
        !loadingMore &&
        !loading
      ) {
        onLoadMore()
      }
    }

    viewport.addEventListener('scroll', handleScroll)
    return () => viewport.removeEventListener('scroll', handleScroll)
  }, [localHasMore, loadingMore, loading, onLoadMore])

  return (
    <div ref={scrollRootRef} className="min-h-0 flex-1">
      <ScrollArea className="h-full">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
          </div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-[13px] text-slate-500">{emptyText}</div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {items.map((item) => {
              const isSelected = selectedItemId === item.id
              const isClickable = !!onItemClick
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onItemClick?.(item)}
                  disabled={!isClickable}
                  className={cn(
                    'w-full px-5 py-4 text-left transition-colors',
                    isClickable && 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900',
                    isSelected &&
                      'bg-blue-50 ring-1 ring-inset ring-blue-200 dark:bg-blue-950/40 dark:ring-blue-800',
                    !isClickable && 'cursor-default',
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-medium text-slate-900 dark:text-slate-200">
                      {item.userName}
                    </span>
                    <span className="shrink-0 text-[11px] text-slate-400">
                      {formatDateShort(item.pubDate)}
                    </span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap break-words text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {highlight ? highlightKeyword(item.content, highlight) : item.content}
                  </p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {item.type}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-0.5 text-[11px] text-blue-500 hover:text-blue-600 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        源文
                      </a>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}
        {loadingMore && (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
          </div>
        )}
        {showBackfillButton && !loading && !loadingMore && (
          <div className="px-5 py-4 text-center">
            <Button variant="outline" size="sm" onClick={onBackfill} className="text-[12px]">
              加载更多
            </Button>
            <p className="mt-1.5 text-[10px] text-slate-400">
              本地数据已读完，点击从监测流拉取更早历史
            </p>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
