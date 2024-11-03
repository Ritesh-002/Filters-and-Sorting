import { createSlice } from '@reduxjs/toolkit'
import products from '../../data.js'
export const productSlice = createSlice({
    name: 'products',
    initialState: products,
    reducers: {

    }
})

// Action creators are generated for each case reducer function
export const {  } = productSlice.actions

export default productSlice.reducer