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
            const searchedProducts = state.products.filter((item) => {
                if (item.name.toLowerCase().startsWith(query)) {
                    return item;
                }
            })
            if (query) {
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
        },
        filterProductsByType: (state, action) => {
            console.log('action', action)
            console.log('action.payload', action.payload)
            const query = action.payload;
            if (query.length !== 0) {
                const filteredProducts = state.products.filter(item => query.includes(item.type))
                console.log('filteredProducts.length', filteredProducts.length)
                state.products = filteredProducts;
            } else {
                state.products = [...initialState.products]; // Reset to initial state if no query
            }
        },
        filterProductsByPriceRange: (state, action) => {
            console.log('action in', action)
            console.log('action.payload in price', action.payload)
            const query = action.payload
            if (query.length !== 0) {
                const filteredProducts = state.products.filter(item => item.price >= query[0] && item.price <= query[1])
                console.log('filteredProducts.length', filteredProducts.length)
                state.products = filteredProducts;
            } else {
                state.products = [...initialState.products]; // Reset to initial state if no query
            }
        },
        filterProductsByColor: (state, action) => {
            console.log('action', action)
            console.log('action.payload', action.payload)
            const query = action.payload;
            if (query.length !== 0) {
                const filteredProducts = state.products.filter(item => query.includes(item.color[0]))
                console.log('filteredProducts.length', filteredProducts.length)
                state.products = filteredProducts;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { sortProducts, searchProducts, filterProductsByType, filterProductsByPriceRange, filterProductsByColor } = productSlice.actions

export default productSlice.reducer