import { createSelector } from 'reselect'
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state): CategoriesState => state.categories;

const selectCategoriesArray = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
export const selectCategories = createSelector(
    [selectCategoriesArray],
    (categories): CategoryMap => categories
        .reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc
        }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)



