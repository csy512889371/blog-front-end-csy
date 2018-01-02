import React, {Component} from 'react';
import {Switch, Route} from 'dva/router';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import {Layout12} from '../template/Layout';
import {view as TopicTab} from '../template/Topics/TopicTab/index';
import {view as SearchList} from '../template/Videos/SearchList';
import {view as Videos} from '../template/Videos/Info';

import UserLayout from '../layouts/UserLayout';
import Home from '../template/Home';
import Intro from '../template/Intro';
import NotFound from './Exception/500';
import {view as Login} from '../template/Login';

import {view as Register} from '../template/Register';
import {view as Community} from '../template/Community';
import Reset from '../template/Reset';
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


const SearchListPage = (props) => {
    return (
        <Layout12 {...props}>
            <SearchList {...props}/>
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

const VideosPage = (props) => {
    return (
        <Layout12 {...props}>
            <Videos {...props}/>
        </Layout12>
    );
};

const TopicTabPage = (props) => {
    return (
        <Layout12 {...props}>
            <TopicTab {...props}/>
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

const ResetPage = (props) => {
    return (
        <UserLayout {...props}>
            <Reset {...props}/>
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

const CommunityPage = (props) => {
    return (
        <Layout12 {...props}>
            <Community {...props}/>
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
                    <Route path="/blog/community/:type" component={CommunityPage}/>
                    <Route path="/blog/blogger" component={NotFoundPage}/>
                    <Route path="/blog/resource" component={NotFoundPage}/>
                    <Route path="/video/search" component={SearchListPage}/>

                    <Route path="/user/login" component={LoginPage}/>
                    <Route path="/user/register" component={RegisterPage}/>
                    <Route path="/user/reset" component={ResetPage}/>

                    <Route path="/videos/doc/:id" component={VideosPage}/>
                    <Route path="/topics/:type/:id" component={TopicTabPage}/>
                </Switch>
            </ConnectedRouter>
        )
    }

}
