import { useState } from 'react'
import { type AddonGroupType, type Addon, type AddonAction } from '../types'

interface AddonProps {
  name: string
  price: number
  limit: number
  type: string
  onChange: (action: AddonAction) => void
  isEnabled: boolean
  count?: number
}

interface AddonGroupProps {
  name: string
  limit: number
  type: AddonGroupType
  addons: Addon[]
  handleAddonUpdate: (action: AddonAction, type: AddonGroupType, addon: Addon) => void
}

export function AddonGroup({ name, limit, type, addons, handleAddonUpdate }: AddonGroupProps) {
  const [addonCount, setAddonCount] = useState(0)
  const incrementGroupAddonCountBy = (updateBy: number) => {
    setAddonCount(addonCount + updateBy)
  }

  return (
    <>
      <h4>{name}</h4>
      {addons.map((addon, i) => {
        const { name, price } = addon.addon
        return (
          <Addon
            key={i}
            name={name}
            price={price}
            limit={addon.limit}
            isEnabled={addonCount < limit}
            type={type}
            onChange={(action) => {
              if (action === 'add') {
                incrementGroupAddonCountBy(1)
              } else {
                incrementGroupAddonCountBy(-1)
              }
              handleAddonUpdate(action, type, addon)
            }}
          />
        )
      })}
    </>
  )
}

function Addon({ name, price, limit, isEnabled, onChange, count = 0 }: AddonProps) {
  const [counter, setCounter] = useState(count)
  const updateAddonCount = (action: AddonAction) => {
    const newCount = action === 'add' ? counter + 1 : counter - 1
    if (newCount < 0 || newCount > limit) return
    if (!isEnabled && action === 'add') return
    setCounter(newCount)
    onChange(action)
  }

  return (
    <div className="addon">
      <div>{name}</div>
      <div style={{ flex: '1 1 0%' }}>{price}kr</div>
      <div className="update-addon" onClick={() => updateAddonCount('remove')}>
        -
      </div>
      <div className="">{`${counter}/${limit}`}</div>
      <div className="update-addon" onClick={() => updateAddonCount('add')}>
        +
      </div>
    </div>
  )
}
