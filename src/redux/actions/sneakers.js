import axios from 'axios';

const SET_SNEAKERS = 'SET_SNEAKERS';
const SET_LOADED = 'SET_LOADED';

export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
});

export const setSneakers = (items) => ({
    type: SET_SNEAKERS,
    payload: items,
});

export const fetchSneakers = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/sneakers`).then(({ data }) => dispatch(setSneakers(data)));
};
