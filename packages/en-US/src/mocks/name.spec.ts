import { describe, expect, it } from 'vitest'
import { name } from '@/mocks/name'

describe('name', () => {

  it('returns a string', () => {
    const value = name()
    const type = typeof value

    expect(type).toBe('string')
  })

  it('respects format argument', () => {
    const value = name({ format: 'f m. l' })

    expect(value).toMatch(/^[a-zA-Z]+ [A-Z]\. [a-zA-Z]+$/)
  })

})