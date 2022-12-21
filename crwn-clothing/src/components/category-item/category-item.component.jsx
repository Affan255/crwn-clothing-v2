import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  Body,
  CategoryItemContainer
} from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = (route) => navigate(route)
  return (
    <CategoryItemContainer onClick={() => onNavigateHandler(route)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
