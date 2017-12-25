/**
 * Created by chenshiying on 17/9/28.
 */
import * as request from '../utils/request';
import apiPath from './apiPath';

const findForPageByTopic = (data) => request.post(apiPath.findForPageByTopic, data);
const findForPageByName = (data) => request.post(apiPath.findForPageByName, data);
const findById = (data) => request.post(apiPath.findById, data);
const findAllForPage = (data) => request.post(apiPath.findAllForPage, data);


export {findForPageByTopic, findForPageByName, findById, findAllForPage};



