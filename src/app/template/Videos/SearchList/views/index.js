import React from 'react';
import globalStyles from '../../../global.module.less';
import {getStyle} from '../../../../utils/index';
import {Row, Col, Input, Card, message, Spin} from 'antd';
import VideoSubList from '../../../TopicSubInfo/VideoSubList/index';
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
        let {params} = videoSearchState;

        findMoreVideoSearchForPage({
            name: params.name,
            number: this.state.number + 1,
            size: this.state.size,
        })
    }

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
        const {videoSearchState} = this.props;
        let {data: apiData, params, isLoadingMore} = videoSearchState;

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
        const {videoSearchState} = this.props;
        let {data: apiData, isLoadingList, err} = videoSearchState;

        if (err !== undefined) {
            message.error('系统异常请稍后再试');
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
                                {isLoadingList ? this.loadingSpin() :
                                    _.has(apiData, 'data') ? this.getSubTopic() : this.noData()}
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
