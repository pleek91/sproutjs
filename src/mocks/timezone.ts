import { choice } from '@/utilities'

export function timezone(): string {
  const values = Intl.supportedValuesOf('timeZone')

  return choice(...values)
}