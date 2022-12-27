import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories;

const selectCategoriesArray = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
export const selectCategories = createSelector(
    [selectCategoriesArray],
    (categories) => categories
        .reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc
        }, {})
)

