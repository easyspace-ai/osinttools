function a(e) {
  return e.name.toLowerCase().endsWith(".md") ? e.size <= 0 ? "\u6587\u4EF6\u4E3A\u7A7A" : e.size > 5 * 1024 * 1024 ? "\u6587\u4EF6\u8D85\u8FC7 5MB" : null : "\u4EC5\u652F\u6301 .md \u6587\u4EF6";
}
async function i(e) {
  return new Promise((n, t) => {
    const r = new FileReader();
    r.onload = () => n(String(r.result || "")), r.onerror = () => t(new Error("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25")), r.readAsText(e);
  });
}
export {
  i as r,
  a as v
};
