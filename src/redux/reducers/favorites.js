const initialState = {
    favorites: [],
};

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const FETCH_FAVORITE = 'FETCH_FAVORITE';

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.id !== action.payload),
            };
        case FETCH_FAVORITE:
            return { ...state, favorites: action.payload };
        default:
            return state;
    }
};

export default favorites;
