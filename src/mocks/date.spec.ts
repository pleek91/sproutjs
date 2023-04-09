import { describe, expect, it } from 'vitest'
import { date } from '@/mocks/date'

describe('date', () => {

  it('returns a valid date', () => {
    const value = date()
    const match = value instanceof Date

    expect(match).toBe(true)
  })

  it('respects MinMax', () => {
    const now = new Date()
    const value = date({ min: now, max: now })

    expect(value.toString()).toBe(now.toString())
  })

})
