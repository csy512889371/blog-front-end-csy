import React, {createElement} from 'react';
import classNames from 'classnames';
import {Form, Row, Col, Card, Button} from 'antd';
import config from './typeConfig';
import styles from './index.less';

export default ({className, linkElement = 'a', type, title, desc, img, actions, ...rest}) => {
    const pageType = type in config ? type : '404';
    const clsString = classNames(styles.exception, className);
    return (
        <div className={clsString} {...rest}>
            <Row gutter={16} type="flex" justify="center">
                <Col className="gutter-row" md={8}>
                    <div className={styles.imgBlock}>
                        <div className={styles.imgEle}>
                            <img alt="example" width="400px;"
                                 src={img || config[pageType].img}/>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" md={8}>
                    <div className={styles.content}>
                        <h1>{"项目正在马不停蹄的建设中。" ||title || config[pageType].title}</h1>
                        <div className={styles.desc}>
                            <p>
                                {desc || config[pageType].desc}
                            </p>
                        </div>
                        <div className={styles.actions}>
                            {
                                actions ||
                                createElement(linkElement, {
                                    to: '/',
                                    href: '/',
                                }, <Button type="primary">返回首页</Button>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>


        </div>
    );
};
