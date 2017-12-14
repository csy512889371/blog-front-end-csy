import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Layout12} from '../template/Layout';
import Home from '../template/Home';
import Intro from '../template/Intro';

const history = createBrowserHistory();

const HomePage = (props) => {
    return (
        <Layout12 {...props}>
            <Home {...props}/>
        </Layout12>
    );
};

const IntroPage = (props) => {
    return (
        <Layout12 {...props}>
            <Intro {...props}/>
        </Layout12>
    );
};

export default class CRouter extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path="/blog/intro" component={IntroPage}/>
                </Switch>
            </ConnectedRouter>
        )
    }

}
