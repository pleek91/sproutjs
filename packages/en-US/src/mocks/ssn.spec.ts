import { describe, expect, it } from 'vitest'
import { ssn } from '@/mocks/ssn'

describe('ssn', () => {

  it('returns a valid ssn number', () => {
    const value = ssn({ dashed: true })
    const [area, group, serial] = value.split('-').map(Number)

    expect(area).toBeLessThan(900)
    expect(group).toBeLessThan(100)
    expect(serial).toBeLessThan(10000)
  })

  it('respects dashed format', () => {
    const dashed = ssn({ dashed: true })
    const raw = ssn({ dashed: false })

    expect(dashed).toMatch(/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/)
    expect(raw).toMatch(/^[0-9]{9}$/)
  })

})