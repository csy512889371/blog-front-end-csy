import React from 'react';
import {Link} from 'dva/router';
import {Row, Col, Card, Steps} from 'antd';

import styles from './index.module.less';

const { Step } = Steps;
export default class Page2 extends React.Component {
    state = {
        stepDirection: 'horizontal',
    }


    render() {
        const { stepDirection } = this.state;
        const desc1 = (
            <div >
                <div>
                    <h4>在社区中浏览你感兴趣的文章、视频。</h4>
                </div>
            </div>
        );
        const desc2 = (
            <div >
                <div>
                    <h3>查看、发布博客。</h3>
                </div>
            </div>
        );

        const desc3 = (
            <div >
                <div>
                    <h1>688324454</h1>
                </div>
            </div>
        );

        return (
            <div >
                <div className={styles.divRow}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={18}>
                            <Card title="成长路线" style={{marginBottom: 24}} bordered={false}>
                                <Steps direction={stepDirection}  current={4}>
                                    <Step title="社区" description={desc1}/>
                                    <Step title="博客" description={desc2}/>
                                    <Step title="关注qq群（架构师成长之路）" description={desc3}/>
                                    <Step title="学习"/>
                                </Steps>
                            </Card>

                        </Col>

                    </Row>
                </div>

                <div className={styles.endDiv}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={8}>
                            <Card title="申明" bordered={false} className={styles.notifyDiv}>
                                <div >
                                    <h3>本站资源全部来自与互联网，如果发现本站有侵权行为，请告知，我们会在第一时间处理</h3>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }


}
