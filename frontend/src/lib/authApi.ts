/**
 * @deprecated Import from `@/osint/auth` instead. This shim preserves existing import paths.
 */
export {
  AUTH_TOKEN_KEY,
  type CurrentUser,
  type AuthConfig,
  authFetchInit,
  authHeaders,
  fetchAuthConfig,
  fetchCurrentUser as getMe,
  loginRequest,
  registerRequest,
  logoutRequest,
  changePassword,
  sendVerificationCode,
  isAdmin,
} from '@/osint/auth'
