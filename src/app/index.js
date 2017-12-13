import React from 'react';
import CRouter from './route/index';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import configureStore from './Store';

if (typeof window !== 'undefined') {
    console.log('*******************8');
    require('./static/style');
}

let store = configureStore();

export default () => {
    return (
        <AppContainer>
            <Provider store={store}>
                <div className="main-wrapper">
                    <CRouter/>
                </div>
            </Provider>
        </AppContainer>
    )
}
