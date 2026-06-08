import { AUTH_API_PREFIX } from './constants'
import type { AuthConfig, CurrentUser } from './types'

/** All authenticated API calls must send the HttpOnly session cookie. */
export function authFetchInit(init: RequestInit = {}): RequestInit {
  return {
    ...init,
    credentials: 'include',
  }
}

export async function authedFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  return fetch(input, authFetchInit(init))
}

/** @deprecated Bearer headers are unused — session is cookie-only. */
export function authHeaders(): HeadersInit {
  return {}
}

export async function fetchAuthConfig(): Promise<AuthConfig> {
  const res = await fetch(`${AUTH_API_PREFIX}/config`)
  if (!res.ok) return { registration_enabled: false }
  return res.json() as Promise<AuthConfig>
}

export async function loginRequest(login: string, password: string): Promise<void> {
  const res = await fetch(
    `${AUTH_API_PREFIX}/login`,
    authFetchInit({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: login.trim(),
        password,
        remember_me: true,
      }),
    }),
  )
  const data = (await res.json().catch(() => ({}))) as { detail?: string }
  if (!res.ok) {
    throw new Error(data.detail || `登录失败 (${res.status})`)
  }
}

export async function registerRequest(
  username: string,
  email: string,
  password: string,
): Promise<CurrentUser> {
  const res = await fetch(
    `${AUTH_API_PREFIX}/register`,
    authFetchInit({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.trim(),
        email: email.trim(),
        password,
      }),
    }),
  )
  let raw = ''
  try {
    raw = await res.clone().text()
  } catch {
    /* ignore */
  }
  const data = (await res.json().catch(() => ({}))) as { detail?: string } & Partial<CurrentUser>
  if (!res.ok) {
    throw new Error(data.detail || raw || `注册失败 (${res.status})`)
  }
  if (!data.id) {
    throw new Error('注册响应无效')
  }
  return data as CurrentUser
}

export async function getMe(): Promise<CurrentUser> {
  const res = await authedFetch(`${AUTH_API_PREFIX}/me`)
  if (!res.ok) {
    const err = new Error(`auth me failed: ${res.status}`) as Error & { status?: number }
    err.status = res.status
    throw err
  }
  return res.json() as Promise<CurrentUser>
}

export async function renewSessionRequest(): Promise<void> {
  const res = await authedFetch(`${AUTH_API_PREFIX}/renew`, { method: 'POST' })
  const data = (await res.json().catch(() => ({}))) as { detail?: string }
  if (!res.ok) {
    const err = new Error(data.detail || `renew failed: ${res.status}`) as Error & { status?: number }
    err.status = res.status
    throw err
  }
}

export async function logoutRequest(): Promise<void> {
  try {
    await authedFetch(`${AUTH_API_PREFIX}/logout`, { method: 'POST' })
  } catch {
    /* ignore */
  }
}

/** Clear HttpOnly cookie on the server (best-effort). */
export async function invalidateServerSession(): Promise<void> {
  await logoutRequest()
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<void> {
  const res = await authedFetch(`${AUTH_API_PREFIX}/change-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ old_password: oldPassword, new_password: newPassword }),
  })
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { detail?: string }
    throw new Error(data.detail || `修改密码失败 (${res.status})`)
  }
}

export async function sendVerificationCode(_contact?: string): Promise<{ ok: boolean; message?: string }> {
  const res = await fetch(`${AUTH_API_PREFIX}/send-code`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })
  if (!res.ok) {
    throw new Error(`发送验证码失败 (${res.status})`)
  }
  return res.json() as Promise<{ ok: boolean; message?: string }>
}

export function isAdmin(user: CurrentUser | null): boolean {
  return user?.role === 'admin'
}

export class AuthRequiredError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthRequiredError'
  }
}

export function isAuthHttpError(err: unknown): err is Error & { status: number } {
  return (
    err instanceof Error &&
    typeof (err as Error & { status?: number }).status === 'number'
  )
}

export function classifyAuthFailure(
  err: unknown,
): 'expired' | 'invalid' | 'network' | 'unknown' {
  if (isAuthHttpError(err)) {
    if (err.status === 401) return 'expired'
    return 'invalid'
  }
  if (err instanceof TypeError) return 'network'
  return 'unknown'
}
