import { describe, expect, it } from 'vitest'
import { letters } from '@/data/letters'
import { letter } from '@/mocks/letter'

describe('letter', () => {

  it('returns a letter', () => {
    const value = letter()

    expect(letters).toContain(value)
  })

})
