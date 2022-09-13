import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./reducer/productReducer";
import  cartReducer from "./reducer/cartReducer";
import { categoryReducer } from "./reducer/categoryReducer";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    categoryReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;