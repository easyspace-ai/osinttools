import { Q as f } from "./main-DrzwT8HI.js";
const p = "/api/studio/ohmyppt";
async function c(t, e) {
  const s = new Headers(e == null ? void 0 : e.headers);
  (e == null ? void 0 : e.body) && !(e.body instanceof FormData) && !s.has("Content-Type") && s.set("Content-Type", "application/json");
  const n = await fetch(`${p}${t}`, f({ ...e, headers: s })), o = await n.text(), r = n.headers.get("content-type") || "", i = o.trimStart().toLowerCase().startsWith("<!doctype") || o.trimStart().startsWith("<html");
  if (!n.ok) {
    if (r.includes("json") && !i) try {
      const a = JSON.parse(o);
      throw new Error(a.detail || a.error || n.statusText || "Request failed");
    } catch (a) {
      if (a instanceof Error && a.message !== n.statusText) throw a;
    }
    throw new Error(i ? `\u63A5\u53E3 ${t} \u4E0D\u53EF\u7528\uFF08\u8FD4\u56DE\u4E86 HTML\uFF0C\u8BF7\u786E\u8BA4 backend \u4E0E ohmyppt \u670D\u52A1\u5DF2\u66F4\u65B0\u5E76\u91CD\u542F\uFF09` : o.slice(0, 200) || n.statusText || "Request failed");
  }
  if (i || !r.includes("json")) throw new Error(`\u63A5\u53E3 ${t} \u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94\uFF0C\u8BF7\u786E\u8BA4 backend \u4E0E ohmyppt \u670D\u52A1\u5DF2\u90E8\u7F72`);
  return JSON.parse(o);
}
function S(t) {
  const e = t.split(`
`);
  let s = "", n = "";
  for (const o of e) o.startsWith("event:") && (s = o.slice(6).trim()), o.startsWith("data:") && (n = o.slice(5).trim());
  if (!n || n === "[DONE]") return null;
  try {
    const o = JSON.parse(n);
    if (o.type) return o;
    if (s) return { type: s, payload: o };
  } catch {
    return null;
  }
  return null;
}
async function y(t, e, s) {
  const n = new Headers(e.headers);
  n.has("Accept") || n.set("Accept", "text/event-stream");
  const o = await fetch(t, f({ ...e, headers: n }));
  if (!o.ok || !o.body) {
    const d = await o.text().catch(() => ""), h = d.trimStart().toLowerCase().startsWith("<!doctype");
    throw new Error(h ? "\u751F\u6210\u63A5\u53E3\u4E0D\u53EF\u7528\uFF08\u8FD4\u56DE\u4E86 HTML\uFF0C\u8BF7\u786E\u8BA4 backend \u4E0E ohmyppt \u670D\u52A1\u5DF2\u66F4\u65B0\uFF09" : (() => {
      try {
        const l = JSON.parse(d);
        return l.detail || l.error || "Generation stream failed";
      } catch {
        return d.slice(0, 200) || "Generation stream failed";
      }
    })());
  }
  const r = o.body.getReader(), i = new TextDecoder();
  let a = "";
  for (; ; ) {
    const { done: d, value: h } = await r.read();
    if (d) break;
    a += i.decode(h, { stream: true });
    const l = a.split(`

`);
    a = l.pop() || "";
    for (const w of l) {
      const u = S(w.trim());
      u && s(u);
    }
  }
}
const b = { listStyles: () => c("/styles").then((t) => t.styles), listSessions: () => c("/sessions").then((t) => t.sessions), createSession: (t) => c("/sessions", { method: "POST", body: JSON.stringify(t) }), getSession: (t) => c(`/sessions/${t}`), getMessages: async (t) => {
  try {
    return await c(`/sessions/${t}/messages`).then((e) => e.messages);
  } catch {
    return [];
  }
}, updateSessionTitle: (t, e) => c(`/sessions/${t}`, { method: "PATCH", body: JSON.stringify({ title: e }) }), deleteSession: (t) => c(`/sessions/${t}`, { method: "DELETE" }), streamGenerate: (t, e, s) => y(`${p}/sessions/${t}/generate`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(s ?? {}) }, e), streamSubscribe: (t, e) => y(`${p}/sessions/${t}/generate/stream`, { method: "GET" }, e), getPageHtml: async (t, e) => {
  const s = await fetch(`${p}/sessions/${t}/pages/${e}`, f());
  if (!s.ok) throw new Error("Page not found");
  return s.text();
}, exportZip: async (t, e = "deck.zip") => {
  const s = await fetch(`${p}/sessions/${t}/export`, f({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ format: "zip" }) }));
  if (!s.ok) {
    const i = await s.json().catch(() => ({}));
    throw new Error(i.detail || i.error || "Export failed");
  }
  const n = await s.blob(), o = URL.createObjectURL(n), r = document.createElement("a");
  r.href = o, r.download = e, r.click(), URL.revokeObjectURL(o);
}, exportPptx: async (t, e = "deck.pptx", s) => {
  const n = await b.fetchPptxBlob(t, s), o = URL.createObjectURL(n), r = document.createElement("a");
  r.href = o, r.download = e, r.click(), URL.revokeObjectURL(o);
}, fetchPptxBlob: async (t, e) => {
  const s = await fetch(`${p}/sessions/${t}/export`, f({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ format: "pptx", image_only: (e == null ? void 0 : e.image_only) ?? false, embed_fonts: e == null ? void 0 : e.embed_fonts }) }));
  if (!s.ok) {
    const n = await s.json().catch(() => ({}));
    throw new Error(n.detail || n.error || "Export failed");
  }
  return s.blob();
} }, g = [{ value: "pptxgenjs", label: "\u539F\u751Fppt", hint: "\u53EF\u7F16\u8F91 PPTX" }, { value: "ohmyppt", label: "HTML\u8F6Cppt", hint: "\u7CBE\u7F8E HTML \u6F14\u793A\u7A3F" }];
function x(t) {
  return t === "ohmyppt" || t === "pptxgenjs";
}
const T = "/ppt";
function $() {
  return typeof window > "u" ? false : /studio\.html$/i.test(window.location.pathname);
}
function m(t) {
  const e = t.startsWith("/") ? t : `/${t}`;
  return $() ? e === "/" ? "/" : e : `${T}${e}`;
}
function O(t, e) {
  const s = m(`/p/${t}`);
  if (!e) return s;
  const n = s.includes("?") ? "&" : "?";
  return `${s}${n}engine=${e}`;
}
function P() {
  return m("/");
}
export {
  g as P,
  P as a,
  x as i,
  b as o,
  O as s
};
