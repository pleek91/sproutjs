import { number } from '@/mocks/number'
import { Callback } from '@/types'

type Choice<T> = T extends Callback ? ReturnType<T> : T

export function choice<T extends unknown[]>(...choices: T): Choice<T[number]> {
  const index = number({ min: 0, max: choices.length - 1 })
  const choice = choices[index]

  if (typeof choice === 'function') {
    return choice()
  }

  return choice as Choice<T[number]>
}