import cookie from 'react-cookies';
import request from 'superagent';
import {UcServer} from '../apis/utils/apiServer';

const httpServer = UcServer.uumsServer;

const baseQuestByPost = (basepath, data, callback) => {
    request.post(httpServer + basepath)
        .set('Content-Type', 'application/json')
        .send(data)
        .set('Accept', 'application/json')
        .end((err, res) => {
            callback && callback(err, res);
        });
};

const login = (data, history, nextPathname, remember, callback) => {
    baseQuestByPost('/user/login.do', data, (err, res) => {

        let loginMessage;

        if (err && err.status === '404') {
            loginMessage = {err: '发生404错误：' + res.body.message};
            callback && callback(loginMessage);
        } else if (res) {
            if (res.ok) {
                const result = JSON.parse(res.text);
                if (result.success) {
                    const data = result.data;
                    cookie.save('current-user', data);
                    const loginMessage = {name: 'login', value: result, remember: remember};
                    callback && callback(loginMessage);
                    history.push(nextPathname, null);
                } else {
                    const errMessage = result.errMessage;
                    loginMessage = {err: errMessage};
                    callback && callback(loginMessage);
                }
            } else {
                loginMessage = {err: '请求统一用户服务器失败！'};
                callback && callback(loginMessage);
            }
        } else {
            loginMessage = {err: '请求统一用户服务器失败！'};
            callback && callback(loginMessage);
        }
    });
}

const logout = (appSn, callback) => {
    const user = cookie.load('current-user');
    cookie.remove('current-user');
    baseQuestByPost('/user/logout.do', user ? {...user, appSn} : {appSn});
    callback && callback();
}

const UserServer = {
    login: login,
    logout: logout,
};

export default UserServer;
