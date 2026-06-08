import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  AuthRequiredError,
  classifyAuthFailure,
  getMe,
  isAuthHttpError,
  loginRequest,
  invalidateServerSession,
  logoutRequest,
  registerRequest,
} from './client'
import { OSINT_AUTH_STORAGE_KEY } from './constants'
import { migrateLegacyAuthStorage } from './migrate'
import { createRememberAwareStorage } from './storage'
import { recoverSessionFromCookie, scheduleRenewIfDue } from './session'
import type { AuthFailureReason, CurrentUser } from './types'

export interface OsintAuthStore {
  user: CurrentUser | null
  ready: boolean
  lastFailure: AuthFailureReason | null

  setUser: (user: CurrentUser | null) => void

  hydrate: () => Promise<void>
  login: (loginId: string, password: string) => Promise<void>
  register: (username: string, contact: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshMe: () => Promise<void>
  clearSession: (reason?: AuthFailureReason | null) => void
}

let hydrateInFlight: Promise<void> | null = null

async function rejectInvalidSession(
  set: (partial: Partial<OsintAuthStore>) => void,
): Promise<void> {
  await invalidateServerSession()
  set({ user: null, ready: true, lastFailure: 'expired' })
}

async function establishUserFromCookie(
  set: (partial: Partial<OsintAuthStore>) => void,
): Promise<CurrentUser> {
  try {
    const me = await getMe()
    set({ user: me, lastFailure: null })
    scheduleRenewIfDue()
    return me
  } catch (err) {
    if (isAuthHttpError(err) && err.status === 401) {
      const recovered = await recoverSessionFromCookie()
      if (recovered) {
        set({ user: recovered, lastFailure: null })
        scheduleRenewIfDue()
        return recovered
      }
    }
    throw err
  }
}

export const useOsintAuthStore = create<OsintAuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      ready: false,
      lastFailure: null,

      setUser: (user) => set({ user }),

      clearSession: (reason = null) => {
        lastMeValidatedAt = 0
        set({ user: null, lastFailure: reason })
      },

      hydrate: async () => {
        if (hydrateInFlight) return hydrateInFlight

        hydrateInFlight = (async () => {
          migrateLegacyAuthStorage()
          try {
            await establishUserFromCookie(set)
            set({ ready: true })
          } catch (err) {
            if (isAuthHttpError(err) && err.status === 401) {
              await rejectInvalidSession(set)
              return
            }
            set({
              ready: true,
              lastFailure: classifyAuthFailure(err),
            })
          }
        })()

        try {
          await hydrateInFlight
        } finally {
          hydrateInFlight = null
        }
      },

      login: async (loginId, password) => {
        await loginRequest(loginId, password)
        await establishUserFromCookie(set)
        set({ ready: true })
      },

      register: async (username, contact, password) => {
        await registerRequest(username, contact, password)
        await loginRequest(username, password)
        await establishUserFromCookie(set)
        set({ ready: true })
      },

      logout: async () => {
        await logoutRequest()
        set({ user: null, lastFailure: null })
      },

      refreshMe: async () => {
        const { user } = get()
        if (!user) return

        try {
          const me = await getMe()
          set({ user: me, lastFailure: null })
          scheduleRenewIfDue()
        } catch (err) {
          if (isAuthHttpError(err) && err.status === 401) {
            const recovered = await recoverSessionFromCookie()
            if (recovered) {
              set({ user: recovered, lastFailure: null })
              scheduleRenewIfDue()
              return
            }
            await invalidateServerSession()
            set({ user: null, lastFailure: 'expired' })
            return
          }
          set({ lastFailure: classifyAuthFailure(err) })
        }
      },
    }),
    {
      name: OSINT_AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => createRememberAwareStorage()),
      partialize: (state) => ({
        user: state.user,
      }),
      onRehydrateStorage: () => (state) => {
        void state?.hydrate()
      },
    },
  ),
)

let lastMeValidatedAt = 0
const meValidationTTLMs = 90_000

/** Validate HttpOnly cookie session before sensitive operations. */
export async function ensureAuthenticatedSession(): Promise<void> {
  const { user } = useOsintAuthStore.getState()
  if (!user) {
    throw new AuthRequiredError('请先登录')
  }

  const now = Date.now()
  if (now - lastMeValidatedAt < meValidationTTLMs) {
    return
  }

  try {
    await getMe()
    lastMeValidatedAt = now
    scheduleRenewIfDue()
  } catch (err) {
    if (isAuthHttpError(err) && err.status === 401) {
      const recovered = await recoverSessionFromCookie()
      if (recovered) {
        useOsintAuthStore.getState().setUser(recovered)
        lastMeValidatedAt = now
        scheduleRenewIfDue()
        return
      }
      await invalidateServerSession()
      useOsintAuthStore.getState().clearSession('expired')
      throw new AuthRequiredError('登录已失效，请重新登录')
    }
    throw err
  }
}

/** @deprecated Use authFetchInit() — no Bearer headers with cookie-only auth. */
export function getOsintAuthHeaders(): HeadersInit {
  return {}
}

/** @deprecated Cookie-only auth — always returns null. */
export function getOsintAccessToken(): string | null {
  return null
}

export async function getAuthenticatedHeaders(): Promise<HeadersInit> {
  await ensureAuthenticatedSession()
  return {}
}

export async function fetchCurrentUser(): Promise<CurrentUser> {
  const { user } = useOsintAuthStore.getState()
  if (!user) {
    const err = new Error('auth me failed: 401') as Error & { status?: number }
    err.status = 401
    throw err
  }
  return getMe()
}
