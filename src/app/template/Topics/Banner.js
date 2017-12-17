import React from 'react';
import {Button, Row, Col} from 'antd';
import {Link} from 'react-router-dom';

import styles from './banner.module.less';

function typeFunc(a) {
    if (a.key === 'line') {
        return 'right';
    } else if (a.key === 'button') {
        return 'bottom';
    }
    return 'left';
}

export default function Banner() {

    return (
        <section className={styles.bannerWrapper}>
            <div className={styles.topicsHeader}>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={5}>
                        <p key="content">人工智能</p>
                        <Link to="/blog/resource">
                            <Button type="primary">¥ 10.00 购买</Button>
                        </Link>
                    </Col>
                </Row>

            </div>
        </section>
    )
}
