import { MinMax } from '@/types'

export function number({ min = 0, max = 1000 }: MinMax<number> = {}): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}