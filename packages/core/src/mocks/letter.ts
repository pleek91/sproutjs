import { letters } from '@/data/letters'
import { choice } from '@/utilities'

export function letter(): string {
  return choice(...letters)
}