/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogTopicVideo = (state) => state.blogTopicVideo;

export const selectVisibleTopicVideoPage = createSelector(
    [getBlogTopicVideo],
    (blogTopicVideo) => blogTopicVideo
);
