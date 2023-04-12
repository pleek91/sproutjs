import { number } from 'core'

export type SsnArgs = {
  dashed?: boolean,
}

export function ssn({ dashed = true }: SsnArgs = {}): string {
  const area = number({ min: 1, max: 899 })
  const group = number({ min: 1, max: 99 })
  const serial = number({ min: 1, max: 9999 })

  if (area === 666) {
    return ssn()
  }

  const areaPadded = `${area}`.padStart(3, '0')
  const groupPadded = `${group}`.padStart(2, '0')
  const serialPadded = `${serial}`.padStart(4, '0')

  if (dashed) {
    return `${areaPadded}-${groupPadded}-${serialPadded}`
  }

  return `${areaPadded}${groupPadded}${serialPadded}`
}