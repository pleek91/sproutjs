import { describe, expect, it } from 'vitest'
import { territories } from '@/data/territories'
import { territory } from '@/mocks/territory'

describe('territory', () => {

  it('returns a valid territory', () => {
    const value = territory()
    const valid = territories.map(territory => territory.name)

    expect(valid).toContain(value)
  })

  it('respects abbreviation argument', () => {
    const value = territory({ abbreviation: true })
    const valid = territories.map(territory => territory.abbreviation)

    expect(valid).toContain(value)
  })

})