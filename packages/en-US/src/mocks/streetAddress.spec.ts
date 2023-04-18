import { describe, expect, it } from 'vitest'
import { streetAddress } from '@/mocks/streetAddress'
import { streetAddressPattern } from '@/regex'

describe('street address', () => {

  it('returns a valid street address', () => {
    const value = streetAddress()

    expect(value).toMatch(streetAddressPattern)
  })

})