import { j as s } from "./three-6xqd9jvE.js";
import { a as n } from "./monaco-BqKDZJPO.js";
import { u as _e, q as ze, r as D, s as Ee, t as Te, v as Pe, w as Oe, x as b, S as G, P as $e, M as ne, y as Be, z as Le, G as We, H as A, I as De, J as Ge, N as Fe, K as He, O as Ke, E as Ue, o as qe, T as Ve } from "./main-Bcy9l3UX.js";
import "./charts-S2HjfYzV.js";
const re = "/ai-session".replace(/\/$/, "");
function g(i) {
  const t = i.startsWith("/") ? i : `/${i}`;
  return re ? `${re}${t}` : t;
}
const Je = { ShieldCheck: s.jsx(G, { size: 12 }), Search: s.jsx(Ke, { size: 12 }), Database: s.jsx(He, { size: 12 }), Newspaper: s.jsx(Fe, { size: 12 }) };
function Qe({ session: i, isActive: t, onClick: k, onRename: v, onDelete: R }) {
  const [w, d] = n.useState(false);
  return s.jsxs("div", { onClick: k, className: b("group flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer transition-all duration-150 select-none border-l-2 border-transparent", t ? "bg-blue-50/90 text-slate-900 border-blue-600 dark:bg-blue-950/35 dark:text-slate-100 dark:border-blue-500" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800/60"), children: [s.jsx(ne, { size: 13, className: b("shrink-0", t ? "text-blue-600 dark:text-blue-400" : "text-slate-400") }), s.jsx("span", { className: "text-[13px] truncate flex-1 leading-tight", children: i.title }), s.jsxs("div", { className: "relative", children: [s.jsx("button", { onClick: (u) => {
    u.stopPropagation(), d(!w);
  }, className: b("p-1 rounded-md transition-opacity", t ? "hover:bg-white text-gray-400" : "hover:bg-white/60 text-gray-300", w ? "opacity-100" : "opacity-0 group-hover:opacity-100"), children: s.jsx(Ue, { size: 11 }) }), w && s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "fixed inset-0 z-10", onClick: () => d(false) }), s.jsxs("div", { className: "absolute right-0 top-full mt-1 bg-white rounded-xl border border-gray-100 shadow-xl z-20 min-w-[120px] py-1", children: [s.jsxs("button", { onClick: (u) => {
    u.stopPropagation(), v(), d(false);
  }, className: "flex items-center gap-2 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50", children: [s.jsx(qe, { size: 11 }), " \u91CD\u547D\u540D"] }), s.jsxs("button", { onClick: (u) => {
    u.stopPropagation(), R(), d(false);
  }, className: "flex items-center gap-2 w-full px-3 py-2 text-xs text-danger-600 hover:bg-danger-50", children: [s.jsx(Ve, { size: 11 }), " \u5220\u9664"] })] })] })] })] });
}
function st() {
  var _a;
  const i = _e(), { sessionId: t } = ze(), { sessions: k, messages: v, intelligenceSkills: R, messagePagination: w, isStreaming: d, messagesLoadingBySession: u, wsStatus: h, wsReconnectAttempt: oe, wsReconnectMaxAttempts: le, error: ie, fetchSessions: m, fetchMessagesBySession: S, setActiveMessageSession: I, clearSessionMessages: _, loadOlderMessages: ce, createSession: F, updateSession: de, deleteSession: ue, sendMessageWS: H, uploadResource: fe, connectWebSocket: z, disconnectWebSocket: K, retryWebSocketConnection: E, abortActiveMessageStream: U, fetchResources: q, fetchIntelligenceSkills: V, executeIntelligenceSkill: xe } = D(), { addToast: p } = Ee(), { confirm: he, prompt: me } = Te(), J = !!((_a = Pe()) == null ? void 0 : _a.leftCollapsed), [y, Q] = n.useState(null), [pe, X] = n.useState(false), [c, ge] = n.useState([]), [j, T] = n.useState(null), P = n.useRef(0), O = n.useRef(void 0), Y = n.useRef({}), Z = n.useRef({});
  n.useEffect(() => {
    m(), V(), Oe.listGroups().then(ge).catch(() => {
    });
  }, [m, V]), n.useEffect(() => {
    if (c.length === 0) {
      T(null);
      return;
    }
    T((e) => e && c.some((a) => a.id === e) ? e : c[0].id);
  }, [c]), n.useEffect(() => {
    if (t) return;
    let e = false;
    return (async () => {
      if (await m(), e) return;
      const r = D.getState().sessions;
      r.length > 0 && i(g(`/sessions/${r[0].id}`), { replace: true });
    })(), () => {
      e = true;
    };
  }, [t, i, m]), n.useEffect(() => {
    const e = ++P.current;
    let a = false;
    if (I(t), t) {
      const r = O.current !== t;
      O.current = t, r && _(t), (async () => {
        try {
          await m();
        } catch {
        }
        if (!(a || P.current !== e)) {
          try {
            await S(t, { mode: "replaceLatest" });
          } catch (l) {
            console.error("[IntelligenceHome] Failed to fetch messages:", l);
          }
          a || P.current !== e || (q(t), z(t));
        }
      })();
    } else _(), O.current = void 0;
    return () => {
      a = true, t && K(t);
    };
  }, [t, m, S, q, z, K, I, _]), n.useEffect(() => {
    if (!t || (h == null ? void 0 : h[t]) === "connected" || (h == null ? void 0 : h[t]) === "connecting" || (h == null ? void 0 : h[t]) === "reconnecting") return;
    const e = Date.now(), a = Z.current[t] || 0;
    e - a < 3e3 || (Z.current[t] = e, E(t));
  }, [t, h, E]), n.useEffect(() => {
    if (!t || (u == null ? void 0 : u[t]) || v.length > 0) return;
    const e = Date.now(), a = Y.current[t] || 0;
    e - a < 3e3 || (Y.current[t] = e, S(t, { mode: "replaceLatest" }));
  }, [t, u, v.length, h, S]), n.useEffect(() => () => {
    U();
  }, [U]);
  const be = async () => {
    const e = await F("\u65B0\u5BF9\u8BDD");
    i(g(`/sessions/${e.id}`));
  }, ke = async (e) => {
    const a = k.find((l) => l.id === e);
    if (!a) return;
    const r = await me({ title: "\u91CD\u547D\u540D\u4F1A\u8BDD", message: "\u8BF7\u8F93\u5165\u65B0\u7684\u4F1A\u8BDD\u540D\u79F0", defaultValue: a.title, placeholder: "\u4F1A\u8BDD\u540D\u79F0" });
    r && r !== a.title && await de(e, r);
  }, ve = async (e) => {
    if (await he({ title: "\u5220\u9664\u4F1A\u8BDD", message: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u4F1A\u8BDD\u5417\uFF1F\u6240\u6709\u6D88\u606F\u5C06\u4E00\u5E76\u5220\u9664\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002", variant: "danger", confirmText: "\u5220\u9664", cancelText: "\u53D6\u6D88" }) && (await ue(e), t === e)) {
      const r = D.getState().sessions;
      r.length > 0 ? i(g(`/sessions/${r[0].id}`)) : i(g("/"));
    }
  }, ee = async (e) => {
    if (t) return t;
    const a = (e == null ? void 0 : e.trim().slice(0, 30)) || "\u65B0\u5BF9\u8BDD", r = await F(a);
    return I(r.id), z(r.id), i(g(`/sessions/${r.id}`), { replace: true }), r.id;
  }, we = async (e, a, r, l, B) => {
    const M = await ee(e), C = l.filter((o) => o.type === "local" && o.file), se = l.filter((o) => o.type !== "local").map((o) => ({ id: o.id, name: o.name, type: o.type }));
    let L = [];
    if (C.length > 0) try {
      L = await We(`upload ${C.length} local file(s)`, { sessionId: M, files: C.map((o) => o.name) }, async () => {
        const o = [];
        for (const x of C) {
          const W = x.file;
          A("upload_start", "uploading local file before send", { tempId: x.id, fileName: W.name, destination: "POST /api/sessions/:id/upload \u2192 AI SDK cloud + DB resource row" });
          const f = await fe(M, W);
          await De(f.id, W, Ge(f.id, f.url).filter((Ie) => Ie !== f.id)), o.push({ id: f.id, name: f.name || x.name, type: f.type || "file" }), A("upload_success", "mapped temp attachment to server resource id", { tempId: x.id, resourceId: f.id, url: f.url });
        }
        return o;
      });
    } catch (o) {
      const x = o instanceof Error ? o.message : "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25";
      A("upload_failure", x, { sessionId: M }, "error"), p("error", x);
      return;
    }
    const ae = [...se, ...L];
    A("send_message", "sending via WebSocket with resource_refs", { sessionId: M, resourceRefs: ae, localUploaded: L.length, libraryAttached: se.length }), H(M, e, ae);
  }, Se = (e) => {
    if (d) {
      p("info", "\u5F53\u524D\u6B63\u5728\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
      return;
    }
    Q(e), X(true);
  }, ye = async (e) => {
    if (y) try {
      const a = await xe(y.id, e), r = await ee(y.name);
      H(r, a, []), p("success", `${y.name} \u5DF2\u63D0\u4EA4`);
    } catch (a) {
      p("error", (a == null ? void 0 : a.message) || "\u63D0\u4EA4\u5931\u8D25");
    }
  }, N = n.useMemo(() => c.find((e) => e.id === j) ?? c[0] ?? null, [c, j]), $ = n.useMemo(() => {
    const e = R.filter((l) => l.is_enabled), a = new Map(e.map((l) => [l.key, l]));
    if (!N) return c.length === 0 ? e : [];
    const r = [];
    for (const l of N.skill_ids) {
      const B = a.get(l);
      B && r.push(B);
    }
    return r;
  }, [R, N, c.length]), je = n.useMemo(() => {
    const e = c.length > 1;
    return s.jsxs("div", { className: "flex flex-col gap-2", children: [e && s.jsx("div", { className: "flex flex-wrap items-center gap-1 border-b border-slate-200/80 pb-1.5 dark:border-slate-700", role: "tablist", "aria-label": "\u6280\u80FD\u5206\u7EC4", children: c.map((a) => s.jsx("button", { type: "button", role: "tab", "aria-selected": j === a.id, onClick: () => T(a.id), className: b("shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors", j === a.id ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"), children: a.name }, a.id)) }), s.jsx("div", { className: "flex flex-wrap gap-1.5", role: "tabpanel", "aria-label": (N == null ? void 0 : N.name) ?? "\u6280\u80FD", children: $.length === 0 ? s.jsx("span", { className: "text-[11px] text-slate-400 dark:text-slate-500", children: "\u6682\u65E0\u53EF\u7528\u6280\u80FD" }) : $.map((a) => s.jsxs("button", { type: "button", onClick: () => Se(a), disabled: d, className: b("flex shrink-0 items-center gap-1 rounded-xl border px-2.5 py-1 text-[11px] font-medium transition-all", d ? "cursor-not-allowed border-slate-100 text-slate-300 opacity-40 dark:border-slate-800" : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800"), children: [s.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: Je[a.icon || ""] || s.jsx(G, { size: 12 }) }), a.name] }, a.id)) })] });
  }, [c, j, N, $, d]), Ne = v.map((e) => {
    var _a2;
    return { messageKind: (() => {
      var _a3, _b;
      const a = (_a3 = e.attachments) == null ? void 0 : _a3.upstream_kind, r = !!((_b = e.attachments) == null ? void 0 : _b.is_process);
      return a === "system" ? "system" : r || a === "reasoning" || a === "internal_thought" || a === "subliminal_thought" ? "reasoning" : "normal";
    })(), id: e.id, role: e.role === "system" ? "assistant" : e.role, content: e.content, upstreamKind: typeof ((_a2 = e.attachments) == null ? void 0 : _a2.upstream_kind) == "string" ? String(e.attachments.upstream_kind) : void 0, thinkingTime: void 0, status: e.role === "assistant" ? (() => {
      var _a3;
      const a = ((_a3 = e.status) == null ? void 0 : _a3.toLowerCase()) || "";
      return a.includes("think") || a.includes("reason") ? "thinking" : a.includes("tool") ? "tool-calling" : "streaming";
    })() : void 0, resourceRefs: e.resource_refs };
  }), te = t ? w[t] : void 0, Me = !!(t && (u == null ? void 0 : u[t])), Re = t ? h == null ? void 0 : h[t] : void 0, Ce = t ? oe == null ? void 0 : oe[t] : void 0, Ae = t ? le == null ? void 0 : le[t] : void 0;
  return s.jsxs("div", { className: "flex h-full min-h-0 w-full bg-[#f3f5f7] dark:bg-slate-950", children: [s.jsx("aside", { className: b("flex flex-col shrink-0 overflow-hidden border-r border-slate-200/90 bg-white transition-[width] duration-200 ease-out dark:border-slate-800 dark:bg-slate-900", J ? "w-0 border-r-0" : "w-[240px]"), "aria-hidden": J, children: s.jsxs("div", { className: "flex min-h-0 min-w-[240px] flex-1 flex-col", children: [s.jsxs("div", { className: "flex items-center gap-2 border-b border-slate-200/90 px-3 py-3 dark:border-slate-800", children: [s.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100", children: s.jsx(G, { size: 14, className: "text-white dark:text-slate-900" }) }), s.jsx("span", { className: "text-sm font-semibold text-slate-900 dark:text-slate-100", children: "\u60C5\u62A5\u5DE5\u4F5C\u53F0" })] }), s.jsx("div", { className: "px-3 pb-2 pt-2", children: s.jsxs("button", { type: "button", onClick: be, className: "flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-900 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white", children: [s.jsx($e, { size: 14 }), "\u65B0\u4F1A\u8BDD"] }) }), s.jsx("div", { className: "min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2", children: k.length === 0 ? s.jsxs("div", { className: "px-3 py-6 text-center", children: [s.jsx(ne, { size: 20, className: "mx-auto mb-1.5 text-slate-300 dark:text-slate-600" }), s.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u4F1A\u8BDD" })] }) : k.map((e) => s.jsx(Qe, { session: e, isActive: t === e.id, onClick: () => i(g(`/sessions/${e.id}`)), onRename: () => ke(e.id), onDelete: () => ve(e.id) }, e.id)) })] }) }), s.jsx("div", { className: "flex min-w-0 flex-1 flex-col overflow-hidden border border-slate-200/90 bg-[#f7f8fa] dark:border-slate-800 dark:bg-slate-950", children: s.jsx("div", { className: "flex flex-1 flex-col min-h-0 overflow-visible", children: s.jsx(Be, { messages: Ne, studioActions: [], onSendMessage: we, isStreaming: d, isLoadingMessages: Me, hasMoreOlder: !!(te == null ? void 0 : te.hasMore), loadingOlder: !!(te == null ? void 0 : te.loadingOlder), onLoadOlder: async () => {
    t && await ce(t);
  }, wsConnectionStatus: Re, wsReconnectAttempt: Ce, wsReconnectMaxAttempts: Ae, onRetryConnection: t ? () => E(t) : void 0, error: ie, onRetryLoadMessages: t ? () => S(t, { mode: "replaceLatest" }) : void 0, onCopy: (e) => navigator.clipboard.writeText(e).then(() => p("success", "\u5DF2\u590D\u5236")), onRegenerate: () => p("info", "\u91CD\u65B0\u751F\u6210..."), autoFocus: true, toolbar: je, sessionId: t || void 0 }) }) }), s.jsx(Le, { skill: y, isOpen: pe, onClose: () => {
    X(false), Q(null);
  }, onSubmit: ye })] });
}
export {
  st as default
};
