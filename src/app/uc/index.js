import UserServer from './userServer';

const init = (callback) => {
    callback();
};

let UnitConfig = {
    login: UserServer.login,
    logout: UserServer.logout,
    init: init
};

export default UnitConfig;
