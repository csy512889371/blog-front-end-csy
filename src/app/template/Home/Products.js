import React, {Component} from 'react';
import {Row, Col, Card, Button} from 'antd';
import './productItem.less';

class Products extends Component {

    render() {
        return (
            <div className="">
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={16}>
                        <Card bordered={false}>
                            <Button>全部</Button>
                            <Button>云\大数据</Button>
                            <Button>系统\测试</Button>
                            <Button>前端</Button>
                            <Button>后端</Button>
                            <Button>版本管理</Button>
                            <Button>移动应用</Button>
                            <Button>数据库</Button>
                            <Button>产品</Button>
                            <Button>人工智能</Button>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162976_6377.jpg"/>
                                </div>
                                <div className="custom-card">
                                    <h1>kafka</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Kafka是一种高吞吐量的分布式发布订阅消息系统。Kafka的目的是通过Hadoop的并行加载机制来统一线上和离线的消息处理，也是为了通过集群机来提供实时的消费。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513163063_7832.png"/>
                                </div>
                                <div className="custom-card">
                                    <h1>spark</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Spark是类Hadoop MapReduce的通用并行框架，拥有Hadoop MapReduce所具有的优点，能更好地适用于数据挖掘与机器学习等需要迭代的MapReduce的算法。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162858_9335.jpg"/>
                                </div>
                                <div className="custom-card">
                                    <h1>Node</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Node.js是一个基于Chrome JavaScript运行时建立的平台，使用事件驱动、非阻塞I/O 模型而得以轻量和高效，适合在分布式设备上运行数据密集型的实时应用.</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162895_9083.png"/>
                                </div>
                                <div className="custom-card">
                                    <h1>React Native</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>React Native是一款基于JavaScript框架React.js来开发iOS和Android原生App的开源框架，着力于提高多平台开发的开发效率。(Learn once,write anywhere)</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162877_3390.jpg"/>
                                </div>
                                <div className="custom-card">
                                    <h1>React</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>React是Facebook用来创建用户界面的JavaScript库，用于构建“可预期的”和“声明式的”Web用户界面。 该框架的推出主要为了开发数据不断变化的大规模应用程序。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513163096_9160.png"/>
                                </div>
                                <div className="custom-card">
                                    <h1>webpack</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>webpack以CommonJS规范在本地对js进行模块化处理打包; gulp负责流程化的构建过程任务;Mocha是现在最流行的JavaScript测试框架之一。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>


                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162976_6377.jpg"/>
                                </div>
                                <div className="custom-card">
                                    <h1>kafka</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Kafka是一种高吞吐量的分布式发布订阅消息系统。Kafka的目的是通过Hadoop的并行加载机制来统一线上和离线的消息处理，也是为了通过集群机来提供实时的消费。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513163063_7832.png"/>
                                </div>
                                <div className="custom-card">
                                    <h1>spark</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Spark是类Hadoop MapReduce的通用并行框架，拥有Hadoop MapReduce所具有的优点，能更好地适用于数据挖掘与机器学习等需要迭代的MapReduce的算法。</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={6}>
                        <div className="gutter-box">
                            <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                <div className="custom-image">
                                    <img alt="example" width="100%"
                                         src="http://img.my.csdn.net/uploads/201712/13/1513162858_9335.jpg"/>
                                </div>
                                <div className="custom-card">
                                    <h1>Node</h1>
                                    <h6>5  收录资源  |  88关注</h6>
                                    <p>Node.js是一个基于Chrome JavaScript运行时建立的平台，使用事件驱动、非阻塞I/O 模型而得以轻量和高效，适合在分布式设备上运行数据密集型的实时应用.</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>


            </div>

        )
    }
}

export default Products;
