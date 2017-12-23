/**
 * Created by chenshiying on 17/9/25.
 */
import topicVideoSagas from './sagas';
import topicVideoReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../../constants';
const topicVideo = BlogsReducerNames.topicVideo;
const reducer = {
    [topicVideo]: topicVideoReducer
};

const sagas = {
    [topicVideo]: topicVideoSagas
};

export {sagas, reducer, view};
