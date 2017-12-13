import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from '../template/Layout';
const history = createBrowserHistory();


export default class CRouter extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact strict path="/" component={Layout}/>
                </Switch>
            </ConnectedRouter>
        )
    }

}
