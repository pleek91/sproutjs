import { choice } from '@/utilities'

// todo: enhance with Local.timeZones when globally available
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/timeZones
export function timezone(): string {
  const values = Intl.supportedValuesOf('timeZone')

  return choice(...values)
}