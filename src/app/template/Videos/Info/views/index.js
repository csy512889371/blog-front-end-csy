import React, {Component} from 'react';
import remark from 'remark'
import reactRenderer from 'remark-react'
import styles from './index.module.less';
import globalStyles from '../../../global.module.less';
import {getStyle} from '../../../../utils/index';
import {Button, Row, Col, Card, Divider, Badge, message} from 'antd';
import {FormModal} from '../../../../components/ModalForm/index';
import {noData} from "../../../../components/CommonUI"

import {selectVisibleVideoInfoPage} from '../selector';
import _ from 'lodash'
import {findVideoInfo} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class VideoInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    componentDidMount() {
        const {findVideoInfo, match} = this.props;
        findVideoInfo({
            id: match.params.id
        })
    }

    fields = () => {
        const {videoInfoState} = this.props;
        let {data: apiData} = videoInfoState;
        if (_.has(apiData, 'data') && apiData.data !== null) {
            const videoInfo = apiData.data;
            return [{
                label: '点击',
                type: 'buy',
                name: 'title',
                options: {
                    initialValue: "自动获取人工智能的百度网盘链接",
                    url: videoInfo.buyUrl
                }
            }]
        }
    };

    buy = () => {
        this.setState({
            modalShow: true
        })
    };

    onCancel = () => {
        this.setState({
            modalShow: false
        })
    };

    pageInfo = () => {
        const {videoInfoState} = this.props;
        let {data: apiData} = videoInfoState;
        const videoInfo = apiData.data;

        return (
            <div>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={10}>
                        <Card style={{marginBottom: 24}} bordered={false}>
                            <h1>{videoInfo.name}</h1>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={10}>
                        <img src={videoInfo.imageUrl}/>
                    </Col>
                </Row>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={1}>
                        <div className={styles.buyBtton}>
                            <Button type="primary" onClick={this.buy}>¥ {videoInfo.price}.00 购买</Button>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={18}>
                        <div className={styles.container}>
                            <div className={styles.articleInfo}>
                                {videoInfo.isEssence === 1 ?
                                    <Badge count={"精"} style={{backgroundColor: '#52c41a'}}/> : ""}
                                <Divider type="vertical"/>
                                {videoInfo.isSolo === 1 ? <Badge count={"单售"}/> : ""}

                                <Divider type="vertical"/>
                                9天前
                                <Divider type="vertical"/>
                                <span>
                                        <img src={require('./views.png')}/> {videoInfo.view}
                                    </span>
                            </div>
                            <div id='preview' className={styles.content}>
                                {remark().use(reactRenderer).processSync(videoInfo.content).contents}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    noData = () => (
        <Row gutter={16} type="flex" justify="center" className={styles.noData}>
            <p>没有相关文章</p>
        </Row>
    );


    render() {

        const {videoInfoState} = this.props;
        let {data: apiData, err} = videoInfoState;

        if (err !== undefined) {
            message.error('系统异常请稍后再试');
            return noData();
        }

        return (
            <div>
                <section className={globalStyles.bannerHeaderWrapper}/>

                {_.has(apiData, ['data', 'id']) ? this.pageInfo() : noData()}

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

const mapStateToProps = state => {
    return {
        videoInfoState: selectVisibleVideoInfoPage(state)
    }
};

const mapDispatchToProps = dispatch => ({
    findVideoInfo: bindActionCreators(findVideoInfo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoInfo);
