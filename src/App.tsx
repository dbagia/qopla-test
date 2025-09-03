import { useState, Fragment } from 'react'
import './App.css'
import Sheet from './components/Sheet'
import { productToOrder } from './domain/productToOrder'
import { filterAddonGroupsByProductId } from './domain/filterAddonGroupsByProductId'
import { type Product, type Order, type AddonGroup } from './types'
import { products } from './data/products'
import { addonGroups as allAddonGroups } from './data/addonGroups'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [orderDraft, setOrderDraft] = useState<Order | null>(null)
  const [addonGroups, setAddonGroups] = useState<AddonGroup[]>([])

  const handleSelectProduct = (product: Product) => {
    setOrderDraft(productToOrder(product))
    setSelectedProduct(product)
    setAddonGroups(filterAddonGroupsByProductId(product.id, allAddonGroups))
  }

  return (
    <>
      <div className="container">
        <div className="categories">
          <ul className="category-container">
            <li className="product-card">Drinks</li>
            <li className="product-card">Snacks</li>
          </ul>
        </div>
        <div className="products">
          <ul className="product-container">
            {products.map((product, i) => (
              <Fragment key={i}>
                <li className="product-card" onClick={() => handleSelectProduct(product)}>
                  {product.name}
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div className="cart">Cart</div>
      </div>
      <Sheet
        setOrderDraft={setOrderDraft}
        orderDraft={orderDraft}
        product={selectedProduct}
        addonGroups={addonGroups}
      />
    </>
  )
}

export default App
