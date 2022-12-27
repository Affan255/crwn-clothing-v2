import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { selectCategories } from '../../store/categories/category.selector'

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories)
  return (
    <>
      {Object.keys(categories).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categories[title]}
        />
      ))}
    </>
  )
}

export default CategoriesPreview
