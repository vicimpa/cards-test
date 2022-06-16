enum EnumType {}

export function enumArray<T extends typeof EnumType>(e: T) {
  const keys = Object.keys(e)
  return keys.splice(keys.length / 2).map((v => e[v as keyof T]))
}