import React from 'react';
import remark from 'remark'
import reactRenderer from 'remark-react'
import styles from './index.module.less';
import globalStyles from '../../global.module.less';
import {getStyle} from '../../../utils/index';
import {getContenInfo} from './contentInfo';
import {Button, Row, Col, List, Avatar, Card, message, Modal, Divider, Badge} from 'antd';
import {Link} from 'dva/router';

import {FormModal} from '../../../components/ModalForm/index';

class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    fields = () => {
        return [{
            label: '点击',
            type: 'buy',
            name: 'title',
            options: {
                initialValue:"自动获取人工智能的百度网盘链接",
                url:"https://sns.io/sell/GDHIVN6W"
            }
        }]
    }

    buy = () => {
        this.setState({
            modalShow: true
        })
    }

    onCancel = () => {
        this.setState({
            modalShow: false
        })
    }

    render() {
        const {match} = this.props;
        let title = "Java";
        let viewCount = "100";

        return (
            <div>
                <section className={globalStyles.bannerHeaderWrapper}/>
                <div>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={10}>
                            <Card style={{marginBottom: 24}} bordered={false}>
                                <h1>让你页面速度飞起来 - Web前端性能优化</h1>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={10}>
                            <img src="http://img.my.csdn.net/uploads/201712/15/1513295218_6486.png"/>
                        </Col>
                    </Row>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={1}>
                            <div className={styles.buyBtton}>
                                <Button type="primary" onClick={this.buy}>¥ 10.00 购买</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={18}>
                            <div className={styles.container}>
                                <div className={styles.articleInfo}>
                                    <Badge count={"精"} style={{backgroundColor: '#52c41a'}}/>
                                    <Divider type="vertical"/>
                                    <Badge count={"单售"}/>
                                    <Divider type="vertical"/>
                                    9天前
                                    <Divider type="vertical"/>
                                    <span>
                                        <img src={require('./views.png')}/> {viewCount}
                                    </span>
                                </div>
                                <div id='preview' className={styles.content}>
                                    {remark().use(reactRenderer).processSync(getContenInfo()).contents}
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>

                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>

                <FormModal
                    modalKey="buyProduct"
                    visible={this.state.modalShow}
                    title="购买"
                    fields={this.fields()}
                    onCancel={this.onCancel}
                    okText="保存"
                    showCancel={false}
                    noBtn={true}
                />
            </div>
        )
    }
}

export default Articles;
