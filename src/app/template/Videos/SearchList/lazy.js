/**
 * Created by chenshiying on 17/9/25.
 */
import videoSearchSagas from './sagas';
import videoSearchReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../../constants';
const videoSearchList = BlogsReducerNames.videoSearchList;
const reducer = {
    [videoSearchList]: videoSearchReducer
};

const sagas = {
    [videoSearchList]: videoSearchSagas
};

export {sagas, reducer, view};
