import { j as e } from "./three-6xqd9jvE.js";
import { a as n } from "./monaco-BqKDZJPO.js";
import { Q as F, q, a as Q, R as V, U as Y, V as Z, L as y, W as I, c as ee, X as te } from "./main-DXuYf9zK.js";
import { p as j, b as se } from "./routes-C1v6RrWh.js";
import { P as _, S as ae } from "./PipelineProgressPanel-BzwUNZLj.js";
import "./charts-S2HjfYzV.js";
const ne = "/api/studio/ohmyppt";
async function re(t, r = "deck.pptx") {
  const o = await fetch("/api/ppthtml/export/download", F({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ html: t, filename: r }) }));
  if (!o.ok) {
    const c = await o.json().catch(() => ({}));
    throw new Error(c.detail || c.message || "PPTX export failed");
  }
  const l = await o.blob(), a = URL.createObjectURL(l), i = document.createElement("a");
  i.href = a, i.download = r.endsWith(".pptx") ? r : `${r}.pptx`, i.click(), URL.revokeObjectURL(a);
}
async function oe(t, r = "deck.pptx") {
  const o = r.endsWith(".pptx") ? r : `${r}.pptx`, l = o.replace(/\.pptx$/i, ""), a = await fetch(`${ne}/export/guizang-pptx`, F({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ html: t, title: l }) }));
  if (!a.ok) {
    const m = await a.json().catch(() => ({}));
    throw new Error(m.detail || m.error || m.message || "Editable PPTX export failed");
  }
  const i = await a.blob(), c = URL.createObjectURL(i), x = document.createElement("a");
  x.href = c, x.download = o, x.click(), URL.revokeObjectURL(c);
}
function ie(t, r = "deck.html") {
  const o = new Blob([t], { type: "text/html;charset=utf-8" }), l = URL.createObjectURL(o), a = document.createElement("a");
  a.href = l, a.download = r, a.click(), URL.revokeObjectURL(l);
}
function le(t, r, o, l, a) {
  t.stage && t.stage !== "done" && r(t.stage), t.message && o(t.message), t.status === "retry" && t.stage && l((i) => ({ ...i, [t.stage]: "" })), t.status === "progress" && t.chunk && t.stage && l((i) => ({ ...i, [t.stage]: (i[t.stage] || "") + t.chunk })), t.stage === "error" && a(t.message || "\u751F\u6210\u5931\u8D25");
}
function ue() {
  const { projectId: t } = q(), r = Q(), [o, l] = n.useState(""), [a, i] = n.useState(""), [c, x] = n.useState(""), [m, w] = n.useState(""), [P, E] = n.useState({}), [C, U] = n.useState(true), [N, h] = n.useState(false), [O, d] = n.useState(""), [H, k] = n.useState([]), [f, M] = n.useState(""), [S, D] = n.useState(false), [L, $] = n.useState(false), [R, A] = n.useState(false), B = n.useRef(false), v = !!a, g = N || S, u = n.useCallback(async () => {
    var _a;
    if (!t) return;
    const [s, p] = await Promise.all([j.getProject(t), j.listResources(t)]);
    l(s.name), i(((_a = p.find((b) => b.type === "html_deck")) == null ? void 0 : _a.content) || "");
  }, [t]), T = n.useCallback((s) => {
    le(s, x, w, E, d);
  }, []), z = n.useCallback(async () => {
    if (!(!t || N)) {
      h(true), d(""), E({}), w(""), x("outline");
      try {
        await j.runPipeline(t, T), await u();
      } catch (s) {
        d(s instanceof Error ? s.message : "\u751F\u6210\u5931\u8D25");
      } finally {
        h(false);
      }
    }
  }, [t, N, u, T]);
  n.useEffect(() => {
    u().catch((s) => d(s instanceof Error ? s.message : "\u52A0\u8F7D\u5931\u8D25"));
  }, [u]), n.useEffect(() => {
    var _a;
    ((_a = r.state) == null ? void 0 : _a.autoRun) && !B.current && t && (B.current = true, z());
  }, [r.state, t, z]);
  const W = () => {
    a && ie(a, `${o || "deck"}.html`);
  }, X = async () => {
    if (a.trim()) {
      $(true), d("");
      try {
        await re(a, `${o || "deck"}.pptx`);
      } catch (s) {
        d(s instanceof Error ? s.message : "PPT \u5BFC\u51FA\u5931\u8D25");
      } finally {
        $(false);
      }
    }
  }, J = async () => {
    if (a.trim()) {
      A(true), d("");
      try {
        await oe(a, `${o || "deck"}.pptx`);
      } catch (s) {
        d(s instanceof Error ? s.message : "\u53EF\u7F16\u8F91 PPT \u5BFC\u51FA\u5931\u8D25");
      } finally {
        A(false);
      }
    }
  }, G = async () => {
    if (!t || !f.trim() || S) return;
    const s = f.trim();
    M(""), k((p) => [...p, { role: "user", content: s }]), D(true), h(true), d(""), E({}), w(""), x("outline");
    try {
      await j.regenerate(t, s, T), k((p) => [...p, { role: "assistant", content: "\u5DF2\u6839\u636E\u4F60\u7684\u8BF4\u660E\u66F4\u65B0 HTML \u6F14\u793A\u7A3F\u3002" }]), await u();
    } catch (p) {
      const b = p instanceof Error ? p.message : "\u66F4\u65B0\u5931\u8D25";
      k((K) => [...K, { role: "assistant", content: b }]), d(b);
    } finally {
      D(false), h(false);
    }
  };
  return e.jsxs("div", { className: "flex h-full min-h-0 flex-col bg-gray-50", children: [e.jsxs("header", { className: "flex h-12 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(V, { to: se(), className: "text-gray-500 hover:text-gray-800", children: e.jsx(Y, { size: 18 }) }), e.jsx("span", { className: "text-sm font-medium text-gray-900", children: o || "\u52A0\u8F7D\u4E2D\u2026" })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [v && e.jsxs(e.Fragment, { children: [e.jsxs("button", { type: "button", onClick: W, className: "flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs hover:bg-gray-50", children: [e.jsx(Z, { size: 14 }), " HTML"] }), e.jsxs("button", { type: "button", disabled: L || R, onClick: () => void X(), className: "flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs hover:bg-gray-50 disabled:opacity-40", children: [L ? e.jsx(y, { size: 14, className: "animate-spin" }) : e.jsx(I, { size: 14 }), "PPT\uFF08\u56FE\u7247\uFF09"] }), e.jsxs("button", { type: "button", disabled: L || R, onClick: () => void J(), className: "flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs hover:bg-gray-50 disabled:opacity-40", children: [R ? e.jsx(y, { size: 14, className: "animate-spin" }) : e.jsx(I, { size: 14 }), "PPT\uFF08\u53EF\u7F16\u8F91\uFF09"] })] }), !v && !g && e.jsx("button", { type: "button", onClick: () => void z(), className: "rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white hover:bg-gray-700", children: "\u751F\u6210" })] })] }), e.jsxs("div", { className: "flex min-h-0 flex-1", children: [e.jsxs("aside", { className: "flex w-[38%] min-w-[280px] max-w-[480px] flex-col border-r border-gray-200 bg-white", children: [e.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-3", children: [g && e.jsx(_, { stage: c, stageMsg: m, partialByStage: P, expanded: C, onToggleExpanded: () => U((s) => !s), compact: true }), O && e.jsx("div", { className: "rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700", children: O }), H.length === 0 && !g && e.jsx("p", { className: "text-xs text-gray-400", children: "\u751F\u6210\u540E\u53EF\u5728\u6B64\u5FAE\u8C03\u7248\u5F0F\u3001\u8BED\u6C14\u6216\u589E\u5220\u9875\u9762\uFF08\u57FA\u4E8E Guizang HTML \u6A21\u677F\uFF09" }), H.map((s, p) => e.jsx("div", { className: ee("rounded-xl px-3 py-2 text-sm", s.role === "user" ? "ml-8 bg-gray-100 text-gray-900" : "mr-8 bg-gray-50 text-gray-700"), children: s.content }, p))] }), e.jsx("div", { className: "border-t border-gray-100 p-3", children: e.jsxs("div", { className: "flex items-end gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2", children: [e.jsx("textarea", { value: f, onChange: (s) => M(s.target.value), onKeyDown: (s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), G());
  }, placeholder: "\u8C03\u6574\u7248\u5F0F\u6216\u5185\u5BB9\u2026", rows: 2, className: "flex-1 resize-none bg-transparent text-sm outline-none", disabled: g }), e.jsx("button", { type: "button", disabled: !f.trim() || g, onClick: () => void G(), className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white disabled:bg-gray-200", children: S ? e.jsx(y, { size: 14, className: "animate-spin" }) : e.jsx(te, { size: 14 }) })] }) })] }), e.jsxs("main", { className: "relative min-w-0 flex-1 bg-gray-100", children: [g && !v && e.jsxs("div", { className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-gray-100/90 p-8", children: [e.jsx(y, { className: "animate-spin text-gray-400", size: 32 }), e.jsx("div", { className: "w-full max-w-lg", children: e.jsx(_, { stage: c, stageMsg: m, partialByStage: P, expanded: C, onToggleExpanded: () => U((s) => !s) }) }), !P[c] && e.jsx("p", { className: "text-sm text-gray-500", children: ae[c] || "Guizang \u751F\u6210\u4E2D\u2026" })] }), a ? e.jsx("iframe", { title: "Guizang HTML preview", srcDoc: a, className: "h-full w-full border-0 bg-white", sandbox: "allow-scripts allow-same-origin" }) : g ? null : e.jsx("div", { className: "flex h-full items-center justify-center text-sm text-gray-400", children: "HTML \u9884\u89C8\u5C06\u5728\u6B64\u663E\u793A" })] })] })] });
}
export {
  ue as default
};
