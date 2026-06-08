import { beforeEach, describe, expect, it } from 'vitest'
import { handleUnauthorizedResponse, resetUnauthorizedRedirectGuard } from './unauthorized'
import { useOsintAuthStore } from './store'

describe('handleUnauthorizedResponse', () => {
  beforeEach(() => {
    resetUnauthorizedRedirectGuard()
    useOsintAuthStore.setState({
      user: null,
      ready: true,
      lastFailure: null,
    })
  })

  it('keeps session when user is loaded on transient 401', () => {
    const user = { id: '1', username: 'u' } as never
    useOsintAuthStore.setState({ user })

    handleUnauthorizedResponse(401, { skipRedirect: true })

    expect(useOsintAuthStore.getState().user).toBe(user)
    expect(useOsintAuthStore.getState().lastFailure).toBe('network')
  })

  it('clears session when user is absent on 401', () => {
    useOsintAuthStore.setState({ user: { id: '1' } as never })
    useOsintAuthStore.getState().clearSession('expired')

    handleUnauthorizedResponse(401, { skipRedirect: true })

    expect(useOsintAuthStore.getState().user).toBeNull()
    expect(useOsintAuthStore.getState().lastFailure).toBe('expired')
  })
})
