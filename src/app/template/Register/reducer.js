/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_USER_ADD_FETCH,
    FIND_USER_ADD_SUCCESS,
    FIND_USER_ADD_ERROR,
    USER_STATE_CLEAR
} from './actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FIND_USER_ADD_FETCH: {
            return {
                type: FIND_USER_ADD_FETCH,
                isLoading: true
            }
        }
        case FIND_USER_ADD_SUCCESS: {
            return {
                type: FIND_USER_ADD_SUCCESS, data: action.data, params: action.params, isLoading: false
            }
        }

        case FIND_USER_ADD_ERROR: {
            return {
                type: FIND_USER_ADD_ERROR,
                err: action.err,
                params: action.params,
                isLoading: false
            }
        }
        case USER_STATE_CLEAR: {
            return {}
        }
        default: {
            return state;
        }
    }
}
