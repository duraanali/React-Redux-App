import axios from 'axios';

export const FETCH_STARWARS_DATA_START = 'FETCH_STARWARS_DATA_START';
export const FETCH_STARWARS_DATA_SUCCESS = 'FETCH_STARWARS_DATA_SUCCESS';
export const FETCH_STARWARS_DATA_FAILURE = 'FETCH_STARWARS_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_STARWARS_DATA_START });
        axios
            .get('https://swapi.co/api/people/')
            .then(res => {
                console.log('chars', res.data)
                // res.data.data
                dispatch({ type: FETCH_STARWARS_DATA_SUCCESS, payload: res.data.results });
            })
            .catch(err => {
                dispatch({ type: FETCH_STARWARS_DATA_FAILURE, payload: err.response });
            });
    };
};
