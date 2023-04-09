import { describe, expect, it } from 'vitest'
import { image } from '@/mocks/image'
import { number } from '@/mocks/number'
import { Size } from '@/types'

describe('image', () => {

  it('returns a valid url', () => {
    const value = image()

    function isValidHttpUrl(value: string): boolean {
      try {
        const {protocol} = new URL(value);

        return protocol === "http:" || protocol === "https:";
      } catch {
        return false;
      }
    }

    expect(isValidHttpUrl(value)).toBeTruthy()
  })

  it('respects Size arguments', () => {
    const randomHeight = number({min:500, max:5000})
    const randomWidth = number({min:500, max:5000})

    const withHeight = image({ height: randomHeight })
    const withWidth = image({ width: randomWidth })
    const withBoth = image({ height: randomHeight, width: randomWidth })

    function getRegExp({height, width}: Size = {}){
      return new RegExp(`^https.*?\/${width ?? '\\d+'}\/${height ?? '\\d+'}$`)
    }

    expect(withHeight).matches(getRegExp({ height: randomHeight }))
    expect(withWidth).matches(getRegExp({ width: randomWidth }))
    expect(withBoth).matches(getRegExp({ height: randomHeight, width: randomWidth }))
  })
})

