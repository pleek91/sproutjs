import { describe, expect, it } from 'vitest'
import { boolean } from '@/mocks/boolean'

describe('boolean', () => {

  it('returns a valid boolean', () => {
    const value = boolean()
    const type = typeof value

    expect(type).toBe('boolean')
  })

  it('respects Chance', () => {
    const isTrue = boolean({ chance: 100 })
    const isFalse = boolean({ chance: 0 })

    expect(isTrue).toBe(true)
    expect(isFalse).toBe(false)
  })

})

