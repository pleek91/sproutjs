import { number } from '@/mocks/number'

type PhoneNumberFormat = { format?: string }

export function phone({ format = 'xxx' }: PhoneNumberFormat = {}): string {
  const area = number({ min: 200, max: 999 }).toString()
  const office = number({ min: 0, max: 999 }).toString().padStart(3, '0')
  const line = number({ min: 0, max: 9999 }).toString().padStart(4, '0')

  return format.replace('x', area).replace('x', office).replace('x', line)
}