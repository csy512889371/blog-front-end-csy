/**
 * Created by chenshiying on 17/9/28.
 */
import * as request from '../utils/request';
import apiPath from './apiPath';

const addUser = (data) => request.post(apiPath.addUser, data);


export {addUser};



