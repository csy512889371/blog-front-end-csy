/**
 * Created by chenshiying on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../../apis';

import {findTopicForPageFetch, findTopicForPageSuccess, findTopicForPageError} from './actions';
import {FIND_TOPIC_FOR_PAGE} from './actionTypes';

function topicPage(params) {
    const promise = api.topic.findForPage(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchTopicPage(data) {
    const params = data.params;
    try {
        yield put(findTopicForPageFetch());
        const result = yield call(topicPage, params);
        yield put(findTopicForPageSuccess(result, params));
    } catch (e) {
        yield put(findTopicForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_TOPIC_FOR_PAGE, fetchTopicPage);
}

export default sagas;
