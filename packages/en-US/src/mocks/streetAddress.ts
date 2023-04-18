import { boolean, choice, number } from 'core'
import { streetUnitDesignators } from '@/data/streets'
import { street } from '@/mocks/street'

export function streetAddress(): string {
  const streetNumber = number()
  const streetName = street()
  const shouldHaveUnitDesignator = boolean({ chance: 0.1 })

  if (shouldHaveUnitDesignator) {
    const unit = number({ min: 1, max: 100 })
    const type = choice(streetUnitDesignators)
    const designator = choice(Object.values(type))

    return `${streetNumber} ${streetName} ${designator} ${unit}`
  }

  return `${streetNumber} ${streetName}`
}