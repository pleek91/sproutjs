export type Callback<T = unknown> = () => T

export function isCallback<T extends Callback>(value: T | unknown): value is T {
  return typeof value === 'function'
}
