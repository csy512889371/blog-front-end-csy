import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import {Layout12} from '../template/Layout';
import UserLayout from '../layouts/UserLayout';
import Home from '../template/Home';
import Intro from '../template/Intro';
import NotFound from './Exception/500';
import Login from '../template/Login';

import Articles from '../template/Articles';
import Topics from '../template/Topics';
import Register from '../template/Register';

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

const NotFoundPage = (props) => {
    return (
        <Layout12 {...props}>
            <NotFound {...props}/>
        </Layout12>
    );
};

const ArticlesPage = (props) => {
    return (
        <Layout12 {...props}>
            <Articles {...props}/>
        </Layout12>
    );
};

const TopicsPage = (props) => {
    return (
        <Layout12 {...props}>
            <Topics {...props}/>
        </Layout12>
    );
};



const LoginPage = (props) => {
    return (
        <UserLayout {...props}>
            <Login {...props}/>
        </UserLayout>
    );
};

const RegisterPage = (props) => {
    return (
        <UserLayout {...props}>
            <Register {...props}/>
        </UserLayout>
    );
};

export default class CRouter extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path="/blog/intro" component={IntroPage}/>
                    <Route path="/blog/community" component={NotFoundPage} />
                    <Route path="/blog/blogger" component={NotFoundPage} />
                    <Route path="/blog/resource" component={NotFoundPage} />

                    <Route path="/user/login" component={LoginPage} />
                    <Route path="/user/register" component={RegisterPage} />

                    <Route path="/articles/doc/:id" component={ArticlesPage} />
                    <Route path="/topics/:id" component={ArticlesPage} />
                </Switch>
            </ConnectedRouter>
        )
    }

}
