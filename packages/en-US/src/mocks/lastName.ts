import { choice } from 'core'
import { lastNames } from '@/data/lastNames'

export function lastName(): string {
  return choice(lastNames)
}