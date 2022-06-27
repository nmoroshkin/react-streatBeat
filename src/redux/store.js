import { configureStore } from '@reduxjs/toolkit';

import { cart, orders, sneakers, favorites } from './slices';

const reducer = {
    cart,
    sneakers,
    favorites,
    orders,
};

const store = configureStore({
    reducer,
});

export default store;
