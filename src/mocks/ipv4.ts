import { number } from '@/mocks/number'
import { ipv4PrivatePattern } from '@/regex'
import { choice } from '@/utilities'

export type Ipv4Args = {
  type?: 'public' | 'private' | 'any',
}

function range(): string {
  return `${number({ min: 0, max: 255 })}`
}

function privateIp(): string {
  const type = choice('10', '127', '172', '192')

  if (type === '10' || type === '127') {
    return `${type}.${range()}.${range()}.${range()}`
  }

  if (type == '172') {
    return `172.${number({ min: 16, max: 31 })}.${range()}.${range()}`
  }

  return `192.168.${range()}.${range()}`
}

export function ipv4({ type = 'public' }: Ipv4Args = {}): string {
  if (type === 'private') {
    return privateIp()
  }

  const ip = `${range()}.${range()}.${range()}.${range()}`

  if (type === 'any') {
    return ip
  }

  if (ipv4PrivatePattern.test(ip)) {
    return ipv4()
  }

  return ip
}