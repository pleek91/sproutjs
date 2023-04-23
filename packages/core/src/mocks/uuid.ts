import { isNode } from '@/utilities/environment'

export function uuid(): string {
  if (isNode) {
    const crypto = require('crypto')

    return crypto.randomUUID()
  }

  return crypto.randomUUID()
}