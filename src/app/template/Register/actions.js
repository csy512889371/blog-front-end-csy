/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_USER_ADD, FIND_USER_ADD_FETCH, FIND_USER_ADD_SUCCESS, FIND_USER_ADD_ERROR, USER_STATE_CLEAR
} from './actionTypes';

export const clearState = () => {
    return {
        type: USER_STATE_CLEAR
    }
}

export const addUser = (params) => {
    return {
        type: FIND_USER_ADD,
        params: params
    }
};

export const addUserFetch = () => ({
    type: FIND_USER_ADD_FETCH
});

export const addUserSuccess = (data, params) => ({
    type: FIND_USER_ADD_SUCCESS,
    data: data,
    params: params
});


export const addUserError = (err, params) => ({
    type: FIND_USER_ADD_ERROR,
    err: err,
    params: params
});
