import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
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
  const { addItemToCart } = useContext(CartContext)

  const handleClick = () => {
    addItemToCart(product)
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
