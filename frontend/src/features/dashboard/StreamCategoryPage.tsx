import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronDown, Loader2, Search, X } from 'lucide-react'
import {
  backfillDashboardItems,
  fetchDashboardItems,
  fetchStreamGroups,
  fetchWordCloud,
  searchDashboardItems,
  type DashboardItem,
  type WordCloudWord,
} from '@/lib/dashboardApi'
import { StreamCategoryList } from './StreamCategoryList'
import { WordCloudPanel } from './WordCloudPanel'
import { WordCloudTreemap } from './WordCloudTreemap'

const BATCH_LIMIT = 50
const WORDCLOUD_REFRESH_MS = 30 * 60 * 1000

function decodeRouteParam(value: string): string {
  let current = value
  for (let i = 0; i < 2; i++) {
    try {
      const decoded = decodeURIComponent(current.replace(/\+/g, ' '))
      if (decoded === current) break
      current = decoded
    } catch {
      break
    }
  }
  return current
}

export function StreamCategoryPage() {
  const params = useParams<{ type: string }>()
  const navigate = useNavigate()
  const type = params.type ? decodeRouteParam(params.type) : ''

  const [items, setItems] = useState<DashboardItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const [upstreamHasMore, setUpstreamHasMore] = useState(true)
  const offsetRef = useRef(0)
  const itemsRef = useRef(items)
  itemsRef.current = items

  const [streamTypes, setStreamTypes] = useState<string[]>([])
  const [streamTypesLoading, setStreamTypesLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const [searchResults, setSearchResults] = useState<DashboardItem[]>([])
  const [searchTotal, setSearchTotal] = useState(0)
  const [searchLoading, setSearchLoading] = useState(false)

  const [words, setWords] = useState<WordCloudWord[]>([])
  const [wordItemCount, setWordItemCount] = useState<number | undefined>()
  const [wordLoading, setWordLoading] = useState(true)
  const [wordRefreshing, setWordRefreshing] = useState(false)
  const [wordError, setWordError] = useState<string | null>(null)

  const mergeItems = (existing: DashboardItem[], incoming: DashboardItem[]) => {
    if (incoming.length === 0) return existing
    const seen = new Set(existing.map((i) => i.id))
    const merged = [...existing]
    for (const item of incoming) {
      if (!seen.has(item.id)) {
        seen.add(item.id)
        merged.push(item)
      }
    }
    return merged
  }

  const loadItems = useCallback(
    async (append = false) => {
      if (!type) return
      if (append) setLoadingMore(true)
      else {
        setLoading(true)
        offsetRef.current = 0
      }
      const offset = append ? offsetRef.current : 0
      try {
        const resp = await fetchDashboardItems(type, offset, BATCH_LIMIT)
        setItems((prev) => (append ? mergeItems(prev, resp.items) : resp.items))
        setTotalCount(resp.totalCount)
        setHasMore(resp.hasMore)
        offsetRef.current = offset + resp.items.length
      } catch (e) {
        console.error(`Failed to load stream category ${type}:`, e)
      } finally {
        setLoading(false)
        setLoadingMore(false)
      }
    },
    [type],
  )

  const handleBackfill = useCallback(async () => {
    if (!type) return
    setLoadingMore(true)
    try {
      const current = itemsRef.current
      const beforeId = current.length > 0 ? Math.min(...current.map((i) => i.id)) : undefined
      const backfill = await backfillDashboardItems(type, beforeId, BATCH_LIMIT)
      setUpstreamHasMore(backfill.upstreamHasMore)
      setTotalCount(backfill.totalCount)

      const offset = offsetRef.current
      const resp = await fetchDashboardItems(type, offset, BATCH_LIMIT)
      setItems((prev) => mergeItems(prev, resp.items))
      setHasMore(resp.hasMore)
      offsetRef.current = offset + resp.items.length
    } catch (e) {
      console.error(`Failed to backfill ${type}:`, e)
    } finally {
      setLoadingMore(false)
    }
  }, [type])

  const loadWordCloud = useCallback(
    async (silent = false) => {
      if (!type) return
      if (!silent) setWordLoading(true)
      else setWordRefreshing(true)
      setWordError(null)
      try {
        const data = await fetchWordCloud(silent, type)
        setWords(data.words ?? [])
        setWordItemCount(data.itemCount)
      } catch (e) {
        setWordError(e instanceof Error ? e.message : '加载词云失败')
      } finally {
        setWordLoading(false)
        setWordRefreshing(false)
      }
    },
    [type],
  )

  useEffect(() => {
    void loadItems()
  }, [loadItems])

  useEffect(() => {
    void loadWordCloud()
    const t = window.setInterval(() => void loadWordCloud(true), WORDCLOUD_REFRESH_MS)
    return () => window.clearInterval(t)
  }, [loadWordCloud])

  const runSearch = useCallback(
    async (q: string) => {
      if (!type) return
      if (!q.trim()) {
        setSearchActive(false)
        setSearchResults([])
        setSearchQuery('')
        return
      }
      setSearchLoading(true)
      setSearchActive(true)
      setSearchQuery(q.trim())
      try {
        const resp = await searchDashboardItems(q.trim(), type, 0, 200)
        setSearchResults(resp.items)
        setSearchTotal(resp.totalCount)
      } catch (e) {
        console.error('Category search failed:', e)
      } finally {
        setSearchLoading(false)
      }
    },
    [type],
  )

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setSearchActive(false)
    setSearchResults([])
    setSearchTotal(0)
    setSearchLoading(false)
  }, [])

  useEffect(() => {
    let cancelled = false
    setStreamTypesLoading(true)
    void fetchStreamGroups()
      .then((groups) => {
        if (cancelled) return
        const types = groups.map((g) => g.type).filter(Boolean)
        setStreamTypes(types)
      })
      .catch((e) => {
        console.error('Failed to load stream groups:', e)
        if (!cancelled) setStreamTypes([])
      })
      .finally(() => {
        if (!cancelled) setStreamTypesLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Category switch: clear search so the new category loads clean
  useEffect(() => {
    clearSearch()
  }, [type, clearSearch])

  const handleCategoryChange = useCallback(
    (nextType: string) => {
      if (!nextType || nextType === type) return
      clearSearch()
      navigate(`/dashboard/stream/${encodeURIComponent(nextType)}`)
    },
    [type, clearSearch, navigate],
  )

  const handleWordClick = useCallback(
    (word: string) => {
      void runSearch(word)
    },
    [runSearch],
  )

  // Ensure current type appears in the select even if groups API is slow/empty
  const categoryOptions =
    type && !streamTypes.includes(type) ? [type, ...streamTypes] : streamTypes

  if (!type) {
    return (
      <div className="flex h-full items-center justify-center text-[13px] text-slate-500">
        无效的分类
      </div>
    )
  }

  const displayItems = searchActive ? searchResults : items
  const displayTotal = searchActive ? searchTotal : totalCount

  return (
    <div className="flex h-full min-h-0 flex-col bg-white dark:bg-slate-950">
      <div className="flex shrink-0 items-center gap-3 border-b border-slate-200 px-4 py-2.5 dark:border-slate-800">
        <Link
          to="/dashboard"
          className="inline-flex h-7 items-center gap-1 rounded-md px-2 text-[12px] text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          返回总览
        </Link>
        <div className="min-w-0 flex-1">
          <div className="relative inline-flex max-w-full min-w-[8rem]">
            <select
              aria-label="切换信息流分类"
              value={type}
              disabled={streamTypesLoading && categoryOptions.length === 0}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="max-w-full cursor-pointer appearance-none truncate rounded-md border border-transparent bg-transparent py-0.5 pl-1.5 pr-6 text-[14px] font-semibold text-slate-900 outline-none hover:border-slate-200 hover:bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-wait disabled:opacity-70 dark:text-slate-50 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:focus:border-blue-500"
            >
              {categoryOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          </div>
          <p className="text-[11px] text-slate-400">
            {searchActive
              ? searchLoading
                ? '搜索中…'
                : `匹配 ${displayTotal} 条`
              : `${totalCount} 条数据`}
          </p>
        </div>
        <div className="relative w-56 shrink-0">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              if (!e.target.value.trim()) clearSearch()
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') void runSearch(searchQuery)
            }}
            placeholder="本分类搜索…"
            className="w-full rounded-md border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-8 text-[12px] text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 divide-x divide-slate-200 dark:divide-slate-800">
        <div className="flex min-w-0 flex-[55] flex-col">
          {searchActive && (
            <div className="shrink-0 border-b border-amber-200/80 bg-amber-50 px-4 py-1.5 text-[10px] text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200">
              {searchLoading ? (
                <span className="inline-flex items-center gap-1.5">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  正在搜索「{searchQuery}」…
                </span>
              ) : (
                <span>
                  已按「{searchQuery}」过滤本分类，共 {searchTotal} 条
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="ml-2 text-amber-700 underline dark:text-amber-300"
                  >
                    清除
                  </button>
                </span>
              )}
            </div>
          )}
          <StreamCategoryList
            items={displayItems}
            loading={searchActive ? searchLoading : loading}
            loadingMore={searchActive ? false : loadingMore}
            localHasMore={searchActive ? false : hasMore}
            showBackfillButton={!searchActive && !hasMore && upstreamHasMore}
            onLoadMore={() => {
              if (!hasMore || searchActive) return
              void loadItems(true)
            }}
            onBackfill={() => void handleBackfill()}
            highlightKeyword={searchActive ? searchQuery : undefined}
            emptyText={searchActive ? '本分类无匹配结果' : '暂无数据'}
          />
        </div>
        <div className="flex min-h-0 min-w-0 flex-[45] flex-col bg-slate-50/60">
          <div className="min-h-0 flex-[55] border-b border-slate-200 dark:border-slate-800">
            <WordCloudPanel
              words={words}
              loading={wordLoading}
              error={wordError}
              itemCount={wordItemCount}
              onRefresh={() => void loadWordCloud(true)}
              refreshing={wordRefreshing}
              onWordClick={handleWordClick}
            />
          </div>
          <div className="min-h-0 flex-[45]">
            <WordCloudTreemap
              words={words}
              loading={wordLoading}
              error={wordError}
              onWordClick={handleWordClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
