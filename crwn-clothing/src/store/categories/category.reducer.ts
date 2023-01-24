import { CategoryAction } from "./category.action"
import { Category, CATEGORY_ACTION_TYPES } from "./category.types"

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoryAction) => {

    switch (action.type) {
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}