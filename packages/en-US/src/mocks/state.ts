import { choice } from 'core'
import { states } from '@/data/states'

export type StateArgs = {
  abbreviation?: boolean,
}

export function state({ abbreviation = false }: StateArgs = {}): string {
  const value = choice(...states)

  if (abbreviation) {
    return value.abbreviation
  }

  return value.name
}