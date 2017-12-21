/**
 * Created by chenshiying on 17/9/25.
 */
import {FIND_TOPIC_FOR_PAGE, FIND_TOPIC_FOR_PAGE_FETCH, FIND_TOPIC_FOR_PAGE_SUCCESS, FIND_TOPIC_FOR_PAGE_ERROR} from './actionTypes';

export const findTopicForPage = (params) => {
    return {
        type: FIND_TOPIC_FOR_PAGE,
        params: params
    }
};

export const findTopicForPageFetch = () => ({
    type: FIND_TOPIC_FOR_PAGE_FETCH
});

export const findTopicForPageSuccess = (data, params) => ({
    type: FIND_TOPIC_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findTopicForPageError = (err, params) => ({
    type: FIND_TOPIC_FOR_PAGE_ERROR,
    err: err,
    params: params
});
