/** PPT 生成引擎（统一 /ppt 工作台） */
export type PptEngine = 'ohmyppt' | 'pptxgenjs'

export const PPT_ENGINE_OPTIONS: { value: PptEngine; label: string; hint: string }[] = [
  {
    value: 'ohmyppt',
    label: 'PPT HTML',
    hint: '精美 HTML 演示稿',
  },
  {
    value: 'pptxgenjs',
    label: '直接生成',
    hint: '可编辑 PPTX',
  },
]

export function isPptEngine(v: string | null | undefined): v is PptEngine {
  return v === 'ohmyppt' || v === 'pptxgenjs'
}
