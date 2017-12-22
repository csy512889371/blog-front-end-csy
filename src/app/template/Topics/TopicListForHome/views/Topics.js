import React, {Component} from 'react';
import {Form, Row, Col, Card, Button} from 'antd';
import {connect} from 'react-redux';
import styles from './index.module.less';
import StandardFormRow from '../../../../components/StandardFormRow/index'
import TagSelect from '../../../../components/TagSelect/index'
import {Link} from 'dva/router';
import {selectVisibleTopicPage} from '../selector';
import {findTopicForPage, findMoreTopicForPage} from '../actions';
import {bindActionCreators} from 'redux';
import chunk from "lodash/chunk";

const FormItem = Form.Item;

class Topics extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            number: 0,
            size: 3,
            categoryIds: [],
        }
    }

    componentDidMount() {
        const {findTopicForPage} = this.props;
        findTopicForPage({
            categoryIds: [],
            number: this.state.number,
            size: this.state.size,
        })
    }

    handleFormSubmit = (checkedTags) => {
        const {findTopicForPage} = this.props;
        findTopicForPage({
            "categoryIds": checkedTags,
            number: this.state.number,
            size: this.state.size,
        })
        this.setState({ categoryIds: checkedTags });
    }

    loadMoreData = () => {
        //TODO
        //this.setState({ loading: true });
        const {findMoreTopicForPage} = this.props;
        findMoreTopicForPage({
            "categoryIds": this.state.categoryIds,
            number: this.state.number + 1,
            size: this.state.size,
        })
    }

    getTopicList = (result) => {

        function getTopicItem(topicSub) {
            return topicSub.map((topic, i) => {
                const productUrl = '/topics/video/' + topic.id;
                return (
                    <Col className="gutter-row" md={6} key={topic.id}>
                        <div className={styles.gutterBox}>
                            <Link to={productUrl}>
                                <Card style={{width: 320}} bodyStyle={{padding: 0}}>
                                    <div className={styles.customImage}>
                                        <img alt="example" width="100%"
                                             src={topic.imgUrl}/>
                                    </div>
                                    <div className={styles.customCard}>
                                        <h1>{topic.name}</h1>
                                        <h6>{topic.articleCount} 收录资源 | {topic.follow}关注</h6>
                                        <p>{topic.info}</p>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </Col>
                )
            })
        }

        const topicGroup = chunk(result.data.content, 3);
        return topicGroup.map((topicSub, i) => {
            return (
                <Row gutter={16} type="flex" justify="center" key={"groupId_" + i}>
                    {getTopicItem(topicSub)}
                </Row>
            )
        });
    }



    render() {
        const {topicState} = this.props;
        const resultData = topicState.data;
        let isHasMoreData = false;
        if (resultData !== undefined) {
            const totalPages = resultData.data.totalPages === undefined ? 0 : resultData.data.totalPages;
            if (totalPages !== 0 && totalPages > (this.state.number + 1)) {
                isHasMoreData = true;
            }
        }
        return (
            <div>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={15}>
                        <Card bordered={false}>
                            <Form layout="inline">
                                <StandardFormRow title="所属类目" block style={{paddingBottom: 11}}>
                                    <FormItem>
                                        <TagSelect onChange={this.handleFormSubmit} expandable>
                                            <TagSelect.Option value="1">云\大数据</TagSelect.Option>
                                            <TagSelect.Option value="2">系统\测试</TagSelect.Option>
                                            <TagSelect.Option value="3">前端</TagSelect.Option>
                                            <TagSelect.Option value="4">后端</TagSelect.Option>
                                            <TagSelect.Option value="5">版本管理</TagSelect.Option>
                                            <TagSelect.Option value="6">移动应用</TagSelect.Option>
                                            <TagSelect.Option value="7">数据库</TagSelect.Option>
                                            <TagSelect.Option value="8">产品</TagSelect.Option>
                                            <TagSelect.Option value="9">人工智能</TagSelect.Option>
                                        </TagSelect>
                                    </FormItem>
                                </StandardFormRow>
                            </Form>
                        </Card>
                    </Col>
                </Row>

                {topicState.data === undefined ? "" : this.getTopicList(topicState.data)}

                {
                    isHasMoreData &&
                    <Row gutter={16} type="flex" justify="center">
                        <Col className="gutter-row" md={3}>
                            <Card bordered={false}>
                                <Button
                                    loading={this.state.loading}
                                    size="large"
                                    onClick={this.loadMoreData}
                                >
                                    加载更多
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicState: selectVisibleTopicPage(state)
    }
};

const mapDispatchToProps = dispatch => ({
    findTopicForPage: bindActionCreators(findTopicForPage, dispatch),
    findMoreTopicForPage:bindActionCreators(findMoreTopicForPage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
