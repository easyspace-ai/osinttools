# Mode T：Gorden 模板工作流

> **Mode T（Template）** 为默认路径，用于商业级排版质量。依赖 `data/levenppt/GordenPPTSkill/` 内置模板与 `build_pptx.py`。

⚠️ **Gorden 许可**：模板仅供**个人学习与研究**，Phase 1 禁止商业用途。详见 Gorden `NOTICE.md` / `LICENSE`。

---

## 前置：自动更新

在 GordenPPTSkill 目录执行一次：

```bash
cd /Users/leven/space/easy/osinttools/data/levenppt/GordenPPTSkill
python3 scripts/apply_update.py
```

---

## 六步流程（Mode A 精简版）

```
INDEX → intro → detail → edits → build_pptx.py → render_slides.py
```

| 步 | 动作 | 产物 |
|----|------|------|
| 1 | 读 `templates/INDEX.md`，按场景/主色/密度筛 2–3 个 slug | 候选模板 |
| 2 | 读 `templates/<slug>/intro.md` | 版式能力、禁忌页 |
| 3 | 读 `templates/<slug>/detail.json` 的 `pages[].use_for` / `role` / `text_slots` | 选页 + slot_id |
| 4 | 写 `deck-plan.json`（可选）再写 `edits.json` | 中间规划 + 槽位填充 |
| 5 | `build_pptx.py ... --detail ... --strict` | `.pptx` |
| 6 | （可选）`render_slides.py` 出 PNG 预览 | 质检截图 |

---

## edits.json 最小结构

```json
{
  "template_slug": "report-massive-reports",
  "selected_slides": [16, 21, 14],
  "edits": [
    { "slide": 16, "slot_id": "s16_sh16_p0r2", "new_text": "AI中转站可行性" }
  ]
}
```

---

## build_pptx 命令

```bash
python3 scripts/build_pptx.py \
  templates/<slug>/template.pptx \
  /path/to/edits.json \
  /path/to/output.pptx \
  --detail templates/<slug>/detail.json \
  --strict
```

- **`--strict`**：溢出/容量超限则拒绝保存；**只缩短文案，不改 layout**。
- **chart_data**：Phase 1 若模板 chart 无法更新，用文本槽位写关键数字（见 qa-guide Mode T 节）。

---

## 选页原则

1. 读 `page_roles`：`cover` 为空则**不要硬凑封面**，从第一张内容页开始。
2. 按 `use_for` / `layout` 匹配叙事意图（SWOT、金字塔、对比、多段列表）。
3. 每页替换**全部**占位示例文字；遵守 `max_chars` / `chars_per_line` / `max_lines`。
4. 一份 deck 通常 **10–25 页**，从 37+ 页素材库中挑选，不全用。

---

## 渲染预览（可选）

```bash
python3 scripts/render_slides.py output.pptx output/preview --dpi 144
```

需要 `soffice`（LibreOffice）。无则跳过，交付时注明「未做视觉截图 QA」。

---

## 与 Mode P 的关系

| 条件 | 路由 |
|------|------|
| 要商业级排版、有合适 Gorden 模板 | **Mode T**（本文件） |
| 无合适模板、用户要全自定义、或 Gorden strict 反复失败 | **Mode P**（PptxGenJS，见 `slide-schema.md`） |
| 用户明确「不用模板 / 原创」 | Mode P 或 Gorden Mode C |
