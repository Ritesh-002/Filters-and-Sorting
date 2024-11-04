import { createSlice } from '@reduxjs/toolkit'
import products from '../../data.js'
const initialState = {
    products: [...products],        // Current products
    originalProducts: [...products] // Original products
};
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            console.log('state.products', state.products)
            console.log('state', state)
            switch (action.payload) {
                case 'Asc':
                    state.products = state.products.slice().sort((a, b) => a.price - b.price);
                    break;
                case '':
                    state.products = state.originalProducts.slice();
                    break;
                case 'Des':
                    state.products = state.products.slice().sort((a, b) => b.price - a.price)
                    break;
                case 'Des-Pop':
                    state.products = state.products.slice().sort((a, b) => b.rating - a.rating)
                    break;
                case 'Des-time':
                    state.products = state.products.slice().sort((a, b) => new Date(b.arrivalTime) - new Date(a.arrivalTime))
                    break;
                default:
                    break;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { sortProducts } = productSlice.actions

export default productSlice.reducer