import React from 'react';
import {Link, Route} from 'dva/router';
import DocumentTitle from 'react-document-title';
import {Icon} from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import './UserLayout.less';

const links = [{
    title: '帮助',
    href: '',
}, {
    title: '隐私',
    href: '',
}, {
    title: '条款',
    href: '',
}];

const copyright = <div>Copyright <Icon type="copyright"/> 2017 nick出品</div>;

class UserLayout extends React.PureComponent {

    getPageTitle() {
        let title = 'nick 架构师的学习社区';
        return title;
    }

    render() {

        return (
            <DocumentTitle title={this.getPageTitle()}>
                <div className="container">
                    <div className="top">
                        <div className="header">
                            <Link to="/">
                                <img alt="logo" className="logo" src="http://img.my.csdn.net/uploads/201712/14/1513259107_8910.png"/>
                                <span className="title">JAVA ARCHITECT</span>
                            </Link>
                        </div>
                        <div className="desc"> 架构师的学习社区</div>
                    </div>
                    {this.props.children}
                    <GlobalFooter className="footer" links={links} copyright={copyright}/>
                </div>
            </DocumentTitle>
        );
    }
}

export default UserLayout;
