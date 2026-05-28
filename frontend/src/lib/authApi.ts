export interface CurrentUser {
  id: string;
  username: string;
  name?: string;
  email: string;
  subscription_plan: string;
  credits_balance: number;
  credits_used: number;
  role: string;
  disabled: boolean;
  permissions?: string[];
  created_at: string;
}

export interface AuthConfig {
  registration_enabled: boolean;
}

export async function fetchAuthConfig(): Promise<AuthConfig> {
  const res = await fetch("/api/auth/config");
  if (!res.ok) {
    return { registration_enabled: false };
  }
  return res.json() as Promise<AuthConfig>;
}

export function isAdmin(user: CurrentUser | null): boolean {
  return user?.role === "admin";
}

export interface AuthLoginResponse {
  access_token: string;
  token_type: string;
}

export const AUTH_TOKEN_KEY = "gusheng_auth_token";

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setStoredToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
    else localStorage.removeItem(AUTH_TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

/** 将 localStorage 中的 JWT 同步为 HttpOnly Cookie，供 /jobs（River UI）使用 */
export async function syncAuthCookie(): Promise<void> {
  const t = getStoredToken();
  if (!t) return;
  const res = await fetch("/api/auth/sync-cookie", {
    method: "POST",
    headers: authHeaders(),
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error(`sync cookie failed: ${res.status}`);
  }
}

/** Optional Authorization for authenticated API calls. */
export function authHeaders(): HeadersInit {
  const headers: Record<string, string> = {};
  const t = getStoredToken();
  if (t) headers.Authorization = `Bearer ${t}`;
  return headers;
}

export async function getMe(): Promise<CurrentUser> {
  const res = await fetch("/api/auth/me", { headers: authHeaders() });
  if (!res.ok) {
    throw new Error(`auth me failed: ${res.status}`);
  }
  return res.json() as Promise<CurrentUser>;
}

export async function loginRequest(login: string, password: string): Promise<AuthLoginResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username: login.trim(), password }),
  });
  const data = (await res.json().catch(() => ({}))) as { detail?: string } & Partial<AuthLoginResponse>;
  if (!res.ok) {
    throw new Error(data.detail || `登录失败 (${res.status})`);
  }
  if (!data.access_token) {
    throw new Error("登录响应无效");
  }
  return data as AuthLoginResponse;
}

export async function registerRequest(
  username: string,
  email: string,
  password: string,
): Promise<CurrentUser> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.trim(),
      email: email.trim(),
      password,
    }),
  });
  let raw = "";
  try {
    raw = await res.clone().text();
  } catch {}
  const data = (await res.json().catch(() => ({}))) as { detail?: string } & Partial<CurrentUser>;
  if (!res.ok) {
    throw new Error(data.detail || raw || `注册失败 (${res.status})`);
  }
  if (!data.id) {
    throw new Error("注册响应无效");
  }
  return data as CurrentUser;
}

export async function logoutRequest(): Promise<void> {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch {
    /* ignore */
  }
  setStoredToken(null);
}

export async function sendVerificationCode(_contact: string): Promise<{ ok: boolean; message?: string }> {
  const res = await fetch("/api/auth/send-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  if (!res.ok) {
    throw new Error(`发送验证码失败 (${res.status})`);
  }
  return res.json() as Promise<{ ok: boolean; message?: string }>;
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<void> {
  const res = await fetch("/api/auth/change-password", {
    method: "POST",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ old_password: oldPassword, new_password: newPassword }),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { detail?: string };
    throw new Error(data.detail || `修改密码失败 (${res.status})`);
  }
}
