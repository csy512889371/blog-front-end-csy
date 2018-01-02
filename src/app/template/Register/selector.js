/**
 * Created by chenshiying on 17/9/26.
 */
import {createSelector} from 'reselect';

const getBlogRegisterUser = (state) => state.blogRegisterUser;

export const selectBlogRegisterUser = createSelector(
    [getBlogRegisterUser],
    (blogRegisterUser) => blogRegisterUser
);
