import { describe, expect, it } from 'vitest'
import { ipv4 } from '@/mocks/ipv4'
import { ipv4Pattern, ipv4PrivatePattern } from '@/regex'

describe('ipv4', () => {

  it('returns a valid ipv4', () => {
    expect(ipv4()).toMatch(ipv4Pattern)
  })

  it('returns a valid private ipv4', () => {
    expect(ipv4({ type: 'private' })).toMatch(ipv4PrivatePattern)
  })

})
