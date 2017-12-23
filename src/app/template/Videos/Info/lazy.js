/**
 * Created by chenshiying on 17/9/25.
 */
import videoInfoSagas from './sagas';
import videoInfoReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../../constants';
const videoInfoList = BlogsReducerNames.videoInfo;
const reducer = {
    [videoInfoList]: videoInfoReducer
};

const sagas = {
    [videoInfoList]: videoInfoSagas
};

export {sagas, reducer, view};
