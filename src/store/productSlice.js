import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {baseUrl} from '../utils/apiUrl'




const initialState = {
    data: [],
    status: 'idle',
    error: null,

}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () =>{
    const response = await fetch(baseUrl + `products?limit=0`)
    const data = await response.json()
    return data;
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state, action) =>{
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) =>{
            state.data = action.payload;
            state.status = 'idle';
        })
        .addCase(fetchProducts.rejected, (state, action) =>{
            state.status = 'error';
            state.error = action.error.message;
        })
    }
})


export default productSlice.reducer;
export const selectAllProducts = (state => state.product.data)