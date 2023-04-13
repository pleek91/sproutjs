import { describe, expect, it } from 'vitest'
import { firstNames } from '@/data/firstNames'
import { firstName } from '@/mocks/firstName'

describe('firstName', () => {

  it('returns a valid firstName', () => {
    const value = firstName()

    expect([...firstNames.male, ...firstNames.female]).toContain(value)
  })

  it('respects gender argument', () => {
    const male = firstName({ gender: 'male' })
    const female = firstName({ gender: 'female' })

    expect(firstNames.male).toContain(male)
    expect(firstNames.female).toContain(female)
  })

})