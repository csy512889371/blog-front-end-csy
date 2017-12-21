import React from 'react';
import {Button, Row, Col, Avatar} from 'antd';
import {Link} from 'dva/router';

import styles from './index.module.less';


function typeFunc(a) {
    if (a.key === 'line') {
        return 'right';
    } else if (a.key === 'button') {
        return 'bottom';
    }
    return 'left';
}

export default function Banner(props) {

    return (
        <section className={styles.bannerWrapper}>
            <div className={styles.topicsHeader}>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={3}>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        <p key="content">人工智能</p>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={4}>
                        <Button onClick={props.buy} style={{backgroundColor: "#feffe6"}}>¥ 10.00 购买</Button>
                    </Col>
                </Row>

            </div>
        </section>
    )
}
