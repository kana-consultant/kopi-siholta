/** Convert newlines in translation strings to <br> for HTML rendering. */
export const nl = (s: string) => s.split('\n').join('<br>')

/** Convert hex color to rgb string. */
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return ''
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}
