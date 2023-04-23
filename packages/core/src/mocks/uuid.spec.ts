import { describe, expect, it } from 'vitest'
import { uuid } from '@/mocks/uuid'

describe('uuid', () => {

  it('returns a string', () => {
    const value = uuid()
    const type = typeof value

    expect(type).toBe('string')
  })

})
