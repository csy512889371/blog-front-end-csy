import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Select, Menu, Row, Col, Icon, Button, Popover, AutoComplete, Input, Badge} from 'antd';

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


export default class Header extends React.Component {

    state = {
        inputValue: '',
        menuVisible: false,
        menuMode: 'horizontal',
        dataSource: [],
    };

    handleSearch = (value) => {
        this.setState({
            dataSource: value ? searchResult(value) : [],
        });
    }


    handleSelectFilter = (value) => {

    }

    onSelect = (value) => {
        console.log(value);
    }


    render() {
        const {inputValue, menuMode, menuVisible, dataSource} = this.state;

        let activeMenuItem = 'home';

        let docVersions ={
            '0.9.x': 'http://09x.ant.design',
            '0.10.x': 'http://010x.ant.design',
            '0.11.x': 'http://011x.ant.design',
            '0.12.x': 'http://012x.ant.design',
            '1.x': 'http://1x.ant.design',
        }

        const versionOptions = Object.keys(docVersions).map(version => <Option value={docVersions[version]} key={version}>{version}</Option>);

        const menu = [
            <Button className="header-lang-button" ghost size="small" onClick={this.handleLangChange} key="lang">
                登录
            </Button>,
            <Select
                key="version"
                className="version"
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue=""
                onChange={this.handleVersionChange}
                getPopupContainer={trigger => trigger.parentNode}
            >
                {versionOptions}
            </Select>,
            <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
                <Menu.Item key="home">
                    <Link to='/'>
                        首页
                    </Link>
                </Menu.Item>
                <Menu.Item key="docs/spec">
                    <Link to='/'>
                        功能介绍
                    </Link>
                </Menu.Item>
                <Menu.Item key="docs/react">
                    <Link to='/'>
                        社区
                    </Link>
                </Menu.Item>
                <Menu.Item key="docs/pattern">
                    <Link to='/'>
                        博客
                    </Link>
                </Menu.Item>
                <Menu.Item key="docs/resource">
                    <Link to='/'>
                        资源
                    </Link>
                </Menu.Item>
            </Menu>
        ];

        const headerClassName = classNames({
            clearfix: true,
            'home-nav-white': false
        });

        const searchPlaceholder = '搜索文章...';
        return (
            <header id="header" className={headerClassName}>
                <Row>
                    <Col lg={4} md={5} sm={24} xs={24}>
                        <Link to="/" id="logo">
                            <img alt="logo" src="assets/images/blogLogo/logo.png"/>
                            <span>Nick Architect</span>
                        </Link>
                    </Col>
                    <Col lg={20} md={19} sm={0} xs={0}>
                        <div id="search-box">
                            <AutoComplete
                                dataSource={dataSource.map(renderOption)}
                                value={inputValue}
                                dropdownClassName="component-select"
                                placeholder={searchPlaceholder}
                                optionLabelProp="data-label"
                                filterOption={this.handleSelectFilter}
                                onSelect={this.onSelect}
                                onSearch={this.handleSearch}
                                getPopupContainer={trigger => trigger.parentNode}
                            >
                                <Input
                                    suffix={(
                                        <Button className="search-btn" size="large" type="primary">
                                            <Icon type="search" />
                                        </Button>
                                    )}
                                />
                            </AutoComplete>
                        </div>
                        {menuMode === 'horizontal' ? menu : null}
                    </Col>
                </Row>
            </header>
        )
    }
}
