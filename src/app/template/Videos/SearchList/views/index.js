import React from 'react';
import globalStyles from '../../../global.module.less';
import {getStyle} from '../../../../utils/index';
import {Row, Col, Input, Card, message, Spin} from 'antd';
import VideoSubList from '../../../TopicSubInfo/VideoSubList/index';
import {noData, loadingSpin} from "../../../../components/CommonUI"
import {selectVisibleVideoSearchPage} from '../selector';

import _ from 'lodash'
import {findVideoSearchForPage, findMoreVideoSearchForPage} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const Search = Input.Search;

class SearchList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            size: 12,
        }
    }

    getSearchParam = () => {
        const {location} = this.props;
        const name = "search";
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = location.search.substr(1).match(reg);
        if (r !== null) return decodeURI(r[2]);
        return null;
    }

    componentDidMount() {
        const {findVideoSearchForPage} = this.props;
        if (this.getSearchParam() != "") {
            findVideoSearchForPage({
                name: this.getSearchParam(),
                number: this.state.number,
                size: this.state.size,
            })
        }
    }

    onSearch = (value) => {
        const {findVideoSearchForPage} = this.props;
        findVideoSearchForPage({
            name: value,
            number: this.state.number,
            size: this.state.size,
        })
    }

    loadMoreData = () => {
        const {findMoreVideoSearchForPage, videoSearchState} = this.props;
        let {data: apiData, params} = videoSearchState;

        findMoreVideoSearchForPage({
            name: params.name,
            number: apiData.data.number + 1,
            size: this.state.size,
        })
    }


    getSubTopic = () => {
        const {videoSearchState} = this.props;
        let {data: apiData, isLoadingMore} = videoSearchState;

        let isHasNext = false;
        if (_.has(apiData, ['data','last'])) {
            isHasNext = !apiData.data.last;
        }

        return (
            <VideoSubList videoList={apiData.data.content} loadingMore={isLoadingMore}
                          showLoadingMore={isHasNext}
                          loading={isLoadingMore}
                          onLoadMore={this.loadMoreData}/>
        )
    }

    render() {
        const {videoSearchState} = this.props;
        let {data: apiData, isLoadingList, err} = videoSearchState;

        if (err !== undefined) {
            message.error('系统异常请稍后再试');
            return noData;
        }

        return (
            <div>
                <section className={globalStyles.bannerHeaderWrapper}/>
                <div>
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={10}>
                            <Card style={{marginBottom: 24}} bordered={false}>
                                <Search
                                    placeholder="搜索文章..."
                                    onSearch={this.onSearch}
                                    enterButton
                                    style={{width: 500}}
                                    defaultValue={this.getSearchParam()}
                                    ref="searchVideo"
                                />
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={18}>
                            <Card style={{marginBottom: 24}} bordered={false}>
                                {isLoadingList ? loadingSpin() :
                                    _.has(apiData, ['data', 'content']) ? this.getSubTopic() : noData()}
                            </Card>
                        </Col>
                    </Row>
                </div>

                <style dangerouslySetInnerHTML={{__html: getStyle()}}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        videoSearchState: selectVisibleVideoSearchPage(state)
    }
};

const mapDispatchToProps = dispatch => ({
    findVideoSearchForPage: bindActionCreators(findVideoSearchForPage, dispatch),
    findMoreVideoSearchForPage: bindActionCreators(findMoreVideoSearchForPage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
