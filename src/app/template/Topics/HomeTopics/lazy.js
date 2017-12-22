/**
 * Created by chenshiying on 17/9/25.
 */
import topicSagas from './sagas';
import topicReducer from './reducer';
import view from './views/Topics';
import {BlogsReducerNames} from '../../constants';
const topicName = BlogsReducerNames.topicHome;
const reducer = {
    [topicName]: topicReducer
};

const sagas = {
    [topicName]: topicSagas
};

export {sagas, reducer, view};
