import * as fs from 'fs'
import { resolve } from 'path'
import { describe, expect, it } from 'vitest'

function excluded(file: string): boolean {
  if (file.endsWith('.spec.ts')) {
    return false
  }

  if (file === 'index.ts') {
    return false
  }

  return true
}

// todo: this doesn't rerun automatically when files change.
// but it will catch things on first run which will help with
// accidentally merging mocks that are not exported
describe('index', () => {

  it('exports all mocks', () => {
    const index = fs.readFileSync(`${resolve(__dirname) }/index.ts`).toString()
    const mocks = fs.readdirSync(resolve(__dirname))
      .filter(excluded)
      .map(file => file.slice(0, -3))

    mocks.forEach(mock => {
      expect(index).toContain(mock)
    })
  })

})
