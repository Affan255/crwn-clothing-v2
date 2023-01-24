import { Action, ActionWithPayload, createAction } from "../../utils/reducer/reducer.utils"
import { Category, CATEGORY_ACTION_TYPES } from "./category.types"


export type FetchCategoriesStart = Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesFailed = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed
export const fetchCategoriesStart = (): FetchCategoriesStart =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
