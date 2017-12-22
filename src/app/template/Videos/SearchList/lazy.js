/**
 * Created by chenshiying on 17/9/25.
 */
import topicSagas from './sagas';
import topicReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../../constants';
const videoSearchList = BlogsReducerNames.videoSearchList;
const reducer = {
    [videoSearchList]: topicReducer
};

const sagas = {
    [videoSearchList]: topicSagas
};

export {sagas, reducer, view};
