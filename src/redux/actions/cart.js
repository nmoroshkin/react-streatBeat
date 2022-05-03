import axios from 'axios';

const ADD_SNEAKERS_TO_CART = 'ADD_SNEAKERS_TO_CART';
const REMOVE_SNEAKERS_FROM_CART = 'REMOVE_SNEAKERS_FROM_CART';
const FETCH_CART = 'FETCH_CART';
const REMOVE_ALL = 'REMOVE_ALL';

export const addSneakersToCart = (obj) => ({
    type: ADD_SNEAKERS_TO_CART,
    payload: obj,
});

export const removeSneakersFromCart = (id) => ({
    type: REMOVE_SNEAKERS_FROM_CART,
    payload: id,
});

export const responseCart = (obj) => ({
    type: FETCH_CART,
    payload: obj,
});

export const removeAll = () => ({
    type: REMOVE_ALL,
});

export const fecthCart = () => (dispatch) => {
    axios.get(`/cart/`).then(({ data }) => dispatch(responseCart(data)));
};
