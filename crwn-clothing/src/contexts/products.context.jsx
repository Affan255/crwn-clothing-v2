import { createContext, useEffect, useState } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(PRODUCTS)
  }, [])
  const value = { products, setProducts }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
