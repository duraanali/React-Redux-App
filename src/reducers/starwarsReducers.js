import {
    FETCH_STARWARS_DATA_START,
    FETCH_STARWARS_DATA_SUCCESS,

} from '../actions';

const initialState = {
    chars: []
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_STARWARS_DATA_START:
            return {
                ...state,
            };
        case FETCH_STARWARS_DATA_SUCCESS:
            return {
                ...state,
                chars: action.payload,

            };
        default:
            return state;
    }
};
