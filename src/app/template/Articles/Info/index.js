import React from 'react';
import remark from 'remark'
import reactRenderer from 'remark-react'
import styles from './index.module.less';
import globalStyles from '../../global.module.less';
import {getStyle} from '../../../utils/index';
import {getContenInfo} from './contentInfo';
import {Button, Row, Col, List, Avatar, Card} from 'antd';
import {Link} from 'dva/router';

class Articles extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        let title = "Java";
        let author = "eva";
        let time = "2017-12-12";
        let commentCount = "成为架构师的必经之路";
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
                                <Link to="/blog/resource">
                                    <Button type="primary">¥ 10.00 购买</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>

                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={18}>
                            <div className={styles.container}>
                                <h2>{title}</h2>
                                <div className={styles.articleInfo}>
                                    <span>
                                        <img className={styles.authorImg} src={require('./author.png')}/> {author}
                                    </span>
                                    <span>
                                        <img src={require('./calendar.png')}/> {time}
                                    </span>
                                    <span>
                                        <img src={require('./comments.png')}/> {commentCount}
                                    </span>
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
            </div>
        )
    }
}

export default Articles;
