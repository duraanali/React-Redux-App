import {
    FETCH_STARWARS_DATA_START,
    FETCH_STARWARS_DATA_SUCCESS,

} from '../actions';

const initialState = {
    chars: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_STARWARS_DATA_START:
            return {
                ...state,
                error: ''
            };
        case FETCH_STARWARS_DATA_SUCCESS:
            return {
                ...state,
                chars: action.payload,
                error: ''
            };
        default:
            return state;
    }
};
