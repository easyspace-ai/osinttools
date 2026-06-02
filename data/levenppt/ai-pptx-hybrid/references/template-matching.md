# fit_score 模板匹配算法

Hybrid 模式用 `score_slides.py` 为 deck-plan 每一页从 `detail.json` 全部候选页中排名，替代硬编码 `report-layout-map.md`。

---

## 输入

- `detail.json` — Gorden 模板页元数据（`layout`, `use_for`, `text_slots`）
- `deck-plan.json` — 每页 `intent`, `headline`, `bullets`, `template_slide`（原建议，可被覆盖）

---

## 评分公式

```
fit_score = 0.30 × semantic + 0.35 × slot_fit + 0.25 × capacity − penalty
```

 clamp 到 `[0, 1]`。

### 1. semantic（语义匹配）

- 从 `intent` 查 `INTENT_KEYWORDS` 表（见 `score_slides.py`）
- 用 headline + bullets 正则推断 **effective_intents**（如「合规障碍」→ 加权 `risk_list`）
- 关键词命中 `layout` + `use_for` 的比例
- **惩罚**：declared `swot` 但版式无 SWOT 字样 → ×0.3；`risk_list` 主导但版式是 SWOT → 低分

### 2. slot_fit（槽位数量）

- 统计可编辑 **小标题** + **正文段落/短句** 对数
- 与 `len(bullets)` 比较：
  - `pairs ≥ bullets` → 1.0
  - 差 1 → 0.85
  - 半数可用 → 0.65

### 3. capacity（容量）

- 视觉宽度：`CJK=1`, `ASCII=0.5`, 空格=0.35
- `content_vw / sum(max_chars)`：
  - ≤0.7 → 1.0
  - ≤1.0 → 0.85
  - ≤1.3 → 0.55

### 4. penalty

- 装饰槽占比高：最多 −0.15
- `shape_caution_pages`：−0.05

---

## 阈值与模式

| fit_score | `recommended_mode` | 行为 |
|-----------|-------------------|------|
| ≥ 0.6 | `template` | 采用最高分 `template_slide` |
| < 0.6, bullets ≤6 | `preset` | 建议 Mode P `layout-presets.json` |
| < 0.6, bullets >6 | `split` | 建议拆成 2 页 |

---

## 输出字段（score-report.json）

```json
{
  "order": 3,
  "intent": "swot",
  "original_template_slide": 14,
  "recommended_template_slide": 4,
  "fit_score": 0.72,
  "re_picked": true,
  "effective_intents": {"swot": 1.0, "risk_list": 0.8},
  "top_candidates": [
    {"template_slide": 4, "layout": "…", "fit_score": 0.72, "breakdown": {...}}
  ]
}
```

---

## 典型修正案例

| 问题 | 原映射 | Hybrid 倾向 |
|------|--------|-------------|
| 法律障碍用 SWOT 四象限 | slide 14 | slide 4「存在问题与不足」或 slide 10 |
| 内容超长 | 任意 | 降分 → preset `bullets_dense` 或 split |
| 引语页 | 错选列表页 | slide 35 树状/长正文槽 |

---

## CLI

```bash
python3 scripts/score_slides.py \
  --detail ../GordenPPTSkill/templates/report-massive-reports/detail.json \
  --deck-plan ../../output/gorden/deck-plan.json \
  --out ../../output/hybrid/score-report.json \
  --revise-plan ../../output/hybrid/deck-plan-revised.json
```
