import { choice, number } from 'core'
import { StateAbbreviation, getStateByAbbreviation, stateAbbreviations } from '@/data/states'

export type zipCodeArgs = {
  state?: StateAbbreviation,
}

export function zipCode({
  state = choice(stateAbbreviations),
}: zipCodeArgs = {}): number {
  const { zipCodeRanges } = getStateByAbbreviation(state)
  const zipCodeRange = choice(zipCodeRanges)

  return number(zipCodeRange)
}