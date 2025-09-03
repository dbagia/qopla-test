import { type Order, type Product } from '../types'

interface OrderSummaryProps {
  orderDraft: Order
  product: Product
}

export function OrderSummary({ orderDraft }: OrderSummaryProps) {
  const { title, quantity, price, totalPrice, variant, customisations } = orderDraft
  return (
    <div
      style={{
        height: '35vh',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '0.5rem',
        marginTop: 0,
        padding: '0 1rem 1rem 1rem',
        overflow: 'scroll',
      }}
    >
      <div style={{ textAlign: 'center', margin: '0.7rem' }}>
        <h3>Order Summary</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0.3rem',
          alignItems: 'flex-start',
        }}
      >
        <div className="placeholder-x"></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
          }}
        >
          <h4 className="text-medium">{title}</h4>
          <div className="text-small text-muted">
            {price}kr x {quantity}
          </div>
        </div>
        <h4 className="text-highlight">SEK {totalPrice}</h4>
      </div>
      <div className="separator"></div>

      {variant && variant.flavour && variant.flavour.price > 0 && (
        <div
          className="text-small"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          +{variant.flavour.price} {variant.flavour.name}
        </div>
      )}

      {variant && variant.size && variant.size.price > 0 && (
        <div
          className="text-small"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          +{variant.size.price} {variant.size.name}
        </div>
      )}

      {customisations &&
        customisations.map((customisation) => {
          const { type, name, price, quantity } = customisation

          return (
            <div className="text-small">
              {type === 'add' ? `+ ${quantity} x ${price} ` : '- '}
              {name}
            </div>
          )
        })}
    </div>
  )
}
