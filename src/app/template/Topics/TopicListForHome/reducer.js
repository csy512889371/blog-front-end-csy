/**
 * Created by chenshiying on 17/9/25.
 */
import {FIND_TOPIC_FOR_PAGE_FETCH, FIND_TOPIC_FOR_PAGE_SUCCESS, FIND_TOPIC_FOR_PAGE_ERROR} from './actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FIND_TOPIC_FOR_PAGE_FETCH: {
            return {
                type: FIND_TOPIC_FOR_PAGE_FETCH
            }
        }
        case FIND_TOPIC_FOR_PAGE_SUCCESS: {
            return {
                type: FIND_TOPIC_FOR_PAGE_SUCCESS, data: action.data, params: action.params
            }
        }
        case FIND_TOPIC_FOR_PAGE_ERROR: {
            return {
                type: FIND_TOPIC_FOR_PAGE_ERROR, err: action.err, params: action.params
            }
        }
        default: {
            return state;
        }
    }
}
