# 品牌与行业模板

用户选择模板时，将对应 preset 写入 `meta.theme`，并按需覆盖色值。

---

## 使用方式

1. 用户说「科技风」「投资路演」「公司品牌蓝」→ 查下表
2. 写入 schema：

```json
"theme": {
  "preset": "tech-dark",
  "primary": "0D1117",
  "secondary": "58A6FF",
  "accent": "3FB950",
  "bg_dark": "0D1117",
  "bg_light": "F6F8FA",
  "text_dark": "24292F",
  "text_light": "FFFFFF",
  "font_heading": "Microsoft YaHei",
  "font_body": "Microsoft YaHei"
}
```

3. 装饰约定一并应用（顶栏 / 左边线 / 卡片风格）

---

## 内置 preset

### midnight-exec — 高端商务 / 投资路演

| 角色 | 色值 |
|------|------|
| primary | 1E2761 |
| secondary | CADCFC |
| accent | F96167 |
| bg_dark | 1E2761 |
| bg_light | F5F7FA |

装饰：封面全深色；内容页顶部 0.9" 主色条；数字用 accent。

### tech-dark — 科技产品 / 开发者

| 角色 | 色值 |
|------|------|
| primary | 0D1117 |
| secondary | 58A6FF |
| accent | 3FB950 |
| bg_dark | 0D1117 |
| bg_light | F6F8FA |

装饰：代码风 monospace 仅用于数据；图标用 `Hi*` / `Bi*` 系列。

### coral-energy — 创业路演 / 活动

| 角色 | 色值 |
|------|------|
| primary | F96167 |
| secondary | F9E795 |
| accent | 2F3C7E |
| bg_dark | 2F3C7E |
| bg_light | FFFAF0 |

装饰：大色块 split 页；stat 用大号数字。

### forest-calm — ESG / 医疗 / 可持续

| 角色 | 色值 |
|------|------|
| primary | 2C5F2D |
| secondary | 97BC62 |
| accent | F5F5DC |
| bg_dark | 1B4332 |
| bg_light | F1FAEE |

### teal-trust — 金融 / 医疗信任感

| 角色 | 色值 |
|------|------|
| primary | 028090 |
| secondary | 02C39A |
| accent | F4A261 |
| bg_dark | 023047 |
| bg_light | F8F9FA |

### minimal-white — 学术 / 极简

| 角色 | 色值 |
|------|------|
| primary | 333333 |
| secondary | 666666 |
| accent | 007AFF |
| bg_dark | 1C1C1E |
| bg_light | FFFFFF |

装饰：少图标；左对齐；大量留白。

---

## 行业 → 推荐布局节奏

| 行业 | 推荐 slide 组合 |
|------|----------------|
| AI 产品路演 | title → agenda → content×2 → chart → grid → timeline → quote → closing |
| 商业计划书 | title → agenda → split×2 → chart → comparison → grid → closing |
| 技术分享 | title → content → split → chart → comparison → quote → closing |
| 季度汇报 | title → stat/chart → content → chart → timeline → closing |
| 培训课件 | title → agenda → content → grid → comparison → content → closing |

---

## 自定义品牌（示例占位）

在此追加公司模板；复制 preset 块并改色值。

### example-corp — 示例公司

```json
{
  "preset": "example-corp",
  "primary": "003DA5",
  "secondary": "00A3E0",
  "accent": "FF6900",
  "bg_dark": "003DA5",
  "bg_light": "FFFFFF",
  "font_heading": "Arial",
  "font_body": "Arial"
}
```

Logo：若有 `logo.png`，在 `title` slide 加 `{ "kind": "image", "path": "assets/logo.png", "x": 0.4, "y": 0.3, "w": 1.5, "h": 0.5 }`。

---

## 风格 × 配色矩阵

| 用户说 | preset |
|--------|--------|
| 商务、正式、B 端 | midnight-exec |
| 科技、SaaS、AI | tech-dark |
| 创业、融资、活泼 | coral-energy |
| 环保、健康 | forest-calm / teal-trust |
| 学术、论文答辩 | minimal-white |
| 瑞士、极简、编辑 | minimal-white + 高对比 accent |

---

## 与 studio / guizang 项目对齐

本仓库 `frontend/src/studio/lib/exportPptx.ts` 使用 magazine 主题（accent `C41E3A`）。若用户从 Studio 导出后继续编辑，可选用：

```json
{
  "preset": "studio-magazine",
  "primary": "1A1A2E",
  "secondary": "C41E3A",
  "accent": "C41E3A",
  "bg_dark": "1A1A2E",
  "bg_light": "F1EFEA",
  "text_dark": "0A0A0B",
  "text_light": "FFFFFF"
}
```

---

## 自有模板（Phase 3）

商用模板 scaffold 见 [own-templates.md](own-templates.md)。当前注册：

| Slug | 状态 |
|------|------|
| `osint-report` | scaffold — 待 `template.pptx` |

Phase 1 仍用 Gorden `report-massive-reports`；Phase 3 切换至 `templates/osint-report/` 后更新 report-layout-map。
