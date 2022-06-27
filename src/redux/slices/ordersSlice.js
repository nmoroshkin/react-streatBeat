import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const fetchOrder = createAsyncThunk('fetch/orders', async () => {
    const { data } = await axios.get('/orders/');
    return data;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.items.push(action.payload);
        },
    },
    extraReducers: {
        [fetchOrder.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
