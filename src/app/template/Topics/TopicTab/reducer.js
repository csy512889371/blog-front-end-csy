/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_TOPIC_VIDEO_FOR_PAGE_FETCH,
    FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS,
    FIND_TOPIC_VIDEO_FOR_PAGE_ERROR,
    FIND_MORE_TOPIC_VIDEO_FOR_PAGE_SUCCESS,
    FIND_MORE_TOPIC_VIDEO_FOR_PAGE_FETCH
} from './actionTypes';

import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case FIND_TOPIC_VIDEO_FOR_PAGE_FETCH: {
            return {
                type: FIND_TOPIC_VIDEO_FOR_PAGE_FETCH,
                isLoadingList: true
            }
        }
        case FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS: {
            return {
                type: FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS, data: action.data, params: action.params, isLoadingList: false
            }
        }

        case FIND_TOPIC_VIDEO_FOR_PAGE_ERROR: {
            return {
                type: FIND_TOPIC_VIDEO_FOR_PAGE_ERROR,
                err: action.err,
                params: action.params,
                isLoadingMore: false,
                isLoadingList: false
            }
        }

        case FIND_MORE_TOPIC_VIDEO_FOR_PAGE_FETCH: {
            return {
                type: FIND_MORE_TOPIC_VIDEO_FOR_PAGE_FETCH,
                ...state,
                isLoadingMore: true
            }
        }

        case FIND_MORE_TOPIC_VIDEO_FOR_PAGE_SUCCESS: {
            let topicDatas = [];
            if (_.has(state, ['data', 'data', 'content'])) {
                topicDatas = _.cloneDeep(state.data.data.content)
            }
            action.data.data.content = _.unionWith(topicDatas, action.data.data.content, (a, b) => a.id === b.id);

            return {
                type: FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS, data: action.data, params: action.params, isLoadingMore: false
            }
        }

        default: {
            return state;
        }
    }
}
