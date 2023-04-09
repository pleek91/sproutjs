import { Size } from '@/types'

export function image({ height = 250, width = 250 }: Size = {}): string {
  return `https://placekitten.com/${width}/${height}`
}