import {combineReducers} from 'redux';
import nominees from './nominees';
import results from './results';

export default combineReducers({
    nominees,
    results
});
