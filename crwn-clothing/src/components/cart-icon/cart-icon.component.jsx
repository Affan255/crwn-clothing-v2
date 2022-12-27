import { useDispatch, useSelector } from 'react-redux'
import { setShowCartDropDown } from '../../store/cart/cart.action.js'
import {
  selectCartItems,
  selectShowCartDropDown
} from '../../store/cart/cart.selector.js'
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon
} from './cart-icon.styles.jsx'

const CartIcon = () => {
  const dispatch = useDispatch()
  const { totalItems } = useSelector(selectCartItems)
  const showCartDropDown = useSelector(selectShowCartDropDown)
  return (
    <CartIconContainer>
      <ShoppingIcon
        onClick={() => dispatch(setShowCartDropDown(!showCartDropDown))}
      />
      <ItemCount>{totalItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
