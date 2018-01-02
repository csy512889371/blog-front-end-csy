/**
 * Created by chenshiying on 17/9/25.
 */
import registerUserSagas from './sagas';
import registerUserReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../constants';

const registerUser = BlogsReducerNames.registerUser;
const reducer = {
    [registerUser]: registerUserReducer
};

const sagas = {
    [registerUser]: registerUserSagas
};

export {sagas, reducer, view};
