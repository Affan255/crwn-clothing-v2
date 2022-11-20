import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'
const CartIcon = () => {
  const { showCartDropDown, setShowCartDropDown, totalItems } =
    useContext(CartContext)
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon
        onClick={() => setShowCartDropDown(!showCartDropDown)}
        className='shopping-icon'
      />
      <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default CartIcon
