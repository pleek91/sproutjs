import { leadingZerosPattern } from '@/regex'
import { choice, repeat } from '@/utilities'

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function segment(): string {
  return repeat(() => choice(hex), { min: 1, max: 4 }).join('').padStart(4, '0')
}

export type Ipv6Args = {
  removeLeadingZeros?: boolean,
}

export function ipv6({ removeLeadingZeros = false }: Ipv6Args = {}): string {
  let segments = repeat(segment, 8)

  if (removeLeadingZeros) {
    segments = segments.map(segment => segment.replace(leadingZerosPattern, ''))
  }

  return segments.join(':')
}