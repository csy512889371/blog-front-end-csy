import React from 'react';
import {Row, Col, Card, message, Spin} from 'antd';

const noData = () => (
    <div >
        <Row gutter={16} type="flex" justify="center" >
            <p>没有数据</p>
        </Row>
    </div>

);

const loadingSpin = () => {
    return (
        <Row gutter={16} type="flex" justify="center"><Spin size="large"/> </Row>
    )
};

export {noData, loadingSpin};
