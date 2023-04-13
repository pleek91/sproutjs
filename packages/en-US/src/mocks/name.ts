import { letter } from 'core'
import { firstName } from '@/mocks/firstName'
import { lastName } from '@/mocks/lastName'

export type NameArgs = {
  gender?: 'male' | 'female' | 'any',
  format?: string,
}

export function name({ gender = 'any', format = 'first last' }: NameArgs = {}): string {
  const first = firstName({ gender })
  const last = lastName()
  const middle = firstName({ gender })
  const initial = letter()

  return format.replace('first', first).replace('initial', initial).replace('middle', middle).replace('last', last)
}