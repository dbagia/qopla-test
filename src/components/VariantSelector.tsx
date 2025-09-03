import { type Modification } from '../types'

interface VariantSelectorProps {
  onSelect: (modification: Modification) => void
  modifications: Modification[]
  selectedModification: Modification | null
}

function VariantSelector({ selectedModification, modifications, onSelect }: VariantSelectorProps) {
  return (
    <ul className="product-container">
      {modifications.map((modification, i) => {
        return (
          <li
            key={i}
            className={`product-card card-small text-small selectable ${selectedModification?.name === modification.name ? 'selected' : ''}`}
            onClick={() => onSelect(modification)}
          >
            {modification.name}
          </li>
        )
      })}
    </ul>
  )
}

export default VariantSelector
