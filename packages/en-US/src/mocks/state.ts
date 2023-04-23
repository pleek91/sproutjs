import { choice } from 'core'
import { StateAbbreviation, getStateByAbbreviation, stateAbbreviations, states } from '@/data/states'

export type StateArgs = {
  state?: StateAbbreviation,
  abbreviation?: boolean,
}

export function state({
  state = choice(stateAbbreviations),
  abbreviation = false,
}: StateArgs = {}): string {
  const value = getStateByAbbreviation(state)

  if (abbreviation) {
    return value.abbreviation
  }

  return value.name
}