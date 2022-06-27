import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'loading',
};

export const fetchSneakers = createAsyncThunk('fetch/sneakers', async () => {
    const { data } = await axios.get(`/sneakers`);
    return data;
});

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    extraReducers: {
        [fetchSneakers.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchSneakers.fulfilled]: (state, action) => {
            state.status = 'succeed';
            state.items = action.payload;
        },
    },
});

export default sneakersSlice.reducer;
