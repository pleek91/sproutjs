import { MinMax } from '@/types'

export function date({ min, max }: MinMax<Date> = {}): Date {
  if (!min) {
    min = new Date(0)
  }

  if (!max) {
    max = new Date()
  }

  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()))
}