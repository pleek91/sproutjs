import { float } from '@/mocks/float'
import { MinMax } from '@/types'

export type CurrencyArgs = MinMax<number> & {
  currency?: string,
}

export function currency({ min = 0, max = 1000, currency = 'USD' }: CurrencyArgs = {}): string {
  const value = float({ min, max })
  const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency })

  return formatter.format(value)
}