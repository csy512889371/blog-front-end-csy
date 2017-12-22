/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_VIDEO_SEARCH_FOR_PAGE, FIND_VIDEO_SEARCH_FOR_PAGE_FETCH, FIND_VIDEO_SEARCH_FOR_PAGE_SUCCESS, FIND_VIDEO_SEARCH_FOR_PAGE_ERROR,
    FIND_MORE_VIDEO_SEARCH_FOR_PAGE,FIND_MORE_VIDEO_SEARCH_FOR_PAGE_SUCCESS,FIND_MORE_VIDEO_SEARCH_FOR_PAGE_FETCH
} from './actionTypes';

export const findVideoSearchForPage = (params) => {
    return {
        type: FIND_VIDEO_SEARCH_FOR_PAGE,
        params: params
    }
};

export const findVideoSearchForPageFetch = () => ({
    type: FIND_VIDEO_SEARCH_FOR_PAGE_FETCH
});

export const findVideoSearchForPageSuccess = (data, params) => ({
    type: FIND_VIDEO_SEARCH_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});


export const findVideoSearchForPageError = (err, params) => ({
    type: FIND_VIDEO_SEARCH_FOR_PAGE_ERROR,
    err: err,
    params: params
});


export const findMoreVideoSearchForPage = (params) => {
    return {
        type: FIND_MORE_VIDEO_SEARCH_FOR_PAGE,
        params: params
    }
};

export const findMoreVideoSearchForPageSuccess = (data, params) => ({
    type: FIND_MORE_VIDEO_SEARCH_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findMoreVideoSearchForPageFetch = () => ({
    type: FIND_MORE_VIDEO_SEARCH_FOR_PAGE_FETCH
});
