import axios from 'axios';

const ADD_ORDER = 'ADD_ORDER';
const RESPONSE_ORDER = 'RESPONSE_ORDER';

export const addOrder = (obj) => ({
    type: ADD_ORDER,
    payload: obj,
});

const responseOrder = (obj) => ({
    type: RESPONSE_ORDER,
    payload: obj,
});

export const fetchOrder = () => (dispatch) => {
    axios.get('/orders/').then(({ data }) => dispatch(responseOrder(data)));
};
