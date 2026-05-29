import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  classifyAuthFailure,
  getMe,
  loginRequest,
  logoutRequest,
  registerRequest,
  syncAuthCookie,
} from './client'
import { OSINT_AUTH_STORAGE_KEY } from './constants'
import { migrateLegacyAuthStorage } from './migrate'
import { createRememberAwareStorage } from './storage'
import { isTokenExpired } from './token'
import type { AuthFailureReason, CurrentUser } from './types'

export interface OsintAuthStore {
  token: string | null
  user: CurrentUser | null
  rememberMe: boolean
  ready: boolean
  lastFailure: AuthFailureReason | null

  setToken: (token: string | null) => void
  setUser: (user: CurrentUser | null) => void
  setRememberMe: (rememberMe: boolean) => void

  hydrate: () => Promise<void>
  login: (loginId: string, password: string, rememberMe?: boolean) => Promise<void>
  register: (username: string, contact: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshMe: () => Promise<void>
  clearSession: (reason?: AuthFailureReason | null) => void
}

async function establishSession(
  token: string,
  rememberMe: boolean,
  set: (partial: Partial<OsintAuthStore>) => void,
): Promise<CurrentUser> {
  set({ token, rememberMe, lastFailure: null })
  await syncAuthCookie(token)
  const me = await getMe(token)
  set({ user: me })
  return me
}

export const useOsintAuthStore = create<OsintAuthStore>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      rememberMe: true,
      ready: false,
      lastFailure: null,

      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      setRememberMe: (rememberMe) => set({ rememberMe }),

      clearSession: (reason = null) => {
        set({ token: null, user: null, lastFailure: reason })
      },

      hydrate: async () => {
        migrateLegacyAuthStorage()
        const { token, rememberMe } = get()
        if (!token) {
          set({ ready: true, user: null })
          return
        }
        if (isTokenExpired(token)) {
          set({ token: null, user: null, ready: true, lastFailure: 'expired' })
          return
        }
        try {
          await syncAuthCookie(token)
          const me = await getMe(token)
          set({ user: me, ready: true, lastFailure: null })
        } catch (err) {
          const kind = classifyAuthFailure(err)
          if (kind === 'network') {
            set({ ready: true, lastFailure: 'network' })
            return
          }
          set({ token: null, user: null, ready: true, lastFailure: kind })
        }
      },

      login: async (loginId, password, rememberMe = true) => {
        const r = await loginRequest(loginId, password, rememberMe)
        await establishSession(r.access_token, rememberMe, set)
        set({ ready: true })
      },

      register: async (username, contact, password) => {
        await registerRequest(username, contact, password)
        const rememberMe = get().rememberMe
        const r = await loginRequest(username, password, rememberMe)
        await establishSession(r.access_token, rememberMe, set)
        set({ ready: true })
      },

      logout: async () => {
        await logoutRequest()
        set({ token: null, user: null, lastFailure: null })
      },

      refreshMe: async () => {
        const { token } = get()
        if (!token) {
          set({ user: null })
          return
        }
        try {
          const me = await getMe(token)
          set({ user: me, lastFailure: null })
        } catch (err) {
          const kind = classifyAuthFailure(err)
          if (kind === 'network') {
            set({ lastFailure: 'network' })
            return
          }
          set({ token: null, user: null, lastFailure: kind })
        }
      },
    }),
    {
      name: OSINT_AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => createRememberAwareStorage()),
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        rememberMe: state.rememberMe,
      }),
      onRehydrateStorage: () => (state) => {
        void state?.hydrate()
      },
    },
  ),
)

/** Non-hook accessor for API layers & WebSocket. */
export function getOsintAccessToken(): string | null {
  return useOsintAuthStore.getState().token
}

export function getOsintAuthHeaders(): HeadersInit {
  const token = getOsintAccessToken()
  const headers: Record<string, string> = {}
  if (token) headers.Authorization = `Bearer ${token}`
  return headers
}

export async function fetchCurrentUser(): Promise<CurrentUser> {
  const token = getOsintAccessToken()
  if (!token) {
    const err = new Error('auth me failed: 401') as Error & { status?: number }
    err.status = 401
    throw err
  }
  return getMe(token)
}
