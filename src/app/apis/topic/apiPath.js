/**
 * Created by chenshiying on 17/9/28.
 */
import {topicServer} from '../utils/apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: topicServer + apiRelativePath.findForPage,
    findById: topicServer + apiRelativePath.findById
};

export default apiPath;
