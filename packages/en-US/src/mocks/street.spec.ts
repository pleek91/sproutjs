import { describe, expect, it } from 'vitest'
import { street } from '@/mocks/street'
import { streetPattern } from '@/regex'

describe('street', () => {

  it('returns a valid street', () => {
    const value = street()

    expect(value).toMatch(streetPattern)
  })

})