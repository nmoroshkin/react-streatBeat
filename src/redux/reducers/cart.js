const initialState = {
    cart: [],
};

const ADD_SNEAKERS_TO_CART = 'ADD_SNEAKERS_TO_CART';
const REMOVE_SNEAKERS_FROM_CART = 'REMOVE_SNEAKERS_FROM_CART';
const FETCH_CART = 'FETCH_CART';
const REMOVE_ALL = 'REMOVE_ALL';

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SNEAKERS_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_SNEAKERS_FROM_CART:
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        case FETCH_CART:
            return { ...state, cart: action.payload };
        case REMOVE_ALL:
            return { ...state, cart: [] };
        default:
            return state;
    }
};

export default cart;
