function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export function removeOneByPath<T>(arr: T[], path: string, value: unknown): T[] {
  const index = arr.findIndex((item) => getNestedValue(item, path) === value)
  if (index === -1) return arr
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
