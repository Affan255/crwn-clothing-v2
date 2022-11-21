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

const removeCartItem = (cartItems, productToRemove) => {
  const existinCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  )
  const quantity = existinCartItem.quantity
  if (quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }
  return cartItems.filter((item) => item.id !== productToRemove.id)
}

export const CartContext = createContext({
  showCartDropDown: false,
  setShowCartDropDown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
  total: 0,
  removeItemFromCart: () => {},
  deleteCartItem: () => {}
})

export const CartProvider = ({ children }) => {
  const [showCartDropDown, setShowCartDropDown] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setTotalItems(newCount)
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    setTotal(newTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const deleteCartItem = (itemToDelete) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToDelete.id))
  }

  const value = {
    showCartDropDown,
    setShowCartDropDown,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    totalItems,
    total,
    setTotalItems,
    deleteCartItem
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
