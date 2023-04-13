import { describe, expect, it } from 'vitest'
import { lastNames } from '@/data/lastNames'
import { lastName } from '@/mocks/lastName'

describe('lastName', () => {

  it('returns a valid lastName', () => {
    const value = lastName()

    expect(lastNames).toContain(value)
  })

})