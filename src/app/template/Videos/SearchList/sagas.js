/**
 * Created by chenshiying on 17/9/28.
 */
import {call, put, takeLatest} from 'redux-saga/effects';
import * as api from '../../../apis/index';
import {
    findVideoSearchForPageFetch,
    findVideoSearchForPageSuccess,
    findVideoSearchForPageError,
    findMoreVideoSearchForPageSuccess,
    findMoreVideoSearchForPageFetch
} from './actions';
import {FIND_VIDEO_SEARCH_FOR_PAGE, FIND_MORE_VIDEO_SEARCH_FOR_PAGE} from './actionTypes';

function topicPage(params) {
    const promise = api.video.findForPageByName(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            throw err;
        });
}

function* fetchVideoSearchPage(data) {
    const params = data.params;
    try {
        yield put(findVideoSearchForPageFetch());
        const result = yield call(topicPage, params);
        yield put(findVideoSearchForPageSuccess(result, params));
    } catch (e) {
        yield put(findVideoSearchForPageError(e, params));
    }
}

function* fetchMoreVideoSearchPage(data) {
    const params = data.params;
    try {
        yield put(findMoreVideoSearchForPageFetch());
        const result = yield call(topicPage, params);
        yield put(findMoreVideoSearchForPageSuccess(result, params));
    } catch (e) {
        yield put(findVideoSearchForPageError(e, params));
    }
}


function* sagas() {
    yield takeLatest(FIND_VIDEO_SEARCH_FOR_PAGE, fetchVideoSearchPage);
    yield takeLatest(FIND_MORE_VIDEO_SEARCH_FOR_PAGE, fetchMoreVideoSearchPage);
}

export default sagas;
