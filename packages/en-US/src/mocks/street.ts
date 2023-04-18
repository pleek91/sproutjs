import { boolean, choice, ordinal } from 'core'
import { streetNames, streetSuffixes } from '@/data/streets'

export function street(): string {
  if (boolean({ chance: 0.25 })) {
    const name = ordinal()
    const suffix = choice('Street', 'St')

    return `${name} ${suffix}`
  }

  const name = choice(...streetNames)
  const suffixChoice = choice(...streetSuffixes)
  const suffix = choice(...Object.values(suffixChoice))

  return `${name} ${suffix}`
}