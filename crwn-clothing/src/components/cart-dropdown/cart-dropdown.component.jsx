import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { CartDropDownContainer } from './cart-dropdown.styles.jsx'
import { CartItems } from './cart-dropdown.styles.jsx'
import { EmptyMessage } from './cart-dropdown.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
const CartDropDown = () => {
  const { cartItems } = useSelector(selectCartItems)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropDown
