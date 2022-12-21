import {
  BackgroundImage,
  Body,
  CategoryItemContainer
} from './category-item.styles.jsx'

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
