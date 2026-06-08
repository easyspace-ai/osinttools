import { getMe, renewSessionRequest } from './client'

/** Try silent cookie renewal at most once per day (only after a successful /me). */
const RENEW_INTERVAL_MS = 24 * 60 * 60 * 1000
let lastRenewAttemptAt = 0

export function scheduleRenewIfDue(): void {
  const now = Date.now()
  if (now - lastRenewAttemptAt < RENEW_INTERVAL_MS) return
  lastRenewAttemptAt = now
  void renewSessionRequest().catch(() => {
    /* non-fatal background renew */
  })
}

/** After /me returns 401, attempt renew (30-day server leeway) then /me once more. */
export async function recoverSessionFromCookie(): Promise<CurrentUser | null> {
  try {
    await renewSessionRequest()
    return await getMe()
  } catch {
    return null
  }
}
