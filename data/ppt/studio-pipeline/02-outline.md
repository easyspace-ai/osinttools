# Studio Pipeline — Outline

基于已理解的知识点图，组织**页级演示大纲**。MD 内容来自 W6，只重组呈现，不增删事实。

## 任务

输出 **JSON only**：

```json
{
  "title": "演示标题",
  "perspective": "executive|technical|general",
  "slides": [
    {
      "id": "s01",
      "title": "页标题",
      "purpose": "本页目的",
      "bullets": ["要点1", "要点2"],
      "source_refs": ["kp1"]
    }
  ]
}
```

## 规则

- 页数：短 MD 5-10 页，中等 10-18 页，长文 15-25 页
- 叙事弧：钩子 → 背景 → 主体 → 转折 → 收束
- 每页 bullets 不超过 5 条，每条不超过 40 字
- 不改写 MD 核心观点，只做结构与视角优化
