import {
    DELETE_NOMINEE,
    ADD_NOMINEE
} from '../actions/types'

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_NOMINEE:
            if(state.includes(action.payload)){
                return state;
            } else {
                return [...state, action.payload];
            }
        case DELETE_NOMINEE:
            return state.filter(item => {
                return item !== action.payload
            });
        default:
            return state;
    }
};