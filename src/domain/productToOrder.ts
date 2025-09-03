import { type Product, type Order } from '../types'

export const productToOrder = (product: Product): Order => ({
  title: product.name,
  quantity: 1,
  price: product.price,
  customisations: [],
  totalPrice: product.price,
})
