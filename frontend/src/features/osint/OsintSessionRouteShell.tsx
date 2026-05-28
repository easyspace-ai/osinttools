import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getStoredToken } from "@/lib/authApi";
import { useAuthStore } from "@/osint/stores/authStore";
import { DialogProvider } from "@/osint/components/ui/Dialog";
import { ToastProvider } from "@/osint/components/ui/Feedback";

const IntelligenceHome = React.lazy(() => import("@/osint/pages/IntelligenceHome"));

export function OsintSessionRouteShell() {
  const { user, ready } = useAuth();
  const [synced, setSynced] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!ready || !user) return;
    const token = getStoredToken();
    if (!token) {
      setErr("未登录");
      return;
    }
    useAuthStore.getState().setToken(token);
    useAuthStore.getState().setUser({ id: user.id, email: user.email, name: user.name || user.username });
    // 旧版 /api/v1/intelligence/user/sync 已移除；直接视为同步完成
    setSynced(true);
  }, [ready, user]);

  if (!ready || !user) {
    return (
      <div className="flex h-full min-h-0 items-center justify-center bg-gray-50 text-sm text-slate-500 dark:bg-gray-950">
        加载中…
      </div>
    );
  }
  if (err) {
    return (
      <div className="flex h-full min-h-0 items-center justify-center bg-gray-50 p-6 text-sm text-red-600 dark:bg-gray-950">
        {err}
      </div>
    );
  }
  if (!synced) {
    return (
      <div className="flex h-full min-h-0 items-center justify-center bg-gray-50 text-sm text-slate-500 dark:bg-gray-950">
        同步账户…
      </div>
    );
  }

  return (
    <DialogProvider>
      <ToastProvider>
        <React.Suspense
          fallback={
            <div className="flex h-full min-h-0 items-center justify-center bg-gray-50 text-sm text-slate-500 dark:bg-gray-950">
              加载情报工作台…
            </div>
          }
        >
          <div className="flex h-full min-h-0 flex-1 flex-col">
            <Routes>
              <Route path="sessions/:sessionId" element={<IntelligenceHome />} />
              <Route path="*" element={<IntelligenceHome />} />
            </Routes>
          </div>
        </React.Suspense>
      </ToastProvider>
    </DialogProvider>
  );
}
