import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer } from './directory.styles.jsx'

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  )
}

export default Directory
