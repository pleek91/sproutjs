import { describe, expect, it } from 'vitest'
import { alphabet } from '@/data/alphabet'
import { letter } from '@/mocks/letter'

describe('letter', () => {

  it('returns a letter', () => {
    const value = letter()

    expect(alphabet).toContain(value)
  })

})
