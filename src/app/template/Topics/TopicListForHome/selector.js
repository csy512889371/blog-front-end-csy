/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogTopic = (state) => state.blogTopic;

export const selectVisibleTopicPage = createSelector(
    [getBlogTopic],
    (blogTopic) => blogTopic
);
