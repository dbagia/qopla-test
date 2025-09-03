import { type AddonGroup } from '../types'

export const addonGroups: AddonGroup[] = [
  {
    type: 'add',
    name: 'Extra toppings',
    limit: 3,
    sortOrder: 1,
    refProductIds: ['soda'],
    addons: [
      {
        addon: {
          name: 'Whipped cream',
          price: 15,
        },
        limit: 2,
        sortOrder: 2,
      },
      {
        addon: {
          name: 'Vanilla icecream',
          price: 5,
        },
        limit: 1,
        sortOrder: 0,
      },
      {
        addon: {
          name: 'Marshmallow',
          price: 10,
        },
        limit: 1,
        sortOrder: 1,
      },
    ],
  },
  {
    type: 'remove',
    name: 'To remove',
    limit: 1,
    sortOrder: 0,
    refProductIds: ['soda'],
    addons: [
      {
        addon: {
          name: 'Bubbles',
          price: 0,
        },
        limit: 1,
        sortOrder: 0,
      },
      {
        addon: {
          name: 'Sugar',
          price: 0,
        },
        limit: 1,
        sortOrder: 0,
      },
    ],
  },
]
