import * as React from 'react'
import { Loader2, Plus, Trash2, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import {
  fetchWordCloudStopwords,
  saveWordCloudStopwords,
  type WordCloudStopwords,
} from '@/lib/adminApi'

function normalizeWords(raw: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const item of raw) {
    const w = item.trim()
    if (!w) continue
    const key = w.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(w)
  }
  return out.sort((a, b) => a.localeCompare(b, 'zh-CN'))
}

export function WordCloudStopwordsPanel() {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(true)
  const [saving, setSaving] = React.useState(false)
  const [version, setVersion] = React.useState(1)
  const [words, setWords] = React.useState<string[]>([])
  const [draft, setDraft] = React.useState('')
  const [bulkText, setBulkText] = React.useState('')
  const [dirty, setDirty] = React.useState(false)

  const applyPayload = React.useCallback((data: WordCloudStopwords) => {
    setVersion(data.version ?? 1)
    setWords(normalizeWords(data.words ?? []))
    setDirty(false)
  }, [])

  React.useEffect(() => {
    void (async () => {
      try {
        const data = await fetchWordCloudStopwords()
        applyPayload(data)
      } catch (e) {
        toast({
          type: 'error',
          title: '加载停用词失败',
          description: e instanceof Error ? e.message : undefined,
        })
      } finally {
        setLoading(false)
      }
    })()
  }, [applyPayload, toast])

  const addWord = () => {
    const next = draft.trim()
    if (!next) return
    setWords((prev) => normalizeWords([...prev, next]))
    setDraft('')
    setDirty(true)
  }

  const removeWord = (word: string) => {
    setWords((prev) => prev.filter((w) => w !== word))
    setDirty(true)
  }

  const applyBulk = () => {
    const parts = bulkText
      .split(/[\n,，;；\s]+/)
      .map((s) => s.trim())
      .filter(Boolean)
    if (parts.length === 0) return
    setWords((prev) => normalizeWords([...prev, ...parts]))
    setBulkText('')
    setDirty(true)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const data = await saveWordCloudStopwords({
        version,
        words: normalizeWords(words),
      })
      applyPayload(data)
      toast({
        type: 'success',
        title: '停用词已保存',
        description: '下次刷新词云后生效',
      })
    } catch (e) {
      toast({
        type: 'error',
        title: '保存失败',
        description: e instanceof Error ? e.message : undefined,
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Loader2 className="h-4 w-4 animate-spin" />
        加载中…
      </div>
    )
  }

  return (
    <div className="max-w-3xl">
      <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">词云过滤</h1>
      <p className="mb-6 text-sm text-gray-500">
        管理词云停用词（虚词、噪声域名等）。保存后提示下次刷新词云生效。当前共 {words.length} 个词，
        version {version}。
      </p>

      <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex flex-wrap items-end gap-2">
          <label className="min-w-[200px] flex-1">
            <span className="mb-1 block text-xs text-gray-500">添加停用词</span>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addWord()
                }
              }}
              placeholder="例如 of / 的 / https"
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"
            />
          </label>
          <Button type="button" variant="outline" onClick={addWord} className="gap-1">
            <Plus className="h-4 w-4" />
            添加
          </Button>
        </div>

        <div>
          <span className="mb-1 block text-xs text-gray-500">批量粘贴（逗号 / 换行 / 空格分隔）</span>
          <textarea
            value={bulkText}
            onChange={(e) => setBulkText(e.target.value)}
            rows={3}
            placeholder={'of\nto\non\nin\nis'}
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 font-mono text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900"
          />
          <Button type="button" variant="outline" size="sm" onClick={applyBulk} className="mt-2 gap-1">
            <Upload className="h-3.5 w-3.5" />
            合并到列表
          </Button>
        </div>

        <div className="max-h-[420px] overflow-auto rounded-lg border border-gray-100 dark:border-gray-800">
          {words.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-gray-400">暂无停用词</div>
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-gray-800">
              {words.map((word) => (
                <li key={word} className="flex items-center justify-between gap-3 px-3 py-2 text-sm">
                  <span className="font-mono text-gray-900 dark:text-gray-100">{word}</span>
                  <button
                    type="button"
                    onClick={() => removeWord(word)}
                    className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                    title="删除"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => void handleSave()} disabled={saving || !dirty}>
            {saving ? '保存中…' : '保存'}
          </Button>
          {dirty ? (
            <span className="text-xs text-amber-600 dark:text-amber-400">有未保存更改</span>
          ) : (
            <span className="text-xs text-gray-400">已与服务器同步</span>
          )}
        </div>
      </div>
    </div>
  )
}
