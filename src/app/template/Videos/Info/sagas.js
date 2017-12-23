/**
 * Created by chenshiying on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../../apis/index';

import {findVideoInfoFetch, findVideoInfoSuccess, findVideoInfoError} from './actions';
import {FIND_VIDEO_INFO} from './actionTypes';

function videoInfo(params) {
    const promise = api.video.findById(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchVideoInfo(data) {
    const params = data.params;
    try {
        yield put(findVideoInfoFetch());
        const result = yield call(videoInfo, params);
        yield put(findVideoInfoSuccess(result, params));
    } catch (e) {
        yield put(findVideoInfoError(e, params));
    }
}


function* sagas() {
    yield takeLatest(FIND_VIDEO_INFO, fetchVideoInfo);
}

export default sagas;
