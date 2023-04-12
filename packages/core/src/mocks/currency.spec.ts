import { describe, expect, it } from 'vitest'
import { currency } from '@/mocks/currency'

describe('currency', () => {

  it('returns a string', () => {
    const value = currency()
    const type = typeof value

    expect(type).toBe('string')
  })

  it('respects MinMax', () => {
    const value = currency({ min: 1.01, max: 1.01, currency: 'USD' })

    expect(value).toBe('$1.01')
  })

})

