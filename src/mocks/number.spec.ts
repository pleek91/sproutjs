import { describe, expect, it } from 'vitest'
import { number } from '@/mocks/number'

describe('number', () => {

  it('returns a valid number', () => {
    const value = number()
    const type = typeof value

    expect(type).toBe('number')
  })

  it('respects MinMax', () => {
    const value = number({ min: 1, max: 1 })

    expect(value).toBe(1)
  })

})
