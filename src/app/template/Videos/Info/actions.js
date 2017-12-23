/**
 * Created by chenshiying on 17/9/25.
 */
import {
    FIND_VIDEO_INFO, FIND_VIDEO_INFO_FETCH, FIND_VIDEO_INFO_SUCCESS, FIND_VIDEO_INFO_ERROR
} from './actionTypes';

export const findVideoInfo = (params) => {
    return {
        type: FIND_VIDEO_INFO,
        params: params
    }
};

export const findVideoInfoFetch = () => ({
    type: FIND_VIDEO_INFO_FETCH
});

export const findVideoInfoSuccess = (data, params) => ({
    type: FIND_VIDEO_INFO_SUCCESS,
    data: data,
    params: params
});


export const findVideoInfoError = (err, params) => ({
    type: FIND_VIDEO_INFO_ERROR,
    err: err,
    params: params
});

