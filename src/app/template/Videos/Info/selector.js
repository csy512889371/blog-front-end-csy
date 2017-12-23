/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogVideoInfo = (state) => state.blogVideoInfo;

export const selectVisibleVideoInfoPage = createSelector(
    [getBlogVideoInfo],
    (blogVideoInfo) => blogVideoInfo
);
