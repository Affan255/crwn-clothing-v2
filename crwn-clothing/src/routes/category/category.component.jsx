import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { useSelector } from 'react-redux'
import { CategoryContainer, CategoryTitle } from './category.styles.jsx'
import {
  selectCategories,
  selectCategoriesIsLoading
} from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'

const Category = () => {
  const { category } = useParams()
  const categories = useSelector(selectCategories)
  const [products, setProducts] = useState([])
  const isLoading = useSelector(selectCategoriesIsLoading)

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  )
}

export default Category
