/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE, FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_FETCH, FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_SUCCESS, FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_ERROR,
    FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE,FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE_SUCCESS,FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE_FETCH
} from './actionTypes';

export const findCommunitySubTopicForPage = (params) => {
    return {
        type: FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE,
        params: params
    }
};

export const findCommunitySubTopicForPageFetch = () => ({
    type: FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_FETCH
});

export const findCommunitySubTopicForPageSuccess = (data, params) => ({
    type: FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});


export const findCommunitySubTopicForPageError = (err, params) => ({
    type: FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE_ERROR,
    err: err,
    params: params
});


export const findMoreCommunitySubTopicForPage = (params) => {
    return {
        type: FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE,
        params: params
    }
};

export const findMoreCommunitySubTopicForPageSuccess = (data, params) => ({
    type: FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findMoreCommunitySubTopicForPageFetch = () => ({
    type: FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE_FETCH
});
