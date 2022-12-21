import { CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx'
const CartItem = ({ cartItem }) => {
  const { price, imageUrl, name, quantity } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {' '}
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
