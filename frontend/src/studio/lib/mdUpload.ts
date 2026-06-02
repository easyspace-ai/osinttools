export function validateMdFile(file: File): string | null {
  if (!file.name.toLowerCase().endsWith('.md')) {
    return '仅支持 .md 文件'
  }
  if (file.size <= 0) return '文件为空'
  if (file.size > 5 * 1024 * 1024) return '文件超过 5MB'
  return null
}

export async function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('读取文件失败'))
    reader.readAsText(file)
  })
}
