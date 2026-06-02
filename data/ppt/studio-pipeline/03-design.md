# Studio Pipeline — Design

为已审定的大纲分配视觉呈现方案（guizang 横向翻页 deck 风格）。

## 任务

输出 **JSON only**：

```json
{
  "theme": "magazine|swiss",
  "color_theme": "ink-classic|swiss-ikb|...",
  "slides": [
    {
      "id": "s01",
      "layout": "hero|section|bullets|data_hero|image_grid|quote",
      "title": "与 outline 一致",
      "visual_notes": "排版说明"
    }
  ]
}
```

## layout 选用

- hero：封面/章节幕封
- section：章节过渡
- bullets：要点列举
- data_hero：单一关键数字
- image_grid：多图（无图用占位色块）
- quote：金句/结论

## 默认

- theme: magazine，color_theme: ink-classic
- 页间节奏：hero 与 bullets 交替，避免连续 3 页同 layout
