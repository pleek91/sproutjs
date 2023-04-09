import { describe, expect, it } from 'vitest'
import { float } from '@/mocks/float'

describe('float', () => {

  it('returns a valid float', () => {
    const value = float()
    const type = typeof value

    expect(type).toBe('number')
  })

  it('respects MinMax', () => {
    const value = float({ min: 1.1, max: 1.1 })

    expect(value).toBe(1.1)
  })

  it('respects fixed', () => {
    const value = float({ fixed: 2 })
    const [, decimal] = `${value}`.split('.')

    expect(decimal.length).toBeLessThanOrEqual(2)
  })

})
