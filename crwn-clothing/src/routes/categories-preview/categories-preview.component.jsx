import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext)
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
