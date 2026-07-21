import { j as e } from "./three-6xqd9jvE.js";
import { a } from "./monaco-BqKDZJPO.js";
import { u as re, a as le, P as ie, L as G, A as oe, c as J, F as ce, D as de, b as xe, d as ue, e as me, f as pe, B as V, g as he, h as ge, i as fe, j as ye, k as je, l as be, m as ve, n as we, E as Ne, o as Ce, T as Se } from "./main-Bcy9l3UX.js";
import { p as B, T as ke } from "./themePresets-CR0tiUKu.js";
import { o as b, P as Ae, s as S } from "./routes-Cus_GjmS.js";
import { v as De, r as Pe } from "./mdUpload-pDgTUrf4.js";
import "./charts-S2HjfYzV.js";
function k(s) {
  if (!s) return "";
  try {
    return new Date(s * 1e3).toLocaleDateString("zh-CN", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}
function Te(s) {
  return s.styleLabel ? s.styleCategory ? `${s.styleLabel} \xB7 ${s.styleCategory}` : s.styleLabel : s.styleId || null;
}
function U({ item: s, onOpen: v, onRename: h, onDelete: A }) {
  if (s.kind === "pptxgenjs") return e.jsxs("button", { type: "button", onClick: v, className: "group overflow-hidden rounded-xl border border-gray-200/80 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md", children: [e.jsxs("div", { className: "aspect-[16/10] bg-gradient-to-br from-indigo-800 to-blue-700 p-4", children: [e.jsx("span", { className: "text-lg font-medium text-white line-clamp-2", children: s.title }), e.jsx("span", { className: "mt-2 inline-block rounded-full bg-white/15 px-2 py-0.5 text-[10px] text-white/90", children: "PptxGenJS" })] }), e.jsxs("div", { className: "px-3 py-2.5", children: [e.jsx("p", { className: "truncate text-sm font-medium text-gray-900", children: s.title }), e.jsx("p", { className: "mt-0.5 text-xs text-gray-400", children: k(s.updatedAt) ? `\u7F16\u8F91\u4E8E ${k(s.updatedAt)}` : "" })] })] });
  const l = s.session, [x, u] = a.useState(false), m = Te(l);
  return e.jsxs("div", { className: "group relative overflow-hidden rounded-xl border border-gray-200/80 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md", children: [e.jsxs("button", { type: "button", onClick: v, className: "block w-full text-left", children: [e.jsxs("div", { className: "aspect-[16/10] bg-gradient-to-br from-violet-800 to-fuchsia-700 p-4", children: [e.jsx("span", { className: "text-lg font-medium text-white line-clamp-2", children: l.title || "\u672A\u547D\u540D" }), m && e.jsx("span", { className: "mt-2 inline-block max-w-full truncate rounded-full bg-white/15 px-2 py-0.5 text-[11px] text-white/90", children: m })] }), e.jsxs("div", { className: "px-3 py-2.5", children: [e.jsx("p", { className: "truncate text-sm font-medium text-gray-900", children: l.title || l.id }), e.jsxs("p", { className: "mt-0.5 text-xs text-gray-400", children: [l.pageCount ? `${l.pageCount} \u9875` : "0 \u9875", k(l.updatedAt) ? ` \xB7 ${k(l.updatedAt)}` : ""] }), m && e.jsxs("p", { className: "mt-1 truncate text-[11px] text-violet-600/80", children: ["\u6A21\u677F\uFF1A", m] })] })] }), e.jsxs("div", { className: "absolute right-2 top-2", children: [e.jsx("button", { type: "button", onClick: (o) => {
    o.stopPropagation(), u((p) => !p);
  }, className: J("rounded-lg bg-black/20 p-1.5 text-white/90 backdrop-blur transition hover:bg-black/30", x ? "opacity-100" : "opacity-0 group-hover:opacity-100"), "aria-label": "\u66F4\u591A\u64CD\u4F5C", children: e.jsx(Ne, { size: 14 }) }), x && e.jsxs(e.Fragment, { children: [e.jsx("button", { type: "button", className: "fixed inset-0 z-10 cursor-default", "aria-label": "\u5173\u95ED\u83DC\u5355", onClick: () => u(false) }), e.jsxs("div", { className: "absolute right-0 top-full z-20 mt-1 min-w-[120px] rounded-xl border border-gray-100 bg-white py-1 shadow-xl", children: [e.jsxs("button", { type: "button", onClick: (o) => {
    o.stopPropagation(), u(false), h();
  }, className: "flex w-full items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50", children: [e.jsx(Ce, { size: 12 }), " \u91CD\u547D\u540D"] }), e.jsxs("button", { type: "button", onClick: (o) => {
    o.stopPropagation(), u(false), A();
  }, className: "flex w-full items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50", children: [e.jsx(Se, { size: 12 }), " \u5220\u9664"] })] })] })] })] });
}
function Me() {
  const s = re(), v = le(), h = a.useRef(null), [A, l] = a.useState([]), [x, u] = a.useState(""), [m, o] = a.useState(true), [p, L] = a.useState(false), [z, i] = a.useState(""), [w, $] = a.useState(""), [g, q] = a.useState(""), [N, K] = a.useState(""), [F, Q] = a.useState(8), [D, W] = a.useState("pptxgenjs"), [I, X] = a.useState("midnight-exec"), [O, Y] = a.useState([]), [P, f] = a.useState(null), [T, E] = a.useState(""), [M, _] = a.useState(false), [y, R] = a.useState(null), [Z, H] = a.useState(false), C = a.useCallback(async () => {
    try {
      o(true);
      const [t, r, c] = await Promise.all([b.listSessions(), b.listStyles(), B.listProjects().catch(() => [])]);
      l(r), !x && r.length > 0 && u(r[0].id);
      const d = [...t.map((n) => ({ kind: "ohmyppt", session: n })), ...c.map((n) => ({ kind: "pptxgenjs", id: n.id, title: n.name || n.id, updatedAt: Math.floor(new Date(n.updated_at).getTime() / 1e3) || 0 }))];
      d.sort((n, j) => {
        const ne = n.kind === "ohmyppt" ? n.session.updatedAt || 0 : n.updatedAt;
        return (j.kind === "ohmyppt" ? j.session.updatedAt || 0 : j.updatedAt) - ne;
      }), Y(d);
    } catch (t) {
      i(t instanceof Error ? t.message : "\u52A0\u8F7D\u5931\u8D25");
    } finally {
      o(false);
    }
  }, [x]);
  a.useEffect(() => {
    C();
  }, [C, v.pathname]);
  const ee = async (t) => {
    var _a;
    const r = De(t);
    if (r) {
      i(r);
      return;
    }
    i(""), K(t.name);
    const c = await Pe(t);
    q(c);
    const d = ((_a = c.split(`
`).find((n) => n.trim())) == null ? void 0 : _a.replace(/^#+\s*/, "")) || "";
    d && $(d.slice(0, 120));
  }, te = async () => {
    const t = w.trim() || N.replace(/\.md$/i, "");
    if (!(!(g.trim() || t) || p)) {
      L(true), i("");
      try {
        if (D === "pptxgenjs") {
          const n = g.trim() || `# ${t}

\u8BF7\u56F4\u7ED5\u300C${t}\u300D\u751F\u6210\u4E00\u4EFD 10\u201315 \u9875\u7684\u53EF\u7F16\u8F91\u6F14\u793A\u5927\u7EB2\u4E0E\u5185\u5BB9\u3002`, j = await B.createProject({ name: N.replace(/\.md$/i, "") || t || void 0, markdown: n, preferences: { theme: I }, run_pipeline: false });
          s(S(j.project.id, "pptxgenjs"), { state: { autoRun: true } });
          return;
        }
        const d = (await b.createSession({ topic: t, style_id: x || void 0, page_count: F, locale: "zh", user_message: g.trim() || void 0 })).session.id;
        if (!d) throw new Error("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25");
        s(S(d, "ohmyppt"), { state: { autoRun: true } });
      } catch (c) {
        i(c instanceof Error ? c.message : "\u521B\u5EFA\u5931\u8D25"), L(false);
      }
    }
  }, se = async () => {
    if (!P) return;
    const t = T.trim();
    if (!t) {
      i("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    _(true), i("");
    try {
      await b.updateSessionTitle(P.id, t), f(null), E(""), await C();
    } catch (r) {
      i(r instanceof Error ? r.message : "\u91CD\u547D\u540D\u5931\u8D25");
    } finally {
      _(false);
    }
  }, ae = async () => {
    if (y) {
      H(true), i("");
      try {
        await b.deleteSession(y.id), R(null), await C();
      } catch (t) {
        i(t instanceof Error ? t.message : "\u5220\u9664\u5931\u8D25");
      } finally {
        H(false);
      }
    }
  };
  return e.jsxs("div", { className: "min-h-0 h-full overflow-auto bg-[#faf8f6]", children: [e.jsxs("div", { className: "relative overflow-hidden bg-gradient-to-br from-violet-300 via-fuchsia-200 to-orange-200 px-4 pb-32 pt-16", children: [e.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [e.jsx("h1", { className: "text-3xl font-semibold tracking-tight text-gray-900", children: "AI \u5E7B\u706F\u7247" }), e.jsx("p", { className: "mt-2 text-sm text-gray-700/80", children: "\u8F93\u5165\u4E3B\u9898\u6216\u4E0A\u4F20 Markdown\uFF0C\u9009\u62E9\u751F\u6210\u65B9\u5F0F\u521B\u5EFA\u6F14\u793A\u7A3F" })] }), e.jsxs("div", { className: "mx-auto mt-10 max-w-2xl", children: [e.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-3 py-2 shadow-lg shadow-violet-900/5 backdrop-blur", children: [e.jsx("button", { type: "button", onClick: () => {
    var _a;
    return (_a = h.current) == null ? void 0 : _a.click();
  }, className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100", title: "\u4E0A\u4F20 .md", children: e.jsx(ie, { size: 18 }) }), e.jsx("input", { ref: h, type: "file", accept: ".md,text/markdown", className: "hidden", onChange: (t) => {
    var _a;
    const r = (_a = t.target.files) == null ? void 0 : _a[0];
    r && ee(r);
  } }), e.jsx("input", { value: w, onChange: (t) => $(t.target.value), placeholder: "\u8F93\u5165\u6F14\u793A\u4E3B\u9898\u2026", className: "min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400" }), e.jsx("button", { type: "button", disabled: !w.trim() && !g.trim() || p, onClick: () => void te(), className: J("flex h-9 w-9 items-center justify-center rounded-full transition-colors", (w.trim() || g.trim()) && !p ? "bg-gray-900 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-300"), children: p ? e.jsx(G, { size: 16, className: "animate-spin" }) : e.jsx(oe, { size: 16 }) })] }), e.jsxs("div", { className: "mt-4 flex flex-wrap justify-center gap-3 text-xs", children: [e.jsxs("label", { className: "flex items-center gap-1.5 text-gray-700", children: ["\u751F\u6210\u65B9\u5F0F", e.jsx("select", { value: D, onChange: (t) => W(t.target.value), className: "max-w-[220px] rounded-md border border-white/50 bg-white/80 px-2 py-1", children: Ae.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) })] }), D === "ohmyppt" ? e.jsxs(e.Fragment, { children: [e.jsxs("label", { className: "flex items-center gap-1.5 text-gray-700", children: ["\u98CE\u683C", e.jsx("select", { value: x, onChange: (t) => u(t.target.value), className: "max-w-[200px] rounded-md border border-white/50 bg-white/80 px-2 py-1", children: A.map((t) => e.jsxs("option", { value: t.id, children: [t.label, t.category ? ` \xB7 ${t.category}` : ""] }, t.id)) })] }), e.jsxs("label", { className: "flex items-center gap-1.5 text-gray-700", children: ["\u9875\u6570", e.jsx("select", { value: F, onChange: (t) => Q(Number(t.target.value)), className: "rounded-md border border-white/50 bg-white/80 px-2 py-1", children: [4, 6, 8, 10, 12, 16].map((t) => e.jsxs("option", { value: t, children: [t, " \u9875"] }, t)) })] })] }) : e.jsxs("label", { className: "flex items-center gap-1.5 text-gray-700", children: ["\u4E3B\u9898", e.jsx("select", { value: I, onChange: (t) => X(t.target.value), className: "max-w-[200px] rounded-md border border-white/50 bg-white/80 px-2 py-1", children: ke.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) })] })] }), N && e.jsxs("p", { className: "mt-2 text-center text-xs text-gray-600", children: ["\u5DF2\u9009\u6587\u4EF6\uFF1A", N] }), z && e.jsx("p", { className: "mt-3 text-center text-sm text-red-600", children: z })] })] }), e.jsxs("div", { className: "relative -mt-20 mx-auto max-w-5xl rounded-t-3xl bg-[#faf8f6] px-4 pb-16 pt-8", children: [e.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [e.jsx("h2", { className: "text-sm font-medium text-gray-800", children: "\u6700\u8FD1\u4F1A\u8BDD" }), e.jsxs("button", { type: "button", onClick: () => {
    var _a;
    return (_a = h.current) == null ? void 0 : _a.click();
  }, className: "flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800", children: [e.jsx(ce, { size: 14 }), " \u4E0A\u4F20 MD"] })] }), m ? e.jsxs("div", { className: "flex justify-center py-16 text-sm text-gray-400", children: [e.jsx(G, { className: "mr-2 animate-spin", size: 16 }), " \u52A0\u8F7D\u4E2D\u2026"] }) : O.length === 0 ? e.jsx("div", { className: "rounded-2xl border border-dashed border-gray-200 py-16 text-center text-sm text-gray-400", children: "\u6682\u65E0\u4F1A\u8BDD\uFF0C\u8F93\u5165\u4E3B\u9898\u5F00\u59CB\u521B\u5EFA" }) : e.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: O.map((t) => t.kind === "pptxgenjs" ? e.jsx(U, { item: t, onOpen: () => s(S(t.id, "pptxgenjs")) }, `pptx-${t.id}`) : e.jsx(U, { item: t, onOpen: () => s(S(t.session.id, "ohmyppt")), onRename: () => {
    f(t.session), E(t.session.title || "");
  }, onDelete: () => R(t.session) }, `ohm-${t.session.id}`)) })] }), e.jsx(de, { open: !!P, onOpenChange: (t) => !t && f(null), children: e.jsxs(xe, { onOpenChange: () => f(null), className: "max-w-md", children: [e.jsx(ue, { children: e.jsx(me, { children: "\u91CD\u547D\u540D\u9879\u76EE" }) }), e.jsx("input", { value: T, onChange: (t) => E(t.target.value), maxLength: 120, className: "mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-violet-400", placeholder: "\u8F93\u5165\u9879\u76EE\u540D\u79F0", autoFocus: true }), e.jsxs(pe, { children: [e.jsx(V, { variant: "outline", onClick: () => f(null), children: "\u53D6\u6D88" }), e.jsx(V, { disabled: M || !T.trim(), onClick: () => void se(), children: M ? "\u4FDD\u5B58\u4E2D\u2026" : "\u4FDD\u5B58" })] })] }) }), e.jsx(he, { open: !!y, onOpenChange: (t) => !t && R(null), children: e.jsxs(ge, { children: [e.jsxs(fe, { children: [e.jsx(ye, { children: "\u5220\u9664\u9879\u76EE\uFF1F" }), e.jsxs(je, { children: ["\u5C06\u6C38\u4E45\u5220\u9664\u300C", (y == null ? void 0 : y.title) || (y == null ? void 0 : y.id), "\u300D\u53CA\u5176\u6240\u6709\u9875\u9762\u6587\u4EF6\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002"] })] }), e.jsxs(be, { children: [e.jsx(ve, { children: "\u53D6\u6D88" }), e.jsx(we, { variant: "destructive", onClick: () => void ae(), children: Z ? "\u5220\u9664\u4E2D\u2026" : "\u5220\u9664" })] })] }) })] });
}
export {
  Me as default
};
