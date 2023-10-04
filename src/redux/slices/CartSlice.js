import {createSlice} from '@reduxjs/toolkit'

// Creating a Redux slice named 'cart' to manage cart-related state.
export const CartSlice = createSlice({
    name: 'cart',
    // The initial state of the cart, an empty array by default.
    initialState: [],
    // Reducer functions to handle actions that modify the cart state.
    reducers:{
        // Reducer for adding an item to the cart.
        add: (state, action) => {
            state.push(action.payload);
        },
        // Reducer for removing an item from the cart.
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

// Exporting action creators for the 'add' and 'remove' reducers.
export const {add, remove} = CartSlice.actions;
// Exporting the reducer function to be used in the Redux store.
export default CartSlice.reducer;