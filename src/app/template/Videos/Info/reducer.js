/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_VIDEO_INFO_FETCH,
    FIND_VIDEO_INFO_SUCCESS,
    FIND_VIDEO_INFO_ERROR,
} from './actionTypes';


export default (state = {}, action) => {
    switch (action.type) {
        case FIND_VIDEO_INFO_FETCH: {
            return {
                type: FIND_VIDEO_INFO_FETCH,
                isLoadingList: true
            }
        }
        case FIND_VIDEO_INFO_SUCCESS: {
            return {
                type: FIND_VIDEO_INFO_SUCCESS, data: action.data, params: action.params, isLoadingList: false
            }
        }

        case FIND_VIDEO_INFO_ERROR: {
            return {
                type: FIND_VIDEO_INFO_ERROR,
                err: action.err,
                params: action.params,
                isLoadingList: false
            }
        }

        default: {
            return state;
        }
    }
}
