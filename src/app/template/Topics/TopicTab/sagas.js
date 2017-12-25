/**
 * Created by chenshiying on 17/9/28.
 */
import {call, put, takeLatest} from 'redux-saga/effects';
import * as api from '../../../apis';

import {
    findTopicVideoForPageFetch,
    findTopicVideoForPageSuccess,
    findTopicVideoForPageError,
    findMoreTopicVideoForPageSuccess,
    findMoreTopicVideoForPageFetch
} from './actions';
import {FIND_TOPIC_VIDEO_FOR_PAGE, FIND_MORE_TOPIC_VIDEO_FOR_PAGE} from './actionTypes';

function topicVideoPage(params) {
    const promise = api.video.findForPageByTopic(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            throw err;
        });
}

function* fetchTopicVideoPage(data) {
    const params = data.params;
    try {
        yield put(findTopicVideoForPageFetch());
        const result = yield call(topicVideoPage, params);
        yield put(findTopicVideoForPageSuccess(result, params));
    } catch (e) {
        yield put(findTopicVideoForPageError(e, params));
    }
}

function* fetchMoreTopicVideoPage(data) {
    const params = data.params;
    try {
        yield put(findMoreTopicVideoForPageFetch());
        const result = yield call(topicVideoPage, params);
        yield put(findMoreTopicVideoForPageSuccess(result, params));
    } catch (e) {
        yield put(findTopicVideoForPageError(e, params));
    }
}


function* sagas() {
    yield takeLatest(FIND_TOPIC_VIDEO_FOR_PAGE, fetchTopicVideoPage);
    yield takeLatest(FIND_MORE_TOPIC_VIDEO_FOR_PAGE, fetchMoreTopicVideoPage);
}

export default sagas;
