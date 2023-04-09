/* eslint-disable @typescript-eslint/unified-signatures */
import { number } from '@/mocks/number'
import { MinMax } from '@/types'
import { Callback } from '@/types/Callback'

export function repeat<T extends Callback>(mock: T): ReturnType<T>[]
export function repeat<T extends Callback>(mock: T, count: number): ReturnType<T>[]
export function repeat<T extends Callback>(mock: T, minMax: MinMax<number>): ReturnType<T>[]
export function repeat<T extends Callback>(mock: T, countOrMinMax?: number | MinMax<number>): ReturnType<T>[] {
  const fill = (count: number): ReturnType<T>[] => new Array(count).fill(null).map(() => mock()) as ReturnType<T>[]

  if (typeof countOrMinMax === 'number') {
    return fill(countOrMinMax)
  }

  const { min = 1, max = 10 } = countOrMinMax ?? {}
  const count = number({ min, max })

  return fill(count)
}