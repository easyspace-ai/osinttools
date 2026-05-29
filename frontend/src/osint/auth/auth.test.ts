import { describe, expect, it } from 'vitest'
import { isTokenExpired, parseJwtPayload } from './token'
import { pickPersistStorage, createRememberAwareStorage } from './storage'
import { OSINT_AUTH_STORAGE_KEY } from './constants'

function makeJwt(expUnix: number): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({ sub: 'user-1', exp: expUnix }))
  return `${header}.${payload}.sig`
}

describe('osint/auth token', () => {
  it('parses JWT exp claim', () => {
    const exp = Math.floor(Date.now() / 1000) + 3600
    const token = makeJwt(exp)
    const payload = parseJwtPayload(token)
    expect(payload?.sub).toBe('user-1')
    expect(payload?.exp).toBe(exp)
    expect(isTokenExpired(token)).toBe(false)
  })

  it('detects expired token with skew', () => {
    const exp = Math.floor(Date.now() / 1000) - 60
    expect(isTokenExpired(makeJwt(exp))).toBe(true)
  })
})

describe('osint/auth storage', () => {
  it('routes rememberMe=true to localStorage', () => {
    const storage = createRememberAwareStorage()
    const value = JSON.stringify({ state: { token: 't', rememberMe: true } })
    storage.setItem(OSINT_AUTH_STORAGE_KEY, value)
    expect(localStorage.getItem(OSINT_AUTH_STORAGE_KEY)).toBe(value)
    expect(sessionStorage.getItem(OSINT_AUTH_STORAGE_KEY)).toBeNull()
    storage.removeItem(OSINT_AUTH_STORAGE_KEY)
  })

  it('routes rememberMe=false to sessionStorage', () => {
    const storage = createRememberAwareStorage()
    const value = JSON.stringify({ state: { token: 't', rememberMe: false } })
    storage.setItem(OSINT_AUTH_STORAGE_KEY, value)
    expect(sessionStorage.getItem(OSINT_AUTH_STORAGE_KEY)).toBe(value)
    expect(localStorage.getItem(OSINT_AUTH_STORAGE_KEY)).toBeNull()
    storage.removeItem(OSINT_AUTH_STORAGE_KEY)
  })

  it('pickPersistStorage respects rememberMe', () => {
    expect(pickPersistStorage(true)).toBe(localStorage)
    expect(pickPersistStorage(false)).toBe(sessionStorage)
  })
})
