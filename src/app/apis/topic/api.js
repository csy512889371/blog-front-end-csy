/**
 * Created by chenshiying on 17/9/28.
 */
import * as request from '../utils/request';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const findById = (data) => request.post(apiPath.findById, data);
const findAllCategory = (data) => request.post(apiPath.findAllCategory, data);

export {findForPage, findById, findAllCategory};



