import * as React from "react";
import {
  type CurrentUser,
  getMe,
  getStoredToken,
  loginRequest,
  logoutRequest,
  registerRequest,
  setStoredToken,
  syncAuthCookie,
} from "@/lib/authApi";

interface AuthState {
  user: CurrentUser | null;
  ready: boolean;
  login: (login: string, password: string) => Promise<void>;
  register: (username: string, contact: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshMe: () => Promise<void>;
}

const AuthContext = React.createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<CurrentUser | null>(null);
  const [ready, setReady] = React.useState(false);

  const refreshMe = React.useCallback(async () => {
    const token = getStoredToken();
    if (!token) {
      setUser(null);
      setReady(true);
      return;
    }
    try {
      await syncAuthCookie();
      const me = await getMe();
      setUser(me);
    } catch {
      setStoredToken(null);
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);

  React.useEffect(() => {
    void refreshMe();
  }, [refreshMe]);

  const login = React.useCallback(async (loginId: string, password: string) => {
    const r = await loginRequest(loginId, password);
    setStoredToken(r.access_token);
    await syncAuthCookie();
    const me = await getMe();
    setUser(me);
  }, []);

  const register = React.useCallback(async (username: string, contact: string, password: string) => {
    await registerRequest(username, contact, password);
    const r = await loginRequest(username, password);
    setStoredToken(r.access_token);
    await syncAuthCookie();
    const me = await getMe();
    setUser(me);
  }, []);

  const logout = React.useCallback(async () => {
    await logoutRequest();
    setUser(null);
  }, []);

  const value = React.useMemo<AuthState>(
    () => ({ user, ready, login, register, logout, refreshMe }),
    [user, ready, login, register, logout, refreshMe],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = React.useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
