import { useState } from 'react'
import Overlay from './ui/Overlay'
import { removeOneByPath } from '../utils/arrayUtils'
import { OrderSummary } from './OrderSummary'
import VariantSelector from './VariantSelector'
import { AddonGroup } from './Addon'
import {
  type Order,
  type Product,
  type Modification,
  type AddonGroup as IAddonGroup,
  type AddonGroupType,
  type Addon,
  type AddonAction,
  type Customisation,
} from '../types'

interface SheetProps {
  setOrderDraft: (a: Order | null) => void
  orderDraft: Order | null
  product: Product | null
  addonGroups: IAddonGroup[]
}

function Sheet({ product, orderDraft, addonGroups, setOrderDraft }: SheetProps) {
  const [selectedFlavour, setSelectedFlavour] = useState<Modification | null>(null)
  const [selectedSize, setSelectedSize] = useState<Modification | null>(null)
  const [selectedCustomisations, setSelectedCustomisations] = useState<Customisation[]>([])

  const shouldOpen = !!orderDraft

  const handleSelectFlavour = (flavour: Modification) => {
    setSelectedFlavour(flavour)
    updateOrderDraft(flavour, selectedSize, selectedCustomisations)
  }

  const handleSelectSize = (size: Modification) => {
    setSelectedSize(size)
    updateOrderDraft(selectedFlavour, size, selectedCustomisations)
  }

  const handleAddonUpdate = (action: AddonAction, type: AddonGroupType, addon: Addon) => {
    let updatedCustomisations: Customisation[] = []
    if (action === 'add') {
      updatedCustomisations = [
        ...selectedCustomisations,
        {
          name: addon.addon.name,
          price: addon.addon.price,
          type,
          quantity: 1,
        },
      ]
    } else if (action === 'remove') {
      updatedCustomisations = removeOneByPath(selectedCustomisations, 'name', addon.addon.name)
    }

    setSelectedCustomisations(updatedCustomisations)
    updateOrderDraft(selectedFlavour, selectedSize, updatedCustomisations)
  }

  const updateOrderDraft = (
    flavour?: Modification | null,
    size?: Modification | null,
    customisations?: Customisation[] | null
  ) => {
    if (!orderDraft) return

    let addonsPrice = customisations
      ? customisations.reduce((acc, customisation) => {
          return acc + customisation.price
        }, 0)
      : 0

    setOrderDraft({
      ...orderDraft,
      totalPrice:
        orderDraft.price + (flavour?.addonPrice ?? 0) + (size?.addonPrice ?? 0) + addonsPrice,
      title: flavour ? flavour.name : orderDraft.title,
      variant: {
        flavour: flavour
          ? {
              name: flavour.name,
              price: flavour.addonPrice,
            }
          : undefined,
        size: size
          ? {
              name: size.name,
              price: size.addonPrice,
            }
          : undefined,
      },
      customisations: customisations ? customisations : undefined,
    })
  }

  const resetSelections = () => {
    setOrderDraft(null)
    setSelectedFlavour(null)
    setSelectedSize(null)
    setSelectedCustomisations([])
  }

  return (
    <>
      <Overlay handleOverlayClick={resetSelections} shouldOpen={shouldOpen} />
      <div
        className="sheet"
        style={{
          transform: shouldOpen ? 'translateX(0%)' : 'translateX(100%)',
        }}
      >
        {shouldOpen && product && (
          <>
            <OrderSummary orderDraft={orderDraft} product={product} />
            {product.modifications && (
              <>
                <div className="separator"></div>
                <h4 className="mtb-1">Select a variant:</h4>
                <VariantSelector
                  selectedModification={selectedFlavour}
                  onSelect={handleSelectFlavour}
                  modifications={product.modifications.flavours}
                />
                <h4 className="mtb-1">Select a size:</h4>
                <VariantSelector
                  selectedModification={selectedSize}
                  onSelect={handleSelectSize}
                  modifications={product.modifications.sizes}
                />
              </>
            )}
            <div className="separator"></div>
            {addonGroups.length > 0 &&
              addonGroups.map((addonGroup, i) => {
                const { name, limit, addons, type } = addonGroup
                return (
                  <AddonGroup
                    key={i}
                    name={name}
                    limit={limit}
                    type={type}
                    addons={addons}
                    handleAddonUpdate={handleAddonUpdate}
                  />
                )
              })}
          </>
        )}
      </div>
    </>
  )
}

export default Sheet
