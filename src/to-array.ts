export const toArray = <T>(val?: T): T[] => {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}
