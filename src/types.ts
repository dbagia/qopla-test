export interface Modification {
  name: string
  addonPrice: number
}

interface ProductModifications {
  sizes: Modification[]
  flavours: Modification[]
}

export interface Product {
  id: string
  name: string
  price: number
  modifications: ProductModifications
}

interface Variant {
  name: string
  price: number
}

export interface Customisation extends Variant {
  type: AddonGroupType
  quantity: number
}

export interface Order {
  title: string
  quantity: number
  price: number
  customisations?: Customisation[]
  totalPrice: number
  variant?: {
    size?: Variant
    flavour?: Variant
  }
}

export interface Addon {
  addon: {
    name: string
    price: number
  }
  limit: number
  sortOrder: number
}

export interface AddonWithGroupType extends Addon {
  type: AddonGroupType
}

export interface AddonGroup {
  name: string
  limit: number
  sortOrder: number
  refProductIds: string[]
  addons: Addon[]
  type: AddonGroupType
}

export type AddonGroupType = 'add' | 'remove'
export type AddonAction = AddonGroupType
