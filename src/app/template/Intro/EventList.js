import React from 'react';
import {Row, Col, List, Avatar, Card} from 'antd';

export default class EventList extends React.Component {
    state = {
        loading: false,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
    }

    componentDidMount() {

    }

    render() {
        const {loading} = this.state;

        let datalist = [{
            name: '2017-12-12 项目启动',
            description: "助力架构师成长"
        }, {
            name: '2017-01-01 项目上线',
            description: "包含首页、文章详情、登录、注册等模块"
        }];

        return (
            <div className="event-list">
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={8}>
                        <Card className="list-dav" title="大事件" style={{marginBottom: 24}} bordered={false}>
                            <List
                                loading={loading}
                                itemLayout="horizontal"
                                dataSource={datalist}
                                renderItem={item => (
                                    <List.Item actions={[]}>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="http://img.my.csdn.net/uploads/201712/14/1513209085_3985.png"/>}
                                            title={item.name}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>

                    </Col>
                </Row>
            </div>
        );
    }
}
