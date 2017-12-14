import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const logger = createLogger();
const history = createHistory();
const rMiddleware = routerMiddleware(history);

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [rMiddleware, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares, logger)
);

export default function configureStore() {
    let store = createStore(createReducer(), {}, storeEnhancers);
    store.asyncReducers = {};
    store.asyncSagas = {};
    store.sagaMiddleware = sagaMiddleware;
    return store;
}


export function injectAsyncStore(store, asyncReducers, sagas) {
    asyncReducers && injectAsyncReducers(store, asyncReducers);
    sagas && injectAsyncSagas(store, sagas);
}

export function injectAsyncReducers(store, asyncReducers) {
    let flag = false;
    for (let key in asyncReducers) {
        if(Object.prototype.hasOwnProperty.call(asyncReducers, key)) {
            if (!store.asyncReducers[key]) {
                store.asyncReducers[key] = asyncReducers[key];
                flag = true;
            }
        }
    }
    flag && store.replaceReducer(createReducer(store.asyncReducers));
}

export function injectAsyncSagas(store, sagas) {
    for (let key in sagas) {
        if(Object.prototype.hasOwnProperty.call(sagas, key)) {
            if (!store.asyncSagas[key]) {
                store.asyncSagas[key] = sagas[key];
                store.sagaMiddleware.run(sagas[key]);
            }
        }
    }
}





