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
                    <h4>查看书籍、文章。</h4>
                </div>
            </div>
        );

        const desc3 = (
            <div >
                <div>
                    <h4>在沟通中成长</h4>
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
                                    <Step title="资源" description={desc2}/>
                                    <Step title="交流" description={desc3}/>
                                    <Step title="架构师"/>
                                </Steps>
                            </Card>

                        </Col>

                    </Row>
                </div>

                <div className={styles.endDiv}>
                    <Row gutter={16} type="flex" justify="center">
                        <Col span={8}>
                            <Card title="加入我们" bordered={false} className={styles.joinUs}>
                                <div >
                                    <h3>qq群（架构师成长之路）</h3>
                                    <h2>688324454</h2>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} type="flex" justify="center">
                        <Col span={8}>
                            <Card title="购买说明" bordered={false} className={styles.buyInfo}>
                                <div >
                                    <h3>* 同一主题下的商品打包销售,平均10元左右。</h3>
                                    <h3>* 如：主题React下的所有非【单销】的商品打包消息</h3>
                                    <h3>*【单销】商品表示单独出售</h3>
                                    <h3>* 点击【购买】扫描支付</h3>
                                    <h3>* 目前只支持《支付宝》</h3>
                                    <h3>* 如有问题加入QQ群咨询</h3>
                                </div>
                            </Card>
                        </Col>
                    </Row>

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
