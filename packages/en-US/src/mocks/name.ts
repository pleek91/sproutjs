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
  const middle = firstName({ gender })
  const initial = letter()
  const template = format.replace('f', '1').replace('i', '2').replace('m', '2').replace('l', '3')

  return template.replace('1', first).replace('2', initial).replace('3', middle).replace('4', last)
}