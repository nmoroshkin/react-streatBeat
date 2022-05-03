const initialState = {
    items: [],
};

const ADD_ORDER = 'ADD_ORDER';
const RESPONSE_ORDER = 'RESPONSE_ORDER';

const orders = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return { ...state, items: [...state.items, ...action.payload] };
        case RESPONSE_ORDER:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default orders;
