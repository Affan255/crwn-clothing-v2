import { createContext, useEffect, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  const existinCartItem = cartItems.find((item) => item.id === productToAdd.id)
  if (existinCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  showCartDropDown: false,
  setShowCartDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0
})

export const CartProvider = ({ children }) => {
  const [showCartDropDown, setShowCartDropDown] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setTotalItems(newCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {
    showCartDropDown,
    setShowCartDropDown,
    addItemToCart,
    cartItems,
    totalItems,
    setTotalItems
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
