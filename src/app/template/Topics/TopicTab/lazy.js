/**
 * Created by chenshiying on 17/9/25.
 */
import topicSagas from './sagas';
import topicReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../../constants';
const topicVideo = BlogsReducerNames.topicVideo;
const reducer = {
    [topicVideo]: topicReducer
};

const sagas = {
    [topicVideo]: topicSagas
};

export {sagas, reducer, view};
