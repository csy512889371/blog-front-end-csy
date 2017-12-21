/**
 * Created by chenshiying on 17/1/5.
 */
import {appSn} from './appInfo';
import {loginUser, logout} from './user';

const authorization = () => {
    const user = loginUser();
    let Authorization = {};
    Authorization.appSn = appSn;
    user && (Authorization.token = user.token);
    return JSON.stringify(Authorization);
};

const headers = () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", authorization());
    return headers;
};

const reqGetBrace = (method) => {
    return {
        method: method,
        headers: headers(),
        mode: 'cors',
        cache: 'default'
    };
};

const reqPostBrace = (method, params = {}) => {
    let postBody = {
        method: method,
        headers: headers(),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(params)
    };
    return postBody;
};

const promise = (req) => {
    return new Promise(function(resolve, reject) {
            fetch(req).then( (res) => {
                const status = res.status;
                if (status === 4011) {
                    logout(null, window.location.pathname);
                }
                resolve(res);
            }).catch( (err) => {
                reject(err);
            });
        }
    );
};

const get = (apiPath, data) => {
    const req = new Request(apiPath, reqGetBrace('GET', data));
    return promise(req);
};

const post = (apiPath, data) => {
    const req = new Request(apiPath, reqPostBrace('POST', data));
    return promise(req);
};

export {get, post};
