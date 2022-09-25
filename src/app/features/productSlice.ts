import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

const initialState: { productList: Product[] } = {
  productList: [],
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const result = data.json();
  return result;
});
export const fetchProductsByCategory = createAsyncThunk(
  "fetchProductsByCategory",
  async (categoryId: number) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );
      const result = await data.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.productList.push(action.payload);
    },
    updateProduct(state, action) {
      state.productList.filter((product) => {
        if (product.id === action.payload.id) {
          product = {
            ...product,
            ...action.payload.update,
          };
          return product;
        }
      });
    },
    findProduct(state, action) {
      state.productList.filter((product) => {
        if (product.title.toLowerCase() === action.payload) {
          return state;
        }
      });
    },
    sortByPrice(state, action) {
      state.productList.sort((a, b) => a.price - b.price);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.productList = action.payload;
      });
  },
});

export default productSlice.reducer;
export const { addProduct, updateProduct, findProduct, sortByPrice } =
  productSlice.actions;
