import {
    DELETE_NOMINEE,
    ADD_NOMINEE
} from './types';

//Action creators
export const deleteNominee = nominee => ({
    type: DELETE_NOMINEE,
    payload: nominee
});

export const addNominee = nominee => ({
    type: ADD_NOMINEE,
    payload: nominee
});
