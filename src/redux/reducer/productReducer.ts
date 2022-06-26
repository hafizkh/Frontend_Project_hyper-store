import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

const initialState: {productList: Product[]} = {
    productList: []
}

export const fetchProducts = createAsyncThunk('fetchProducts',
async () =>{
    const data = await fetch('https://api.escuelajs.co/api/v1/products')
    const result = data.json()
    // console.log(result)
    return result;
}
)

const userSlicer = createSlice({
    name: 'productReducer',
    initialState: initialState ,
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.productList = action.payload;
            })

    }
})
    export default userSlicer.reducer