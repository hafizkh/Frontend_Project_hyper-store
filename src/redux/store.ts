import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./reducer/productReducer";
import  cartReducer from "./reducer/cartReducer";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;