import { configureStore } from "@reduxjs/toolkit";  
import cartReducer from './CartSlice.jsx';

export const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
    },
});
export default store;