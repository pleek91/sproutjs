import { describe, expect, it } from 'vitest'
import { getStateByAbbreviation } from '@/data/states'
import { zipCode } from '@/mocks/zipCode'

describe('zipCode', () => {

  it('returns a valid number', () => {
    const value = zipCode()
    const type = typeof value

    expect(type).toBe('number')
  })

  it('respects state argument', () => {
    const value = zipCode({ state: 'IL' })

    expect(value).toBeGreaterThanOrEqual(60001)
    expect(value).toBeLessThanOrEqual(62999)
  })

})