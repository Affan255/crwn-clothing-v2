import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import './product-card.styles.jsx'
import {
  Footer,
  Name,
  Price,
  ProductCardContainer
} from './product-card.styles.jsx'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { cartItems } = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product))
  }
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
