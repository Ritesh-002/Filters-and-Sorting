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
        searchProducts: (state, action) => {
            console.log('action', action)
            console.log('action.payload', action.payload)
            const query = action.payload.trim().toLowerCase();
            // state.products.filter((el, idx) => {
            //     // console.log('el', el);
            //     el.name.startsWith(action.payload)
            // })
            const temp = [];
            const searchedProducts = state.products.filter((item) => {
                if(item.name.toLowerCase().startsWith(query)) {
                    return item;
                }
            })
            if(query) {
                state.products = searchedProducts
            } else {
                state.products = [...initialState.products]
            }
        },
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
export const { sortProducts, searchProducts } = productSlice.actions

export default productSlice.reducer