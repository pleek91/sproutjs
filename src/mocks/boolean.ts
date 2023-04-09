import { Chance } from '@/types/Chance'

export function boolean({ chance = 0.5 }: Chance = {}): boolean {
  return Math.random() < chance
}