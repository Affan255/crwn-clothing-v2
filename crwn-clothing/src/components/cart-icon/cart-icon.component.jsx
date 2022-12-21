import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from './cart-icon.styles.jsx'
const CartIcon = () => {
  const { showCartDropDown, setShowCartDropDown, totalItems } =
    useContext(CartContext)
  return (
    <CartIconContainer>
      <ShoppingIcon onClick={() => setShowCartDropDown(!showCartDropDown)} />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
