import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../Home';
import DocumentTitle from 'react-document-title';

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstScreen: true
        };
    }

    onEnterChange = (mode) => {
        this.setState({
            isFirstScreen: mode === 'enter',
        });
    };

    render() {
        const {isFirstScreen} = this.state;
        return (
            <DocumentTitle title={`nick - 架构师的学习社区`}>
                <div className="main-wrapper">
                    <Header isFirstScreen={isFirstScreen}/>
                    <Home onEnterChange={this.onEnterChange}/>
                    <Footer/>
                </div>
            </DocumentTitle>
        )
    }

}
