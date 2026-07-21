import { Q as f } from "./main-DXuYf9zK.js";
const m = "/api/ppthtml";
async function a(e, t) {
  const o = new Headers(t == null ? void 0 : t.headers);
  (t == null ? void 0 : t.body) && !(t.body instanceof FormData) && !o.has("Content-Type") && o.set("Content-Type", "application/json");
  const r = await fetch(`${m}${e}`, f({ ...t, headers: o }));
  if (!r.ok) {
    const s = await r.json().catch(() => ({}));
    throw new Error(s.detail || r.statusText || "Request failed");
  }
  return r.json();
}
async function u(e, t, o) {
  const r = new Headers(t.headers);
  t.body && !r.has("Content-Type") && r.set("Content-Type", "application/json");
  const s = await fetch(`${m}${e}`, f({ ...t, headers: r }));
  if (!s.ok || !s.body) {
    const p = await s.json().catch(() => ({}));
    throw new Error(p.detail || "Pipeline failed");
  }
  const P = s.body.getReader(), j = new TextDecoder();
  let c = "", i;
  for (; ; ) {
    const { done: p, value: w } = await P.read();
    if (p) break;
    c += j.decode(w, { stream: true });
    const d = c.split(`

`);
    c = d.pop() || "";
    for (const T of d) {
      const l = T.trim();
      if (!l.startsWith("data:")) continue;
      const h = l.slice(5).trim();
      if (h === "[DONE]") return i;
      try {
        const n = JSON.parse(h);
        o(n), n.stage === "done" && n.result && (i = n.result);
      } catch {
      }
    }
  }
  return i;
}
const b = { listProjects: () => a("/projects"), getProject: (e) => a(`/projects/${e}`), listResources: (e) => a(`/projects/${e}/resources`), createProject: (e) => a("/projects", { method: "POST", body: JSON.stringify(e) }), runPipeline: (e, t) => u(`/projects/${e}/pipeline/run`, { method: "POST" }, t), regenerate: (e, t, o) => u(`/projects/${e}/pipeline/regenerate`, { method: "POST", body: JSON.stringify({ instruction: t }) }, o) }, $ = "/ppthtml";
function y(e) {
  const t = e.startsWith("/") ? e : `/${e}`;
  return `${$}${t}`;
}
function O(e) {
  return y(`/p/${e}`);
}
function g() {
  return y("/");
}
export {
  O as a,
  g as b,
  b as p
};
