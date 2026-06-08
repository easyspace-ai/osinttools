import { useOsintAuthStore } from './store'

export { OSINT_AUTH_STORAGE_KEY, LEGACY_STORAGE_KEYS, AUTH_API_PREFIX } from './constants'
export type {
  CurrentUser,
  AuthConfig,
  PersistedAuthSlice,
  AuthFailureReason,
} from './types'
export { parseJwtPayload, getTokenExpiryMs, isTokenExpired } from './token'
export {
  readRawPersisted,
  writeRawPersisted,
  removeRawPersisted,
  pickPersistStorage,
  createRememberAwareStorage,
  readPersistedSlice,
} from './storage'
export { migrateLegacyAuthStorage } from './migrate'
export { scheduleRenewIfDue, recoverSessionFromCookie } from './session'
export {
  authHeaders,
  authFetchInit,
  authedFetch,
  fetchAuthConfig,
  loginRequest,
  registerRequest,
  getMe,
  renewSessionRequest,
  logoutRequest,
  changePassword,
  sendVerificationCode,
  isAdmin,
  classifyAuthFailure,
  isAuthHttpError,
  AuthRequiredError,
} from './client'
export {
  useOsintAuthStore,
  getOsintAccessToken,
  getOsintAuthHeaders,
  ensureAuthenticatedSession,
  getAuthenticatedHeaders,
  type OsintAuthStore,
  fetchCurrentUser,
} from './store'
export {
  handleUnauthorizedResponse,
  resetUnauthorizedRedirectGuard,
  getAccessToken,
} from './unauthorized'
export { OsintAuthProvider, useOsintAuth, useOsintAuthOptional, useOsintUser } from './provider'

/** @deprecated Use OSINT_AUTH_STORAGE_KEY — kept for gradual migration of imports. */
export const AUTH_TOKEN_KEY = 'osint-auth'

/** @deprecated Cookie-only auth — always null. */
export function getStoredToken(): string | null {
  return null
}

/** @deprecated Cookie-only auth — no-op. */
export function setStoredToken(_token: string | null): void {
  /* session is HttpOnly cookie only */
}

/** @deprecated Use authFetchInit() / authedFetch(). */
export function legacyAuthHeaders(): HeadersInit {
  return {}
}
