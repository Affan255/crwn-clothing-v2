import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import Spinner from '../../components/spinner/spinner.component'
import {
  selectCategories,
  selectCategoriesIsLoading
} from '../../store/categories/category.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories)
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        ))
      )}
    </>
  )
}

export default CategoriesPreview
