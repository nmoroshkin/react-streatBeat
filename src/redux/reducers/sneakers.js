const initialState = {
    items: [],
    isLoaded: false,
};

const SET_SNEAKERS = 'SET_SNEAKERS';
const SET_LOADED = 'SET_LOADED';

const sneakers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNEAKERS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
};

export default sneakers;
