# Post-build 模板微调（Surgery）

Hybrid 在 `build_pptx.py --strict` 成功后，可对输出 deck 做 **有限、可逆** 的 python-pptx 后处理。

> **原则**：只隐藏/清理，不改主题字体颜色；不任意移动形状。

---

## 允许的操作

### 1. `hide_shape`

隐藏未使用的列/卡片装饰形状（按 `detail.json` 的 `shape_id`）。

```json
{"op": "hide_shape", "output_slide": 3, "shape_id": 88}
```

- `output_slide`：输出 deck 中的 1-based 页序（非原 template 编号）
- 实现：XML `hidden=1` + 零尺寸 fallback

### 2. `clear_slot`

清除未被 `edits.json` 填充的占位文本。

```json
{"op": "clear_slot", "output_slide": 3, "slot_id": "s14_sh88_p0r0", "template_slide": 14}
```

- 需 `--detail` 解析 `slot_id → shape_id`
- 只清空 run 文本，保留格式

### 3. `widen_textbox`（可选，慎用）

文本框宽高各扩 **≤10%**。

```json
{"op": "widen_textbox", "output_slide": 5, "shape_id": 39, "width_pct": 0.05, "height_pct": 0.03}
```

**风险**：
- 可能与邻近形状重叠
- strict 已拒的溢出不应靠放大绕过 — 优先缩短文案

---

## 禁止的操作

- 修改字体、颜色、主题
- 任意平移/旋转形状
- 删除 slide 或合并形状
- 修改 chart 数据（Phase 1 仍用文本槽）

---

## surgery.json 格式

```json
{
  "surgery": [
    {"op": "hide_shape", "output_slide": 3, "shape_id": 92},
    {"op": "clear_slot", "output_slide": 3, "slot_id": "s4_sh59_p0r0", "template_slide": 4}
  ]
}
```

也可在 `deck-plan.json` 每页加：

```json
{"order": 3, "surgery": [{"op": "hide_shape", "shape_id": 92}]}
```

（`build_hybrid.py` 合并时补全 `output_slide`）

---

## CLI

```bash
python3 scripts/surgery.py output/deck.pptx \
  --ops surgery.json \
  --detail ../GordenPPTSkill/templates/report-massive-reports/detail.json \
  --report surgery-report.json
```

---

## 何时需要 surgery

| 场景 | 操作 |
|------|------|
| 4 要点内容但模板有 6 列 | hide 多余 2 列 shape |
| re-pick 后残留 SWOT 标签槽 | clear_slot |
| 轻微溢出且 strict 已通过 | widen_textbox ≤5%（最后手段） |
