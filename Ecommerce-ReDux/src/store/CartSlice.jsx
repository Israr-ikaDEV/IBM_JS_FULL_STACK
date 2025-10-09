import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {items: []},
    reducers: {
        addToCart: (state, action) => {
            console.log(state, action);
            state.items.push(action.payload);
           
        },
        removeFromCart: (state, action) => {
                       console.log(state, action);

        },
        clearCart: (state) => {
                      console.log(state, action);

        }
    },
});
console.log(cartSlice);
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
