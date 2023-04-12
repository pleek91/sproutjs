import { number } from '@/mocks/number'
import { Callback } from '@/types/Callback'

export function pick<T extends Callback[]>(...methods: T): ReturnType<T[number]> {
  const index = number({ min: 0, max: methods.length - 1 })
  const method = methods[index]

  return method() as ReturnType<T[number]>
}