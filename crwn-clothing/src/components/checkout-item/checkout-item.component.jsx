import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem
  const { deleteCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => removeItemFromCart(cartItem)} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={() => deleteCartItem(cartItem)} className='remove-button'>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
