import { FETCH_RESULTS } from '../actions/types';
import axios from 'axios';

const getResults = results => ({
    type: FETCH_RESULTS,
    payload: results
})

// Thunk Creators
export const getResultsThunk = query => dispatch => {
    axios.get(`http://www.omdbapi.com/?s=${query}&apikey=dcf6bc4b`)
        .then(res => res.data)
        .then(results => dispatch(getResults(results.Search)))
        .catch(console.error)
}