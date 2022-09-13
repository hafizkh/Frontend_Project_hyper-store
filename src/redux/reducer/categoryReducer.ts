import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../types/category";

const initialState: {
  categoryList: Category[];
} = {
  categoryList: []
};

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories");
    const result = await data.json();
    return result;
  } catch (error) {
    // console.log(error);
  }
});

const categorySlicer = createSlice({
  name: "categoryReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
  }
});

export const categoryReducer = categorySlicer.reducer;