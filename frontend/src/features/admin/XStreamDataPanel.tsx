import * as React from 'react'
import { Database, Loader2, RefreshCw, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast'
import { AuthRequiredError } from '@/osint/auth'
import {
  cancelXStreamInit,
  clearXStreamData,
  fetchXStreamInitStatus,
  startXStreamInit,
  type XStreamInitStatus,
} from '@/lib/adminApi'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

const STATUS_LABEL: Record<XStreamInitStatus['status'], string> = {
  idle: '空闲',
  running: '全量同步中',
  completed: '已完成',
  failed: '失败',
  cancelled: '已取消',
}

function formatTime(value?: string) {
  if (!value) return '—'
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? value : d.toLocaleString('zh-CN')
}

function handleAuthError(
  e: unknown,
  toast: (opts: { type: 'error'; title: string; description?: string }) => void,
  navigate: (path: string, opts?: { replace?: boolean; state?: unknown }) => void,
) {
  if (e instanceof AuthRequiredError) {
    toast({ type: 'error', title: e.message })
    navigate('/login', { replace: true, state: { from: '/admin?tab=data' } })
    return true
  }
  return false
}

export function XStreamDataPanel() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [status, setStatus] = React.useState<XStreamInitStatus | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [acting, setActing] = React.useState(false)

  const refreshStatus = React.useCallback(async () => {
    try {
      const next = await fetchXStreamInitStatus()
      setStatus(next)
    } catch (e) {
      if (handleAuthError(e, toast, navigate)) return
      toast({
        type: 'error',
        title: '加载状态失败',
        description: e instanceof Error ? e.message : undefined,
      })
    } finally {
      setLoading(false)
    }
  }, [toast])

  React.useEffect(() => {
    void refreshStatus()
  }, [refreshStatus])

  React.useEffect(() => {
    if (status?.status !== 'running') return
    const timer = window.setInterval(() => {
      void refreshStatus()
    }, 2000)
    return () => window.clearInterval(timer)
  }, [status?.status, refreshStatus])

  const handleClear = async () => {
    if (!window.confirm('确定清空本地情报缓存表？此操作不可恢复。')) return
    setActing(true)
    try {
      await clearXStreamData()
      await refreshStatus()
      toast({ type: 'success', title: '本地数据已清空' })
    } catch (e) {
      if (handleAuthError(e, toast, navigate)) return
      toast({
        type: 'error',
        title: '清空失败',
        description: e instanceof Error ? e.message : undefined,
      })
    } finally {
      setActing(false)
    }
  }

  const handleInit = async () => {
    if (
      !window.confirm(
        '将先清空本地缓存，再从远程全量拉取历史数据（每批 1000 条，间隔 5 秒）。\n\n过程可能持续较久，确定开始？',
      )
    ) {
      return
    }
    setActing(true)
    try {
      await startXStreamInit(true)
      await refreshStatus()
      toast({ type: 'success', title: '全量初始化已开始' })
    } catch (e) {
      if (handleAuthError(e, toast, navigate)) return
      toast({
        type: 'error',
        title: '启动失败',
        description: e instanceof Error ? e.message : undefined,
      })
    } finally {
      setActing(false)
    }
  }

  const handleCancel = async () => {
    setActing(true)
    try {
      await cancelXStreamInit()
      await refreshStatus()
      toast({ type: 'success', title: '已请求取消同步' })
    } catch (e) {
      if (handleAuthError(e, toast, navigate)) return
      toast({
        type: 'error',
        title: '取消失败',
        description: e instanceof Error ? e.message : undefined,
      })
    } finally {
      setActing(false)
    }
  }

  const running = status?.status === 'running'
  const progressPct =
    running && status
      ? Math.min(95, Math.max(8, status.batchesDone * 12))
      : status?.status === 'completed'
        ? 100
        : 0

  if (loading && !status) {
    return <div className="text-sm text-gray-500">加载中…</div>
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">情报数据同步</h1>
      <p className="text-sm text-gray-500 mb-6">
        从远程监测流全量回填本地数据库。Dashboard 与活动栏均读取本地缓存；首次部署或数据不完整时，请在此手动初始化。
      </p>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 space-y-5">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">本地条目数</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-white">
              {status?.itemCount?.toLocaleString() ?? '—'}
            </div>
          </div>
          <div>
            <div className="text-gray-500">同步状态</div>
            <div className="text-lg font-medium text-gray-900 dark:text-white">
              {status ? STATUS_LABEL[status.status] : '—'}
            </div>
          </div>
          <div>
            <div className="text-gray-500">已完成批次</div>
            <div className="font-medium text-gray-900 dark:text-white">{status?.batchesDone ?? 0}</div>
          </div>
          <div>
            <div className="text-gray-500">本轮已写入</div>
            <div className="font-medium text-gray-900 dark:text-white">
              {status?.totalStoredThisRun?.toLocaleString() ?? 0}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>同步进度</span>
            <span>
              {running
                ? `第 ${status?.batchesDone ?? 0} 批 · 最近写入 ${status?.lastBatchStored ?? 0} 条`
                : status?.status === 'completed'
                  ? '全量同步完成'
                  : '等待开始'}
            </span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                running ? 'bg-blue-500 animate-pulse' : 'bg-blue-600',
              )}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          {status?.error ? (
            <p className="text-xs text-red-600 dark:text-red-400">{status.error}</p>
          ) : null}
          <p className="text-xs text-gray-400">
            参数：每批 limit=1000，批次间隔 5 秒。开始时间 {formatTime(status?.startedAt)}，更新{' '}
            {formatTime(status?.updatedAt)}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => void handleInit()}
            disabled={acting || running}
            className="gap-2"
          >
            {running ? <Loader2 size={16} className="animate-spin" /> : <Database size={16} />}
            清空并全量初始化
          </Button>
          <Button
            variant="outline"
            onClick={() => void handleClear()}
            disabled={acting || running}
            className="gap-2"
          >
            <Trash2 size={16} />
            仅清空本地数据
          </Button>
          {running ? (
            <Button variant="outline" onClick={() => void handleCancel()} disabled={acting} className="gap-2">
              取消同步
            </Button>
          ) : null}
          <Button variant="ghost" onClick={() => void refreshStatus()} disabled={acting} className="gap-2">
            <RefreshCw size={16} />
            刷新状态
          </Button>
        </div>
      </div>
    </div>
  )
}
