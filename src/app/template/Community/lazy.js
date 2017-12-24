/**
 * Created by chenshiying on 17/9/25.
 */
import communitySubTopicSagas from './sagas';
import communitySubTopicReducer from './reducer';
import view from './views';
import {BlogsReducerNames} from '../constants';
const communitySubTopic = BlogsReducerNames.communitySubTopic;
const reducer = {
    [communitySubTopic]: communitySubTopicReducer
};

const sagas = {
    [communitySubTopic]: communitySubTopicSagas
};

export {sagas, reducer, view};
