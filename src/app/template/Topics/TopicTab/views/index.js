import React, {Component} from 'react';
import Banner from './Banner';
import {Badge, Row, Col, Card, Timeline, Spin, message} from 'antd';
import Menus from "../../../../components/menu/Menus";
import styles from './index.module.less';
import {getStyle} from '../../../../utils/index';
import VideoSubList from '../../../TopicSubInfo/VideoSubList/index';
import {FormModal} from '../../../../components/ModalForm/index';

import {selectVisibleTopicVideoPage} from '../selector';
import _ from 'lodash'
import {findTopicVideoForPage, findMoreTopicVideoForPage} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TopicTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            number: 0,
            size: 12,
        }
    }

    componentDidMount() {
        const {findTopicVideoForPage, match} = this.props;
        const subType = match.params.type;
        if ("video" === subType) {
            findTopicVideoForPage({
                topicId: match.params.id,
                number: this.state.number,
                size: this.state.size,
            })
        }
    }

    fields = () => {
        return [{
            label: '点击',
            type: 'buy',
            name: 'title',
            options: {
                initialValue: "自动获取人工智能的百度网盘链接",
                url: "https://sns.io/sell/GDHIVN6W"
            }
        }]
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

    loadMoreData = () => {
        const {findMoreTopicVideoForPage, match} = this.props;
        findMoreTopicVideoForPage({
            "topicId": match.params.id,
            number: this.state.number + 1,
            size: this.state.size,
        })
    }

    getCategory = () => {
        let categories = [];

        categories.push({
            name: "视频教程",
            code: "video"
        });
        categories.push({
            name: "文章",
            code: "article"
        });
        categories.push({
            name: "书籍",
            code: "book"
        });
        categories.push({
            name: "帖子",
            code: "note"
        });

        return categories
    };

    noData = () => (
        <Row gutter={16} type="flex" justify="center">
            <p>没有数据</p>
        </Row>
    );

    loadingSpin = () => {
        return (
            <Row gutter={16} type="flex" justify="center"><Spin size="large"/> </Row>
        )
    }

    getSubTopic = () => {
        const {topicVideoState, match} = this.props;

        const subType = match.params.type;
        if ("video" !== subType) {
            return null;
        }

        let {data: apiData, params, isLoadingMore} = topicVideoState;

        let isHasNext = false;
        if (_.has(apiData, 'data')) {

            if (!_.has(apiData.data, 'totalPages')) {
                return null;
            }

            const nextPage = params.number + 2;
            if (nextPage > apiData.data.totalPages) {
                isHasNext = false;
            } else {
                isHasNext = true;
            }
        }

        return (
            <VideoSubList videoList={apiData.data.content} loadingMore={isLoadingMore}
                          showLoadingMore={isHasNext}
                          loading={isLoadingMore}
                          onLoadMore={this.loadMoreData}/>
        )
    }

    render() {
        const {topicVideoState, match} = this.props;
        let {data: apiData, isLoadingList, err} = topicVideoState;

        if (err !== undefined) {
            message.error('系统异常请稍后再试');
        }

        return (
            <div>
                <Banner buy={this.buy}/>
                <div>
                    <div>
                        <Menus current={match.params.type}
                               fromUrl={"/topics"}
                               cateId={match.params.id}
                               getArticleList={(tag) => {
                               }}
                               categories={this.getCategory()}
                               history={this.props.history}/>
                    </div>

                    <div>
                        <Row gutter={16} type="flex" justify="center">
                            <Col className="gutter-row" md={12}>
                                <Card bordered={false}>
                                    {isLoadingList ? this.loadingSpin() :
                                        _.has(apiData, 'data') ? this.getSubTopic() : this.noData()}

                                </Card>
                            </Col>
                            <Col className={styles.gutterRow} md={6}>
                                <Card title="购买说明">
                                    <Timeline>
                                        <Timeline.Item><Badge count={"单售"}/>商品要单独购买。</Timeline.Item>
                                        <Timeline.Item>同一主题下的内容打包购买</Timeline.Item>
                                        <Timeline.Item>点击购买-扫码支付</Timeline.Item>
                                    </Timeline>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </div>

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

                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicVideoState: selectVisibleTopicVideoPage(state)
    }
};

const mapDispatchToProps = dispatch => ({
    findTopicVideoForPage: bindActionCreators(findTopicVideoForPage, dispatch),
    findMoreTopicVideoForPage: bindActionCreators(findMoreTopicVideoForPage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicTab);
