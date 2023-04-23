import { choice } from 'core'
import { StateAbbreviation, stateAbbreviations } from '@/data/states'
import { state } from '@/mocks/state'
import { streetAddress } from '@/mocks/streetAddress'
import { zipCode } from '@/mocks/zipCode'

export type AddressArgs = {
  state?: StateAbbreviation,
}

export function address({
  state: stateAbbreviation = choice(stateAbbreviations),
}: AddressArgs = {}): string {
  const streetValue = streetAddress()
  const cityValue = 'Rockford'
  const stateValue = state({ state: stateAbbreviation, abbreviation: true })
  const zipCodeValue = zipCode({ state: stateAbbreviation })

  return `
${streetValue}
${cityValue}, ${stateValue} ${zipCodeValue}
  `.trim()
}