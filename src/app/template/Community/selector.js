/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogCommunitySubTopic = (state) => state.blogCommunitySubTopic;

export const selectVisibleCommunitySubTopicPage = createSelector(
    [getBlogCommunitySubTopic],
    (blogCommunitySubTopic) => blogCommunitySubTopic
);
