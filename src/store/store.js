import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        kcart: cartSlice,
    }
});

export default store;