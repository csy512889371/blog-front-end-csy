/**
 * Created by chenshiying on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../apis/index';

import {findCommunitySubTopicForPageFetch, findCommunitySubTopicForPageSuccess, findCommunitySubTopicForPageError,findMoreCommunitySubTopicForPageSuccess, findMoreCommunitySubTopicForPageFetch} from './actions';
import {FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE, FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE} from './actionTypes';

function topicVideoPage(params) {
    const promise = api.video.findForPageByTopic(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchCommunitySubTopicPage(data) {
    const params = data.params;
    try {
        yield put(findCommunitySubTopicForPageFetch());
        const result = yield call(topicVideoPage, params);
        yield put(findCommunitySubTopicForPageSuccess(result, params));
    } catch (e) {
        yield put(findCommunitySubTopicForPageError(e, params));
    }
}

function* fetchMoreCommunitySubTopicPage(data) {
    const params = data.params;
    try {
        yield put(findMoreCommunitySubTopicForPageFetch());
        const result = yield call(topicVideoPage, params);
        yield put(findMoreCommunitySubTopicForPageSuccess(result, params));
    } catch (e) {
        yield put(findCommunitySubTopicForPageError(e, params));
    }
}


function* sagas() {
    yield takeLatest(FIND_COMMUNITY_SUB_TOPIC_FOR_PAGE, fetchCommunitySubTopicPage);
    yield takeLatest(FIND_MORE_COMMUNITY_SUB_TOPIC_FOR_PAGE, fetchMoreCommunitySubTopicPage);
}

export default sagas;
