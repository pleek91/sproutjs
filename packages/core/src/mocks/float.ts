import { MinMax } from '@/types/MinMax'

type FloatArgs = MinMax<number> & {
  fixed?: number,
}

export function float({ min = 0, max = 1000, fixed = 2 }: FloatArgs = {}): number {
  const value = Math.random() * (max - min) + min

  return parseFloat(value.toFixed(fixed))
}