import type { GenerateChunkEvent } from '@shared/generation'

export type GenerationChunkListener = (
  sessionId: string,
  chunk: GenerateChunkEvent
) => void

let listener: GenerationChunkListener | null = null

export function setGenerationChunkListener(next: GenerationChunkListener | null): void {
  listener = next
}

export function publishGenerationChunk(sessionId: string, chunk: GenerateChunkEvent): void {
  listener?.(sessionId, chunk)
}
