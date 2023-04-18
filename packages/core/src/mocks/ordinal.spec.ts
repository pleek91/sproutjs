import { describe, expect, it } from 'vitest'
import { ordinal } from '@/mocks/ordinal'
import { ordinalPattern } from '@/regex'

describe('ordinal', () => {

  it('returns a valid ordinal', () => {
    const value = ordinal()

    expect(value).toMatch(ordinalPattern)
  })

  it('respects MinMax', () => {
    const value = ordinal({ min: 1, max: 1 })

    expect(value).toBe('1st')
  })

})
