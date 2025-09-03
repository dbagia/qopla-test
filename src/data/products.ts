import { type Product } from '../types'

export const products: Product[] = [
  {
    name: 'Soda',
    price: 75,
    id: 'soda',
    modifications: {
      sizes: [
        { name: 'Normal', addonPrice: 0 },
        { name: 'Extra large', addonPrice: 15 },
      ],
      flavours: [
        { name: 'Coca Cola', addonPrice: 0 },
        { name: 'Fanta', addonPrice: 20 },
        { name: 'Sprite', addonPrice: 0 },
      ],
    },
  },
  {
    name: 'Burger',
    price: 110,
    id: 'burger',
    modifications: {
      sizes: [
        { name: 'Single', addonPrice: 0 },
        { name: 'Double', addonPrice: 15 },
      ],
      flavours: [
        { name: 'Vegan', addonPrice: 40 },
        { name: 'Chicken', addonPrice: 0 },
      ],
    },
  },
]
