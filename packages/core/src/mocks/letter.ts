import { alphabet } from '@/data/alphabet'
import { choice } from '@/utilities'

export function letter(): string {
  return choice(alphabet)
}