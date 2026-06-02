import { getOsintAccessToken } from '@/osint/auth'
import type {
  GenerateChunkEvent,
  OhMyPptSessionDetail,
  OhMyPptSessionSummary,
  OhMyPptStyle,
} from './ohmypptTypes'

const API_BASE = '/api/studio/ohmyppt'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getOsintAccessToken()
  const headers = new Headers(init?.headers)
  if (token) headers.set('Authorization', `Bearer ${token}`)
  if (init?.body && !(init.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || err.error || res.statusText || 'Request failed')
  }
  return res.json() as Promise<T>
}

function parseSSEBlock(block: string): GenerateChunkEvent | null {
  const lines = block.split('\n')
  let eventType = ''
  let dataLine = ''
  for (const line of lines) {
    if (line.startsWith('event:')) eventType = line.slice(6).trim()
    if (line.startsWith('data:')) dataLine = line.slice(5).trim()
  }
  if (!dataLine || dataLine === '[DONE]') return null
  try {
    const parsed = JSON.parse(dataLine) as GenerateChunkEvent
    if (parsed.type) return parsed
    if (eventType) return { type: eventType, payload: parsed } as GenerateChunkEvent
  } catch {
    return null
  }
  return null
}

async function streamGenerateSSE(
  sessionId: string,
  body: Record<string, unknown>,
  onChunk: (ev: GenerateChunkEvent) => void,
): Promise<void> {
  const token = getOsintAccessToken()
  const headers = new Headers({ 'Content-Type': 'application/json', Accept: 'text/event-stream' })
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const res = await fetch(`${API_BASE}/sessions/${sessionId}/generate`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  if (!res.ok || !res.body) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || 'Generation failed')
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buf = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += decoder.decode(value, { stream: true })
    const parts = buf.split('\n\n')
    buf = parts.pop() || ''
    for (const part of parts) {
      const ev = parseSSEBlock(part.trim())
      if (ev) onChunk(ev)
    }
  }
}

export const ohmypptApi = {
  listStyles: () => request<{ styles: OhMyPptStyle[] }>('/styles').then((r) => r.styles),

  listSessions: () =>
    request<{ sessions: OhMyPptSessionSummary[] }>('/sessions').then((r) => r.sessions),

  createSession: (body: {
    topic: string
    style_id?: string
    page_count?: number
    locale?: 'zh' | 'en'
    user_message?: string
  }) =>
    request<{ session: OhMyPptSessionSummary }>('/sessions', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  getSession: (id: string) => request<OhMyPptSessionDetail>(`/sessions/${id}`),

  updateSessionTitle: (sessionId: string, title: string) =>
    request<{ ok: boolean; title: string }>(`/sessions/${sessionId}`, {
      method: 'PATCH',
      body: JSON.stringify({ title }),
    }),

  deleteSession: (sessionId: string) =>
    request<{ ok: boolean }>(`/sessions/${sessionId}`, { method: 'DELETE' }),

  streamGenerate: (
    sessionId: string,
    onChunk: (ev: GenerateChunkEvent) => void,
    opts?: { user_message?: string },
  ) => streamGenerateSSE(sessionId, opts ?? {}, onChunk),

  getPageHtml: async (sessionId: string, pageId: string): Promise<string> => {
    const token = getOsintAccessToken()
    const headers = new Headers()
    if (token) headers.set('Authorization', `Bearer ${token}`)
    const res = await fetch(`${API_BASE}/sessions/${sessionId}/pages/${pageId}`, { headers })
    if (!res.ok) throw new Error('Page not found')
    return res.text()
  },

  exportZip: async (sessionId: string, filename = 'deck.zip') => {
    const token = getOsintAccessToken()
    const headers = new Headers({ 'Content-Type': 'application/json' })
    if (token) headers.set('Authorization', `Bearer ${token}`)
    const res = await fetch(`${API_BASE}/sessions/${sessionId}/export`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ format: 'zip' }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(
        (err as { detail?: string; error?: string }).detail ||
          (err as { detail?: string; error?: string }).error ||
          'Export failed',
      )
    }
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  },

  exportPptx: async (
    sessionId: string,
    filename = 'deck.pptx',
    opts?: { image_only?: boolean; embed_fonts?: 'auto' | 'always' | 'never' },
  ) => {
    const blob = await ohmypptApi.fetchPptxBlob(sessionId, opts)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  },

  fetchPptxBlob: async (
    sessionId: string,
    opts?: { image_only?: boolean; embed_fonts?: 'auto' | 'always' | 'never' },
  ): Promise<Blob> => {
    const token = getOsintAccessToken()
    const headers = new Headers({ 'Content-Type': 'application/json' })
    if (token) headers.set('Authorization', `Bearer ${token}`)
    const res = await fetch(`${API_BASE}/sessions/${sessionId}/export`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        format: 'pptx',
        image_only: opts?.image_only ?? false,
        embed_fonts: opts?.embed_fonts,
      }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.detail || err.error || 'Export failed')
    }
    return res.blob()
  },
}
