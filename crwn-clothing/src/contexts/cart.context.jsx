import { useReducer } from 'react'
import { createContext } from 'react'
import { createAction } from '../utils/reducer/reducer.utils'

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

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SHOW_CART_DROP_DOWN: 'SHOW_CART_DROP_DOWN'
}

const INITIAL_STATE = {
  showCartDropDown: false,
  cartItems: [],
  totalItems: 0,
  total: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SHOW_CART_DROP_DOWN:
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { cartItems, showCartDropDown, total, totalItems } = state

  const updateCartItemsReducer = (newCartItems) => {
    const newCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const newTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    const payload = {
      cartItems: newCartItems,
      totalItems: newCount,
      total: newTotal
    }
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload))
  }
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const deleteCartItem = (itemToDelete) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemToDelete.id)
    updateCartItemsReducer(newCartItems)
  }

  const setShowCartDropDown = (showCartDropDown) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SHOW_CART_DROP_DOWN, {
        showCartDropDown: showCartDropDown
      })
    )
  }

  const value = {
    showCartDropDown,
    setShowCartDropDown,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    totalItems,
    total,
    deleteCartItem
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
