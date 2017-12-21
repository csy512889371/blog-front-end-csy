import React from 'react';
import globalStyles from '../../global.module.less';
import {getStyle} from '../../../utils/index';
import {Button, Row, Col, Input, Avatar, Card, message, Modal, Divider, Badge} from 'antd';
import {Link} from 'dva/router';
import ArticleListSmall from '../../Articles/ArticleListSmall';

const Search = Input.Search;
class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    render() {

        return (
            <div>
                <section className={globalStyles.bannerHeaderWrapper}/>
                <div>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={10}>
                            <Card style={{marginBottom: 24}} bordered={false}>
                                <Search
                                    placeholder="搜索文章..."
                                    onSearch={value => console.log(value)}
                                    enterButton
                                    style={{width: 500}}
                                />
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={18}>
                            <Card style={{marginBottom: 24}} bordered={false}>
                                <ArticleListSmall/>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

export default SearchList;
