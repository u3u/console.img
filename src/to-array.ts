export const toArray = <T>(val: T): T[] => {
  return Array.isArray(val) ? val : [val]
}
