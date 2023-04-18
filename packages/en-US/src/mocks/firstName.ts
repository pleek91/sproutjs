import { choice } from 'core'
import { firstNames } from '@/data/firstNames'

export type FirstNameArgs = {
  gender?: 'male' | 'female' | 'any',
}

export function firstName({ gender = 'any' }: FirstNameArgs = {}): string {
  if (gender === 'male') {
    return choice(firstNames.male)
  }

  if (gender === 'female') {
    return choice(firstNames.female)
  }

  return choice([...firstNames.male, ...firstNames.female])
}