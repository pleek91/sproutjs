import { choice } from 'core'
import { territories } from '@/data/territories'

type TerritoryArgs = {
  abbreviation?: boolean,
}

export function territory({ abbreviation = false }: TerritoryArgs = {}): string {
  const value = choice(...territories)

  if (abbreviation) {
    return value.abbreviation
  }

  return value.name
}