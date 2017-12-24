import React, {Component} from 'react';
import globalStyles from '../../global.module.less';
import {getStyle} from '../../../utils/index';
import {Row, Col, Card, message} from 'antd';
import Menus from "../../../components/menu/Menus";
import style from './index.module.less'
import VideoSubList from '../../TopicSubInfo/VideoSubList/index';
import {noData, loadingSpin} from "../../../components/CommonUI"
import {selectVisibleCommunitySubTopicPage} from '../selector';
import _ from 'lodash'
import {findCommunitySubTopicForPage, findMoreCommunitySubTopicForPage} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCategory} from '../../constants'

class Community extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            size: 12,
        }
    }

    componentDidMount() {
        const {findCommunitySubTopicForPage, match} = this.props;
        const subType = match.params.type;
        findCommunitySubTopicForPage({
            topicId: "",
            number: this.state.number,
            size: this.state.size,
        })
    }

    getSubTopic = () => {
        const {communitySubTopicState, match} = this.props;

        let {data: apiData, params, isLoadingMore} = communitySubTopicState;

        let isHasNext = false;
        if (_.has(apiData, ['data', 'last'])) {
            isHasNext = apiData.data.last;
        }

        return (
            <div>
                <VideoSubList videoList={apiData.data.content} loadingMore={isLoadingMore}
                              showLoadingMore={isHasNext}
                              loading={isLoadingMore}
                              onLoadMore={this.loadMoreData}/>
            </div>
        )
    }

    render() {
        const {communitySubTopicState, match} = this.props;
        let {data: apiData, isLoadingList, err} = communitySubTopicState;
        if (err !== undefined) {
            message.error('系统异常请稍后再试');
            return noData();
        }

        return (
            <div>
                <section className={globalStyles.bannerHeaderWrapper}/>

                <div>
                    <div>
                        <Menus current={match.params.type}
                               fromUrl={"/blog/community"}
                               cateId={match.params.id}
                               getArticleList={(tag) => {
                               }}
                               categories={getCategory()}
                               history={this.props.history}/>
                    </div>

                    <div>
                        <Row gutter={16} type="flex" justify="center">
                            <Col className="gutter-row" md={12}>
                                <Card bordered={false}>
                                    {isLoadingList ? loadingSpin() :
                                        _.has(apiData, ['data', 'content']) ? this.getSubTopic() : noData()}
                                </Card>
                            </Col>
                            <Col className={style.gutterRow} md={6}>
                                <Card title="热门文章">
                                    <p>敬请期待</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </div>
                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        communitySubTopicState: selectVisibleCommunitySubTopicPage(state)
    }
};

const mapDispatchToProps = dispatch => ({
    findCommunitySubTopicForPage: bindActionCreators(findCommunitySubTopicForPage, dispatch),
    findMoreCommunitySubTopicForPage: bindActionCreators(findMoreCommunitySubTopicForPage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
