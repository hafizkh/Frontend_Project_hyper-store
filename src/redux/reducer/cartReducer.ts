import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState: { productList: Product[] } = {
  productList: [],
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      state.productList.push(action.payload);
    },
    removeItem(state, action) {
      state.productList = state.productList.filter(
        (item) => item.id === action.payload
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
