import { configureStore } from '@reduxjs/toolkit';

import { cart, sneakers, favorites, orders } from './reducers';

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
