import { describe, expect, it } from 'vitest'
import { phone } from '@/mocks/phone'

describe('phone', () => {

  it('returns a valid phone number', () => {
    const value = phone()

    expect(value).toMatch(/^[2-9][0-9]{9}$/)
  })

  it('respects PhoneNumberFormat', () => {
    const value = phone({ format: 'x x-x' })

    expect(value).toMatch(/^[2-9][0-9]{2} [0-9]{3}-[0-9]{4}$/)
  })

})

