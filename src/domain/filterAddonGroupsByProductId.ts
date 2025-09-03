import { type AddonGroup } from '../types'

export const filterAddonGroupsByProductId = (
  productId: string,
  allAddonGroups: AddonGroup[]
): AddonGroup[] => {
  const productAddons = allAddonGroups
    .filter((addonGroup) => addonGroup.refProductIds.includes(productId))
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((addonGroup) => {
      addonGroup.addons.sort((c, d) => c.sortOrder - d.sortOrder)
      return addonGroup
    })

  return productAddons
}
