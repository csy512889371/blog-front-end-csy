import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import moment from 'moment';
import registerServiceWorker from './registerServiceWorker';

moment.locale('zh-cn');

const render = () => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <App/>
        ,
        document.getElementById('root')
    )
}
render();


// Webpack Hot Module Replacement API
if (module.hot) {

    // 隐藏You cannot change <Router routes>; it will be ignored 错误提示
    // react-hot-loader 使用在react-router 3.x上引起的提示，react-router 4.x不存在
    // 详情可参照https://github.com/gaearon/react-hot-loader/issues/298
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
        if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args);
        }
    };
    /*    module.hot.accept('./app/route', () => {
            console.log("热加载开始生效");
            render(CRouter);
        })*/

    module.hot.accept();
}

// ReactDOM.render(
//     <AppContainer>
//         <Provider store={store}>
//             <CRouter store={store} />
//         </Provider>
//     </AppContainer>
//  ,
//   document.getElementById('root')
// );
registerServiceWorker();
