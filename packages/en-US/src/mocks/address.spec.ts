import { describe, expect, it } from 'vitest'
import { address } from '@/mocks/address'

describe('address', () => {

  it('returns a valid string', () => {
    const value = address()
    const type = typeof value

    expect(type).toBe('string')
  })

  it('respects state argument', () => {
    const value = address({ state: 'IL' })

    expect(value).toContain(' IL ')
  })

})