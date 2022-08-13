import { createSlice } from "@reduxjs/toolkit";
import { itemsInCart } from "../../types/product";

const initialState: { cartItems: itemsInCart[]; total: number } = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const temp = {
          ...action.payload,
          quantity: 1,
        };

        state.cartItems.push(temp);
      }
    },
    removeItemInCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    removeItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems.splice(itemIndex, 1);
    },
  },
});

export const { addItem, removeItemInCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
