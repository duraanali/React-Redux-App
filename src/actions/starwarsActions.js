import axios from 'axios';

export const FETCH_STARWARS_DATA_START = 'FETCH_STARWARS_DATA_START';
export const FETCH_STARWARS_DATA_SUCCESS = 'FETCH_STARWARS_DATA_SUCCESS';
export const FETCH_STARWARS_DATA_FAILURE = 'FETCH_STARWARS_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_STARWARS_DATA_START });

    axios
        .get("https://swapi.co/api/people")
        .then(res => {
            dispatch({ type: FETCH_STARWARS_DATA_SUCCESS, payload: res.data.results });
            console.log(res)
        })
        .catch(err => console.log(err));
};
