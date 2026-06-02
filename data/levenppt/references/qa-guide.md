# 质检指南

生成 `.pptx` 后执行。目标：内容完整、无占位符、无可见溢出/遮挡。

---

## Mode T（Gorden 模板）strict QA

Mode T 在 `build_pptx.py --strict` 下**必须先过容量 lint** 再交付。

### 构建前

- [ ] 每个 `edits[].new_text` 长度 ≤ 对应 slot 的 `max_chars`（detail.json）
- [ ] 同级 `level` 标题长度相近，避免视觉不齐
- [ ] 模板占位词（「工作汇报/」「Question 1」等）已全部替换
- [ ] `selected_slides` 顺序与 deck-plan 一致

### 构建命令

```bash
python3 build_pptx.py templates/<slug>/template.pptx edits.json out.pptx \
  --detail templates/<slug>/detail.json --strict
```

**strict 失败时**：只缩短 `edits.json` 文案，**不改** `selected_slides`、不改 layout。记录被截短的 slot 并在交付时说明。

### chart_data 缺口（Phase 1）

多数 Gorden 页内「图表」为 SmartArt/装饰形状，**不能**用 `--chart-data` 更新。

| 情况 | 处理 |
|------|------|
| `data_charts` 为空或 shape 无原生 chart | 关键数字写入邻近**文本槽**（如大数字区、小标题） |
| 页含原生 chart（detail 标注 `has_chart`） | 可读 [Gorden chart-editing.md](../GordenPPTSkill/references/chart-editing.md)；Phase 1 可仍用文本替代 |

### 构建后

1. **内容校验** — 解压 XML 或 extract-text，确认无 lorem/占位符
2. **视觉截图**（有 soffice 时）— `render_slides.py` → 查溢出/遮挡
3. **失败回溯** — 回到 `edits.json` 缩短文字；结构错误则回到 `deck-plan.json`

---

## 第 1 步：内容校验

### 方法 A — extract-text（若环境有）

```bash
extract-text output/presentation.pptx
extract-text output/presentation.pptx | grep -iE '\bXXX\b|lorem|ipsum|TODO|\[insert|placeholder|示例文字|待补充'
```

### 方法 B — 解压 XML（通用 fallback）

```bash
for i in $(seq 1 20); do
  f="ppt/slides/slide${i}.xml"
  unzip -p output/presentation.pptx "$f" 2>/dev/null | sed 's/<a:t>/\n/g; s/<[^>]*>//g' | grep -v '^$' && echo "--- slide $i ---"
done
```

### 检查项

- [ ] 每页有标题或等效主文案
- [ ] 要点未被截断（对比 schema 原文）
- [ ] 无占位符 / lorem / TODO
- [ ] 语言与用户要求一致
- [ ] 页数与 schema 一致

**失败** → 改 `schema.json` 对应 slide/element → 重新渲染。

---

## 第 2 步：视觉截图

### 转 PDF + JPG

```bash
# macOS / Linux（LibreOffice）
soffice --headless --convert-to pdf --outdir /tmp output/presentation.pptx

# 或 macOS Microsoft PowerPoint 不可用时的备选
python3 -c "print('skip if no soffice')" 2>/dev/null

pdftoppm -jpeg -r 150 /tmp/presentation.pdf /tmp/slide
ls /tmp/slide-*.jpg
```

若无 `soffice`：跳过截图，仅做内容校验 + schema 边界检查（见下），并在交付时注明「未做视觉截图 QA」。

### 视觉检查表

| 问题 | 严重度 | 处理 |
|------|--------|------|
| 文字溢出框 | 高 | 增大 `h` 或减小 `fontSize` |
| 非预期重叠 | 高 | 调整 x/y/w/h |
| 文字被裁切 | 高 | 同上 |
| 标题间距过小 | 中 | 调整 y 坐标 |
| 图标/文字对比度低 | 中 | 换色 |
| 字体不统一 | 低 | 可选 |
| 1px 对齐偏差 | 忽略 | 不修复 |

用 Read 工具查看 `/tmp/slide-*.jpg` 逐页检查。

### 无截图时的几何校验

对 schema 中同一 slide 的任意两 element A、B：

- 水平不重叠：`A.x + A.w ≤ B.x` 或 `B.x + B.w ≤ A.x` 或 `A.y + A.h ≤ B.y`
- 边界：`x ≥ 0`, `y ≥ 0`, `x + w ≤ 10`, `y + h ≤ 5.625`

---

## 第 3 步：修复循环

1. 定位 `schema.json` 中 slide index + element
2. 修改坐标、尺寸或文案
3. `node generate.mjs`
4. **重新执行第 1–2 步全部命令**（PDF 必须重转）
5. 重点复查曾出问题的页

**回溯决策**：

| 问题类型 | 改什么 |
|---------|--------|
| 溢出、配色、坐标 | schema 或 render 脚本 |
| 结构混乱、内容错误 | 回到阶段 2 重规划 |
| 图标全空白 | 检查 icon 名称 + sharp 安装 |
| 文件损坏打不开 | 检查颜色是否含 `#` |

**停止条件**：一轮修复后无新高/中严重度问题 → 停止。

---

## 第 4 步：交付

- 将 `.pptx` 放到用户指定目录，默认 `output/presentation.pptx`
- 报告：路径、页数、标题列表、theme、QA 结果

---

## 常见问题速查

### 文字溢出

```json
{ "h": 0.4, "fontSize": 18 }  →  { "h": 0.8, "fontSize": 16 }
```

或缩短文案（优先）。

### 标题页背景未铺满

```json
{ "kind": "shape", "shape": "RECTANGLE", "x": 0, "y": 0, "w": 10, "h": 5.625, "fill": "1A1A2E" }
```

### 图标空白

```bash
node -e "import('react-icons/fa').then(fa => console.log(typeof fa.FaCheckCircle))"
```

### 配色含 # 导致损坏

```bash
grep -n '"#' generate.mjs schema.json
```

全部去掉 `#` 前缀。
