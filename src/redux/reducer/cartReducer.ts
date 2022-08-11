import { createSlice } from "@reduxjs/toolkit";
import { Product,cartItems } from "../../types/product";

const initialState: { productList: Product[];itemsCart:cartItems[] } = {
  productList: [],
  itemsCart:[]
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
        (item) => item.id !== action.payload.id
      );
    },
    addItemInCart(state,action){
      const indexItem = state.itemsCart.findIndex((item)=>item.id === action.payload.id)
      if(indexItem >=0){
        state.itemsCart[indexItem].quantity +=1
      }else{
        const tmp = {...action.payload, quantity:1}
        return{
          ...state,
          itemsCart:[...state.itemsCart, tmp]
        }
      }
    }
  },
});

export const { addItem, removeItem, addItemInCart } = cartSlice.actions;

export default cartSlice.reducer;
