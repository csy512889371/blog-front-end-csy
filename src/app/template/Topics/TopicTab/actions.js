/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_TOPIC_VIDEO_FOR_PAGE, FIND_TOPIC_VIDEO_FOR_PAGE_FETCH, FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS, FIND_TOPIC_VIDEO_FOR_PAGE_ERROR,
    FIND_MORE_TOPIC_VIDEO_FOR_PAGE,FIND_MORE_TOPIC_VIDEO_FOR_PAGE_SUCCESS,FIND_MORE_TOPIC_VIDEO_FOR_PAGE_FETCH
} from './actionTypes';

export const findTopicVideoForPage = (params) => {
    return {
        type: FIND_TOPIC_VIDEO_FOR_PAGE,
        params: params
    }
};

export const findTopicVideoForPageFetch = () => ({
    type: FIND_TOPIC_VIDEO_FOR_PAGE_FETCH
});

export const findTopicVideoForPageSuccess = (data, params) => ({
    type: FIND_TOPIC_VIDEO_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});


export const findTopicVideoForPageError = (err, params) => ({
    type: FIND_TOPIC_VIDEO_FOR_PAGE_ERROR,
    err: err,
    params: params
});


export const findMoreTopicVideoForPage = (params) => {
    return {
        type: FIND_MORE_TOPIC_VIDEO_FOR_PAGE,
        params: params
    }
};

export const findMoreTopicVideoForPageSuccess = (data, params) => ({
    type: FIND_MORE_TOPIC_VIDEO_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findMoreTopicVideoForPageFetch = () => ({
    type: FIND_MORE_TOPIC_VIDEO_FOR_PAGE_FETCH
});
