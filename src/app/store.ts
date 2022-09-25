import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./features/productSlice";
import  cartReducer from "./features/cartSlice";
import { categoryReducer } from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    categoryReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;