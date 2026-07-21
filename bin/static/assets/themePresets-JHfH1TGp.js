import { Q as g } from "./main-DXuYf9zK.js";
const b = "/api/pptxgenjs";
async function s(e, t) {
  const r = new Headers(t == null ? void 0 : t.headers);
  (t == null ? void 0 : t.body) && !(t.body instanceof FormData) && !r.has("Content-Type") && r.set("Content-Type", "application/json");
  const a = await fetch(`${b}${e}`, g({ ...t, headers: r }));
  if (!a.ok) {
    const o = await a.json().catch(() => ({}));
    throw new Error(o.detail || a.statusText || "Request failed");
  }
  return a.json();
}
async function f(e, t, r) {
  const a = new Headers(t.headers);
  t.body && !a.has("Content-Type") && a.set("Content-Type", "application/json");
  const o = await fetch(`${b}${e}`, g({ ...t, headers: a }));
  if (!o.ok || !o.body) {
    const F = await o.json().catch(() => ({}));
    throw new Error(F.detail || "Pipeline failed");
  }
  const y = o.body.getReader(), _ = new TextDecoder();
  let i = "", c;
  for (; ; ) {
    const { done: F, value: m } = await y.read();
    if (F) break;
    i += _.decode(m, { stream: true });
    const l = i.split(`

`);
    i = l.pop() || "";
    for (const u of l) {
      const h = u.trim();
      if (!h.startsWith("data:")) continue;
      const p = h.slice(5).trim();
      if (p === "[DONE]") return c;
      try {
        const n = JSON.parse(p);
        r(n), n.stage === "done" && n.result && (c = n.result);
      } catch {
      }
    }
  }
  return c;
}
const k = { listProjects: () => s("/projects"), getProject: (e) => s(`/projects/${e}`), listResources: (e) => s(`/projects/${e}/resources`), getChat: (e) => s(`/projects/${e}/chat`).then((t) => t.messages || []), saveChat: (e, t) => s(`/projects/${e}/chat`, { method: "PUT", body: JSON.stringify({ messages: t }) }), createProject: (e) => s("/projects", { method: "POST", body: JSON.stringify(e) }), runPipeline: (e, t) => f(`/projects/${e}/pipeline/run`, { method: "POST" }, t), regenerate: (e, t, r) => f(`/projects/${e}/pipeline/regenerate`, { method: "POST", body: JSON.stringify({ instruction: t }) }, r) }, x = { "midnight-exec": { label: "\u5348\u591C\u5546\u52A1", preset: "midnight-exec", primary: "1E2761", secondary: "CADCFC", accent: "F96167", bg_dark: "1E2761", bg_light: "F5F7FA", text_dark: "2C3E50", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "tech-dark": { label: "\u79D1\u6280\u6DF1\u8272", preset: "tech-dark", primary: "0D1117", secondary: "58A6FF", accent: "3FB950", bg_dark: "0D1117", bg_light: "F6F8FA", text_dark: "24292F", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "coral-energy": { label: "\u73CA\u745A\u6D3B\u529B", preset: "coral-energy", primary: "F96167", secondary: "F9E795", accent: "2F3C7E", bg_dark: "2F3C7E", bg_light: "FFFAF0", text_dark: "2F3C7E", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "forest-calm": { label: "\u68EE\u6797\u9759\u7A46", preset: "forest-calm", primary: "2C5F2D", secondary: "97BC62", accent: "40916C", bg_dark: "1B4332", bg_light: "F1FAEE", text_dark: "1B4332", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "teal-trust": { label: "\u9752\u7EFF\u4FE1\u8D56", preset: "teal-trust", primary: "028090", secondary: "02C39A", accent: "F4A261", bg_dark: "023047", bg_light: "F8F9FA", text_dark: "023047", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "minimal-white": { label: "\u6781\u7B80\u767D", preset: "minimal-white", primary: "333333", secondary: "666666", accent: "007AFF", bg_dark: "1C1C1E", bg_light: "FFFFFF", text_dark: "333333", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" } }, j = { themes: x }, d = j.themes, E = Object.entries(d).map(([e, t]) => ({ value: e, label: t.label }));
function w(e, t) {
  const r = e || (t == null ? void 0 : t.preset) || "midnight-exec";
  return { ...d[r] || d["midnight-exec"], ...t, preset: r };
}
export {
  E as T,
  k as p,
  w as r
};
