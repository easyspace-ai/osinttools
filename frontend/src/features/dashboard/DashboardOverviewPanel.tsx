import { useCallback, useEffect, useState } from 'react'
import { fetchWordCloud, type WordCloudWord } from '@/lib/dashboardApi'
import { WordCloudPanel } from './WordCloudPanel'
import { WordCloudTreemap } from './WordCloudTreemap'

const WORDCLOUD_REFRESH_MS = 30 * 60 * 1000

interface DashboardOverviewPanelProps {
  /** @deprecated Artifacts panel removed; kept for call-site compatibility */
  artifactRefreshKey?: number
  /** Search keyword passed from left panel search */
  searchKeyword?: string
}

export function DashboardOverviewPanel({ artifactRefreshKey: _artifactRefreshKey = 0 }: DashboardOverviewPanelProps) {
  const [words, setWords] = useState<WordCloudWord[]>([])
  const [wordItemCount, setWordItemCount] = useState<number | undefined>()
  const [wordLoading, setWordLoading] = useState(true)
  const [wordRefreshing, setWordRefreshing] = useState(false)
  const [wordError, setWordError] = useState<string | null>(null)

  const loadWordCloud = useCallback(async (silent = false) => {
    if (!silent) setWordLoading(true)
    else setWordRefreshing(true)
    setWordError(null)
    try {
      const data = await fetchWordCloud(silent)
      setWords(data.words ?? [])
      setWordItemCount(data.itemCount)
    } catch (e) {
      setWordError(e instanceof Error ? e.message : '加载词云失败')
    } finally {
      setWordLoading(false)
      setWordRefreshing(false)
    }
  }, [])

  useEffect(() => {
    void loadWordCloud()
    const t = window.setInterval(() => void loadWordCloud(true), WORDCLOUD_REFRESH_MS)
    return () => window.clearInterval(t)
  }, [loadWordCloud])

  const handleWordClick = useCallback((word: string) => {
    window.dispatchEvent(new CustomEvent('dashboard:wordcloud-click', { detail: word }))
  }, [])

  return (
    <div className="flex h-full min-h-0 flex-col divide-y divide-slate-200 dark:divide-slate-800">
      <div className="min-h-0 flex-[55]">
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
  )
}
