import { OSINT_AUTH_STORAGE_KEY } from './constants'
import type { PersistedAuthSlice } from './types'

export type WebStorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

export function readRawPersisted(storage: WebStorageLike, key = OSINT_AUTH_STORAGE_KEY): string | null {
  try {
    return storage.getItem(key)
  } catch {
    return null
  }
}

export function writeRawPersisted(storage: WebStorageLike, value: string, key = OSINT_AUTH_STORAGE_KEY): void {
  try {
    storage.setItem(key, value)
  } catch {
    /* ignore quota / private mode */
  }
}

export function removeRawPersisted(key = OSINT_AUTH_STORAGE_KEY): void {
  try {
    localStorage.removeItem(key)
    sessionStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

export function pickPersistStorage(rememberMe: boolean): WebStorageLike {
  return rememberMe ? localStorage : sessionStorage
}

/** Zustand persist adapter: routes to localStorage or sessionStorage based on rememberMe. */
export function createRememberAwareStorage() {
  return {
    getItem: (name: string): string | null => {
      return readRawPersisted(localStorage, name) ?? readRawPersisted(sessionStorage, name)
    },
    setItem: (name: string, value: string): void => {
      let rememberMe = true
      try {
        const parsed = JSON.parse(value) as { state?: Partial<PersistedAuthSlice> }
        rememberMe = parsed?.state?.rememberMe !== false
      } catch {
        rememberMe = true
      }
      const target = pickPersistStorage(rememberMe)
      const other = rememberMe ? sessionStorage : localStorage
      other.removeItem(name)
      writeRawPersisted(target, value, name)
    },
    removeItem: (name: string): void => {
      try {
        localStorage.removeItem(name)
        sessionStorage.removeItem(name)
      } catch {
        /* ignore */
      }
    },
  }
}

export function readPersistedSlice(): PersistedAuthSlice | null {
  const raw =
    readRawPersisted(localStorage) ??
    readRawPersisted(sessionStorage)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as { state?: Partial<PersistedAuthSlice> }
    const state = parsed?.state
    if (!state?.token) return null
    return {
      token: state.token ?? null,
      user: state.user ?? null,
      rememberMe: state.rememberMe !== false,
    }
  } catch {
    return null
  }
}
