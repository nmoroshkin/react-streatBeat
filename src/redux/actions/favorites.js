import axios from 'axios';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const FETCH_FAVORITE = 'FETCH_FAVORITE';

export const addFavorite = (item) => ({
    type: ADD_FAVORITE,
    payload: item,
});

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id,
});

const responseFavorite = (items) => ({
    type: FETCH_FAVORITE,
    payload: items,
});

export const fetchFavorite = () => (dispatch) => {
    axios.get('/favorites/').then(({ data }) => dispatch(responseFavorite(data)));
};
