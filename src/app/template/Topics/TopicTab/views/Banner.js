import React, {Component} from 'react';
import {Button, Row, Col, Avatar, message} from 'antd';
import _ from 'lodash'
import styles from './index.module.less';
import * as api from '../../../../apis';

const {findById} = api.topic;

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getData(this.props.topicId);
    }

    getData(topicId) {
        findById({id: topicId}).then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    this.setState({data: res.data});
                } else {
                    message.error('获取主题信息失败');
                }
            })
            .catch(() => {
                message.error('获取主题信息失败');
            });
    }

    buyTopic = () => {
        const topicData = this.state.data;
        this.props.buy(topicData.buyUrl);
    };

    getBannerInfo = (topicData) => {
        return (
            <section className={styles.bannerWrapper}>
                <div className={styles.topicsHeader}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={3}>
                            <Avatar src={topicData.imgUrl} size="large"/>
                            <p key="content">{topicData.name}</p>
                        </Col>
                    </Row>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={4}>
                            <Button onClick={this.buyTopic} style={{backgroundColor: "#feffe6"}}>全部打包 ¥ {topicData.price}.00 购买</Button>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }

    componentWillReceiveProps(nextProps) {
        //this.getData(nextProps.topicId);
    }

    render() {
        const topicData = this.state.data;
        return (
            _.has(topicData, "id") ? this.getBannerInfo(topicData) : ""
        )
    }
}

export default Banner;

