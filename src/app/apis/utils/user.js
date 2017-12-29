import cookie from 'react-cookies';
import {appSn} from './appInfo';
import UnitConfig from '../../uc/index';

const loginUser = () => {
    return cookie.load('current-user');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'object';
};

const logout = (history, pathname) => {
    UnitConfig.logout(appSn, () => {
        history ?
            history.push('/user/login?returnPath=' + pathname, {nextPathname: pathname}) :
            window.location.href = '/user/login?returnPath=' + pathname;
    });
};

const goToLogin = (history, pathname) => {
    UnitConfig.logout(appSn, () => {
        history.push('/user/login?returnPath=' + pathname, {nextPathname: pathname});
    });
};

export {loginUser, isLogin, logout, goToLogin};
