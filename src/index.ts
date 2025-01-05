export function f<T>(call: () => T): T {
  return call()
}
