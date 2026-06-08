import { authFetchInit } from '@/osint/auth'

export interface ReflowMarkdownRequest {
  markdown: string
}

export interface ReflowMarkdownResponse {
  markdown: string
}

/**
 * Call backend AI to restructure markdown for better export quality.
 * The AI reorganizes headings, paragraphs, and lists without changing any factual content.
 */
export async function reflowMarkdown(markdown: string): Promise<string> {
  const res = await fetch('/api/export/reflow-markdown', authFetchInit({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ markdown } satisfies ReflowMarkdownRequest),
  }))

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || err.message || `Reflow failed: ${res.status}`)
  }

  const data: ReflowMarkdownResponse = await res.json()
  return data.markdown
}
