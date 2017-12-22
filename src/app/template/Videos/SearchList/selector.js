/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogVideoSearch = (state) => state.blogVideoSearchList;

export const selectVisibleVideoSearchPage = createSelector(
    [getBlogVideoSearch],
    (blogVideoSearch) => blogVideoSearch
);
