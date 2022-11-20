import { createContext, useState } from 'react'

export const CartDropDownShowContext = createContext({
  showCartDropDown: false,
  setShowCartDropDown: () => null
})

export const CartDropDownShowProvider = ({ children }) => {
  const [showCartDropDown, setShowCartDropDown] = useState(false)
  const value = { showCartDropDown, setShowCartDropDown }
  return (
    <CartDropDownShowContext.Provider value={value}>
      {children}
    </CartDropDownShowContext.Provider>
  )
}
