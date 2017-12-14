import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Select, Menu, Row, Col, Icon, Button, Popover, AutoComplete, Input, Badge} from 'antd';

const Search = Input.Search;

const Option = Select.Option;


function renderOption(item) {
    return (
        <Option key={item.category} text={item.category}>
            {item.query} 在
            <a
                href={`https://s.taobao.com/search?q=${item.query}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.category}
            </a>
            区块中
            <span className="global-search-item-count">约 {item.count} 个结果</span>
        </Option>
    );
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
    return (new Array(getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
        }));
}

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

    render() {
        let pathname = this.props.location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;

        let activeMenuItem = 'home';
        if (pathname != '/') {
            activeMenuItem = pathname;
        }

        const {menuMode, dataSource} = this.state;

        const menu = [
            <Link to='/user/login'>
                <Button className="header-lang-button" ghost size="small" key="lang">
                    登录
                </Button>
            </Link>
            ,
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
                <Menu.Item key="/blog/community">
                    <Link to='/blog/community'>
                        社区
                    </Link>
                </Menu.Item>
                <Menu.Item key="/blog/blogger">
                    <Link to='/blog/blogger'>
                        博客
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
                            <img alt="logo" src="http://img.my.csdn.net/uploads/201712/14/1513259107_8910.png"/>
                            <span>Nick Architect</span>
                        </Link>
                    </Col>
                    <Col lg={20} md={19} sm={0} xs={0}>
                        <div id="search-box">
                            <Search
                                placeholder="搜索文章..."
                                onSearch={value => console.log(value)}
                                enterButton
                                style={{ width: 300 }}
                            />
                        </div>
                        {menuMode === 'horizontal' ? menu : null}
                    </Col>
                </Row>
            </header>
        )
    }
}
