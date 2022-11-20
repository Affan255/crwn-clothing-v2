import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartDropDownShowContext } from '../../contexts/cart-dropdown-show.context'
import './cart-icon.styles.scss'
const CartIcon = () => {
  const { showCartDropDown, setShowCartDropDown } = useContext(
    CartDropDownShowContext
  )
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon
        onClick={() => setShowCartDropDown(!showCartDropDown)}
        className='shopping-icon'
      />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
