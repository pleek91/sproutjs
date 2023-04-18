import { number } from '@/mocks/number'
import { MinMax } from '@/types'

export type OrdinalArgs = MinMax<number>

export function ordinal({ min = 1, max = 1000 }: OrdinalArgs = {}): string {
  const value = number({ min, max })
  const intl = new Intl.PluralRules(undefined, { type: 'ordinal' })

  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th'],
  ])

  const rule = intl.select(value)
  const suffix = suffixes.get(rule)

  return `${value}${suffix}`
}