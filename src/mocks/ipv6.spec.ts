import { describe, expect, it } from 'vitest'
import { ipv6 } from '@/mocks/ipv6'
import { ipv6Pattern, leadingZerosPattern } from '@/regex'

describe('ipv6', () => {

  it('returns a valid ipv6', () => {
    const ip = ipv6()

    expect(ip).toMatch(ipv6Pattern)
  })

  it('respects removeLeadingZeros', () => {
    const ip = ipv6({ removeLeadingZeros: true })
    const segments = ip.split(':')

    segments.forEach(segment => expect(segment).not.toMatch(leadingZerosPattern))
  })

})
