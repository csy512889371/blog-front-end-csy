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
            history.push('/login?returnPath=' + pathname, {nextPathname: pathname}) :
            window.location.href = '/login?returnPath=' + pathname;
    });
};

const goToLogin = (history, pathname) => {
    UnitConfig.logout(appSn, () => {
        history.push('/login?returnPath=' + pathname, {nextPathname: pathname});
    });
};

export {loginUser, isLogin, logout, goToLogin};
