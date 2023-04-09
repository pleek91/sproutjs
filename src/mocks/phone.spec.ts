import { describe, expect, it } from 'vitest'
import { phone } from '@/mocks/phone'

describe('phone', () => {

  it('returns a valid phone number', () => {
    const pattern = /^[2-9][0-9]{9}$/
    const value = phone()
    const match = pattern.test(value)

    expect(match).toBe(true)
  })

  it('respects PhoneNumberFormat', () => {
    const pattern = /^[2-9][0-9]{2} [0-9]{3}-[0-9]{4}$/
    const value = phone({ format: 'x x-x' })
    const match = pattern.test(value)

    expect(match).toBe(true)
  })

})

