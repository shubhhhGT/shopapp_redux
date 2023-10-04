import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

// Configuring the Redux store by combining reducers.
export const Store = configureStore({
    reducer:{
        // Assigning the CartSlice reducer to the 'cart' key in the store's state.
        cart : CartSlice,
    }
})