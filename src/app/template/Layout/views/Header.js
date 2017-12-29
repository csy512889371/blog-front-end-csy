import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'dva/router';
import {Menu, Row, Col, Icon, Dropdown, Avatar, Input, Button} from 'antd';
import styles from './index.module.less'
import {logout, isLogin, loginUser} from '../../../apis/utils/user';

const Search = Input.Search;

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            menuVisible: false,
            menuMode: 'horizontal',
            dataSource: [],
        };
    }

    doSearch = (value) => {
        this.props.history.push("/video/search?search=" + encodeURI(value));
    };

    handleMenuClick = ({key}) => {
        if (key === 'logout') {
            const {history, location} = this.props;
            const {pathname} = location;
            logout(history, pathname);
        }
    };

    getLoginDropdown = () => {
        const loginMenu = (
            <Menu className={styles.menu} selectedKeys={[]} onClick={this.handleMenuClick}>
                <Menu.Item><Icon type="user"/>{loginUser().nickname}</Menu.Item>
                <Menu.Item disabled><Icon type="user"/>个人中心</Menu.Item>
                <Menu.Item disabled><Icon type="setting"/>设置</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout"><Icon type="logout"/>退出登录</Menu.Item>
            </Menu>
        );

        return (
            <div className={styles.userDropdown}>
                <Dropdown overlay={loginMenu}>
                      <span className={`${styles.action} ${styles.account}`}>
                        <Avatar size="large" className={styles.avatar}
                                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
                      </span>
                </Dropdown>
            </div>
        )
    }

    getLoginButton = () => {
        return (
            <Link to='/user/login' key="/user/login">
                <Button className="header-lang-button" ghost size="small" key="lang">
                    登录
                </Button>
            </Link>
        )
    };

    render() {
        let pathname = this.props.location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;
        let activeMenuItem = 'home';
        if (pathname !== '/') {
            activeMenuItem = pathname;
        }

        const {menuMode} = this.state;

        const menu = [
            <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
                <Menu.Item key="home">
                    <Link to='/'>
                        首页
                    </Link>
                </Menu.Item>
                <Menu.Item key="/blog/intro">
                    <Link to='/blog/intro'>
                        功能介绍
                    </Link>
                </Menu.Item>
                <Menu.Item key="/blog/community/video">
                    <Link to='/blog/community/video'>
                        社区
                    </Link>
                </Menu.Item>
                <Menu.Item key="/blog/resource">
                    <Link to='/blog/resource'>
                        资源
                    </Link>
                </Menu.Item>

            </Menu>
        ];

        const headerClassName = classNames({
            'home-nav-white': false
        });

        return (
            <header id="header" className={headerClassName}>
                <Row>
                    <Col lg={4} md={5} sm={24} xs={24}>
                        <Link to="/" id="logo">
                            <img alt="logo" src="http://img.my.csdn.net/uploads/201712/14/1513259107_8910.png"
                                 style={{height: "30px", width: "auto"}}/>
                            <span>Eva Architect</span>
                        </Link>
                    </Col>
                    <Col lg={18} md={17} sm={0} xs={0}>
                        <div id="search-box">
                            <Search
                                placeholder="搜索文章..."
                                onSearch={this.doSearch}
                                enterButton
                                style={{width: 300}}
                            />
                        </div>
                        {menuMode === 'horizontal' ? menu : null}
                    </Col>

                    <Col lg={1} md={1} sm={0} xs={0}>
                        {isLogin() ? this.getLoginDropdown() : this.getLoginButton()}
                    </Col>

                </Row>
            </header>
        )
    }
}
