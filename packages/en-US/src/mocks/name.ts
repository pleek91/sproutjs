import { letter } from 'core'
import { firstName } from '@/mocks/firstName'
import { lastName } from '@/mocks/lastName'

export type NameArgs = {
  gender?: 'male' | 'female' | 'any',
  format?: string,
}

export function name({ gender = 'any', format = 'f l' }: NameArgs = {}): string {
  const first = firstName({ gender })
  const last = lastName()
  const middle = letter()

  return format.replace('f', first).replace('m', middle).replace('l', last)
}