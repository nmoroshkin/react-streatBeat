import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

export const fetchCart = createAsyncThunk('fetch/cart', async () => {
    const { data } = await axios.get(`/cart/`);
    return data;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addSneakersToCart(state, action) {
            state.cart.push(action.payload);
        },
        removeSneakersFromCart(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        removeAll(state) {
            state.cart = [];
        },
    },
    extraReducers: {
        [fetchCart.fulfilled]: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { addSneakersToCart, removeSneakersFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
