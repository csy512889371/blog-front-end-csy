import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DocumentTitle from 'react-document-title';

class Layout12 extends React.Component {
    render() {
        return (
            <DocumentTitle title={`eva - 架构师的学习社区`}>
                <div className="main-wrapper">
                    <Header {...this.props}/>
                    {this.props.children}
                    <Footer/>
                </div>
            </DocumentTitle>
        )
    }
}


export default Layout12;
