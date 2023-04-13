import { describe, expect, it } from 'vitest'
import { states } from '@/data/states'
import { state } from '@/mocks/state'

describe('state', () => {

  it('returns a valid state', () => {
    const value = state()
    const valid = states.map(state => state.name)

    expect(valid).toContain(value)
  })

  it('respects abbreviation argument', () => {
    const value = state({ abbreviation: true })
    const valid = states.map(state => state.abbreviation)

    expect(valid).toContain(value)
  })

})