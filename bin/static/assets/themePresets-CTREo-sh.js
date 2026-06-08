import { w as b } from "./main-CO1ACS3f.js";
const y = "/api/pptxgenjs";
async function n(e, t) {
  const r = b(), a = new Headers(t == null ? void 0 : t.headers);
  r && a.set("Authorization", `Bearer ${r}`), (t == null ? void 0 : t.body) && !(t.body instanceof FormData) && !a.has("Content-Type") && a.set("Content-Type", "application/json");
  const o = await fetch(`${y}${e}`, { ...t, headers: a });
  if (!o.ok) {
    const s = await o.json().catch(() => ({}));
    throw new Error(s.detail || o.statusText || "Request failed");
  }
  return o.json();
}
async function g(e, t, r) {
  const a = b(), o = new Headers(t.headers);
  a && o.set("Authorization", `Bearer ${a}`), t.body && !o.has("Content-Type") && o.set("Content-Type", "application/json");
  const s = await fetch(`${y}${e}`, { ...t, headers: o });
  if (!s.ok || !s.body) {
    const d = await s.json().catch(() => ({}));
    throw new Error(d.detail || "Pipeline failed");
  }
  const _ = s.body.getReader(), m = new TextDecoder();
  let c = "", F;
  for (; ; ) {
    const { done: d, value: u } = await _.read();
    if (d) break;
    c += m.decode(u, { stream: true });
    const h = c.split(`

`);
    c = h.pop() || "";
    for (const k of h) {
      const p = k.trim();
      if (!p.startsWith("data:")) continue;
      const f = p.slice(5).trim();
      if (f === "[DONE]") return F;
      try {
        const i = JSON.parse(f);
        r(i), i.stage === "done" && i.result && (F = i.result);
      } catch {
      }
    }
  }
  return F;
}
const E = { listProjects: () => n("/projects"), getProject: (e) => n(`/projects/${e}`), listResources: (e) => n(`/projects/${e}/resources`), getChat: (e) => n(`/projects/${e}/chat`).then((t) => t.messages || []), saveChat: (e, t) => n(`/projects/${e}/chat`, { method: "PUT", body: JSON.stringify({ messages: t }) }), createProject: (e) => n("/projects", { method: "POST", body: JSON.stringify(e) }), runPipeline: (e, t) => g(`/projects/${e}/pipeline/run`, { method: "POST" }, t), regenerate: (e, t, r) => g(`/projects/${e}/pipeline/regenerate`, { method: "POST", body: JSON.stringify({ instruction: t }) }, r) }, x = { "midnight-exec": { label: "\u5348\u591C\u5546\u52A1", preset: "midnight-exec", primary: "1E2761", secondary: "CADCFC", accent: "F96167", bg_dark: "1E2761", bg_light: "F5F7FA", text_dark: "2C3E50", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "tech-dark": { label: "\u79D1\u6280\u6DF1\u8272", preset: "tech-dark", primary: "0D1117", secondary: "58A6FF", accent: "3FB950", bg_dark: "0D1117", bg_light: "F6F8FA", text_dark: "24292F", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "coral-energy": { label: "\u73CA\u745A\u6D3B\u529B", preset: "coral-energy", primary: "F96167", secondary: "F9E795", accent: "2F3C7E", bg_dark: "2F3C7E", bg_light: "FFFAF0", text_dark: "2F3C7E", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "forest-calm": { label: "\u68EE\u6797\u9759\u7A46", preset: "forest-calm", primary: "2C5F2D", secondary: "97BC62", accent: "40916C", bg_dark: "1B4332", bg_light: "F1FAEE", text_dark: "1B4332", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "teal-trust": { label: "\u9752\u7EFF\u4FE1\u8D56", preset: "teal-trust", primary: "028090", secondary: "02C39A", accent: "F4A261", bg_dark: "023047", bg_light: "F8F9FA", text_dark: "023047", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" }, "minimal-white": { label: "\u6781\u7B80\u767D", preset: "minimal-white", primary: "333333", secondary: "666666", accent: "007AFF", bg_dark: "1C1C1E", bg_light: "FFFFFF", text_dark: "333333", text_light: "FFFFFF", font_heading: "Microsoft YaHei", font_body: "Microsoft YaHei" } }, j = { themes: x }, l = j.themes, w = Object.entries(l).map(([e, t]) => ({ value: e, label: t.label }));
function A(e, t) {
  const r = e || (t == null ? void 0 : t.preset) || "midnight-exec";
  return { ...l[r] || l["midnight-exec"], ...t, preset: r };
}
export {
  w as T,
  E as p,
  A as r
};
