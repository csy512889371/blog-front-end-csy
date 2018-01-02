/**
 * Created by chenshiying on 17/9/28.
 */
import {call, put, takeLatest} from 'redux-saga/effects';
import * as api from '../../apis/index';
import {
    addUserFetch,
    addUserSuccess,
    addUserError
} from './actions';

import {FIND_USER_ADD} from './actionTypes';

function registerUser(params) {
    const promise = api.register.addUser(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch((err) => {
            throw err;
        });
}

function* doRegisterUser(data) {
    const params = data.params;
    try {
        yield put(addUserFetch());
        const result = yield call(registerUser, params);
        yield put(addUserSuccess(result, params));
    } catch (e) {
        yield put(addUserError(e, params));
    }
}


function* sagas() {
    yield takeLatest(FIND_USER_ADD, doRegisterUser)
}

export default sagas;
