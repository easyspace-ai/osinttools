import { LEGACY_STORAGE_KEYS, OSINT_AUTH_STORAGE_KEY } from './constants'
import { readRawPersisted, removeRawPersisted, writeRawPersisted } from './storage'

function clearLegacyKeys(): void {
  try {
    localStorage.removeItem(LEGACY_STORAGE_KEYS.gushengToken)
    localStorage.removeItem(LEGACY_STORAGE_KEYS.youmindAuth)
    sessionStorage.removeItem(LEGACY_STORAGE_KEYS.youmindAuth)
  } catch {
    /* ignore */
  }
}

function stripLegacyTokenField(storage: Storage): void {
  const raw = readRawPersisted(storage)
  if (!raw) return
  try {
    const parsed = JSON.parse(raw) as {
      state?: { token?: string | null; user?: unknown }
      version?: number
    }
    if (!('token' in (parsed.state ?? {}))) return
    const next = {
      ...parsed,
      state: {
        ...parsed.state,
        token: undefined,
      },
    }
    writeRawPersisted(storage, JSON.stringify(next))
  } catch {
    removeRawPersisted()
  }
}

/**
 * Remove legacy JWT copies from localStorage — HttpOnly cookie is the sole session credential.
 */
export function migrateLegacyAuthStorage(): void {
  clearLegacyKeys()
  stripLegacyTokenField(localStorage)
  stripLegacyTokenField(sessionStorage)
}
