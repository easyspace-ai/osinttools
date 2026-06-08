import { invalidateServerSession } from './client'
import { useOsintAuthStore } from './store'

let redirectingToLogin = false
let refreshAfter401Scheduled = false

export type UnauthorizedHandlerOptions = {
  /** Skip redirect (e.g. already on login page). */
  skipRedirect?: boolean
  loginPath?: string
}

/**
 * Centralized 401 handling for cookie-only sessions.
 * If user is still in memory, treat as transient failure (network/gateway).
 */
export function handleUnauthorizedResponse(
  status: number,
  options: UnauthorizedHandlerOptions = {},
): void {
  if (status !== 401) return

  const { user } = useOsintAuthStore.getState()
  if (user) {
    useOsintAuthStore.setState({ lastFailure: 'network' })
    if (!refreshAfter401Scheduled) {
      refreshAfter401Scheduled = true
      void useOsintAuthStore
        .getState()
        .refreshMe()
        .finally(() => {
          refreshAfter401Scheduled = false
        })
    }
    return
  }

  void invalidateServerSession().finally(() => {
    useOsintAuthStore.getState().clearSession('expired')
  })

  if (options.skipRedirect) return
  if (typeof window === 'undefined' || redirectingToLogin) return

  const loginPath = options.loginPath ?? '/login'
  const isAuthPage =
    window.location.pathname.startsWith(loginPath) ||
    window.location.pathname.startsWith('/register')
  if (isAuthPage) return

  redirectingToLogin = true
  const next = `${window.location.pathname}${window.location.search}${window.location.hash}`
  const redirect = encodeURIComponent(next || '/')
  window.location.replace(`${loginPath}?redirect=${redirect}&reason=expired`)
}

export function resetUnauthorizedRedirectGuard(): void {
  redirectingToLogin = false
}

/** @deprecated Cookie-only auth — use useOsintAuthStore.getState().user instead. */
export function getAccessToken(): string | null {
  return null
}
