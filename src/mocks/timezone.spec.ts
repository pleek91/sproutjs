import { describe, expect, it } from 'vitest'
import { timezone } from '@/mocks/timezone'

describe('timezone', () => {

  it('returns a string', () => {
    const value = timezone()
    const type = typeof value

    expect(type).toBe('string')
  })

})
