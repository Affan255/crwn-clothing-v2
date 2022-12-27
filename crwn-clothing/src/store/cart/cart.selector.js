import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cart

const selectCart = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectShowCartDropDown = createSelector(
    [selectCartReducer],
    (cart) => cart.showCartDropDown
)

export const selectCartItems = createSelector(
    [selectCart],
    (cartItems) => {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
        const total = cartItems.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        )
        return { cartItems: cartItems, total: total, totalItems: totalItems }
    }
)

