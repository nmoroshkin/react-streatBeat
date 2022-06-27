import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    favorites: [],
};

export const fetchFavorite = createAsyncThunk('fetch/favorites', async () => {
    const { data } = await axios.get('/favorites/');
    return data;
});

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.favorites.push(action.payload);
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: {
        [fetchFavorite.fulfilled]: (state, action) => {
            state.favorites = action.payload;
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
