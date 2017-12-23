/**
 * Created by chenshiying on 17/9/25.
 */
import topicHomeSagas from './sagas';
import topicHomeReducer from './reducer';
import view from './views/Topics';
import {BlogsReducerNames} from '../../constants';
const topicName = BlogsReducerNames.topicHome;
const reducer = {
    [topicName]: topicHomeReducer
};

const sagas = {
    [topicName]: topicHomeSagas
};

export {sagas, reducer, view};
