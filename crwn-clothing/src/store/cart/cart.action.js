import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartIems = (payload) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload)
export const setShowCartDropDown = (show) => createAction(CART_ACTION_TYPES.SHOW_CART_DROP_DOWN, show);

const addCartItem = (cartItems, productToAdd) => {
    const existinCartItem = cartItems.find((item) => item.id === productToAdd.id)
    if (existinCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
    const existinCartItem = cartItems.find(
        (item) => item.id === productToRemove.id
    )
    const quantity = existinCartItem.quantity
    if (quantity > 1) {
        return cartItems.map((item) =>
            item.id === productToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    }
    return cartItems.filter((item) => item.id !== productToRemove.id)
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartIrems = addCartItem(cartItems, productToAdd)
    return setCartIems(newCartIrems);
}
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartIrems = removeCartItem(cartItems, productToRemove)
    return setCartIems(newCartIrems)
}

export const deleteCartItem = (cartItems, itemToDelete) => {
    const newCartIrems = cartItems.filter((item) => item.id !== itemToDelete.id)
    return setCartIems(newCartIrems)
}