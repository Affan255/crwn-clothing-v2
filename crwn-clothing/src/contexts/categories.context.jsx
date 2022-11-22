import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null
})

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({})
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategories(categoryMap)
    }
    getCategoriesMap()
  }, [])
  const value = { categories, setCategories }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
