import React, {Component} from 'react';
import {Form, Row, Col, Card, Button} from 'antd';
import {connect} from 'react-redux';
import styles from './index.module.less';
import StandardFormRow from '../../../../components/StandardFormRow/index'
import TagSelect from '../../../../components/TagSelect/index'
import {Link} from 'dva/router';
import {selectVisibleTopicPage} from '../selector';
import {findTopicForPage} from '../actions';
import {bindActionCreators} from 'redux';
import chunk from "lodash/chunk";
import JsonUtils from '../../../../utils/JsonUtils';

const FormItem = Form.Item;

class Topics extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        const {findTopicForPage} = this.props;
        findTopicForPage({
            categoryId: '',
            number: 0,
            size: 10,
        })
    }

    handleFormSubmit = (e) => {
        e && e.preventDefault();

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

        const topics = JsonUtils.stringToJson(result.data);
        const topicGroup = chunk(topics, 3);
        return topicGroup.map((topicSub) => {
            return (
                <Row gutter={16} type="flex" justify="center">
                    {getTopicItem(topicSub)}
                </Row>
            )
        });
    }

    render() {
        const {topicState} = this.props;
        return (
            <div>
                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={15}>
                        <Card bordered={false}>
                            <Form layout="inline">
                                <StandardFormRow title="所属类目" block style={{paddingBottom: 11}}>
                                    <FormItem>
                                        <TagSelect onChange={this.handleFormSubmit} expandable>
                                            <TagSelect.Option value="cat1">云\大数据</TagSelect.Option>
                                            <TagSelect.Option value="cat2">系统\测试</TagSelect.Option>
                                            <TagSelect.Option value="cat3">前端</TagSelect.Option>
                                            <TagSelect.Option value="cat4">后端</TagSelect.Option>
                                            <TagSelect.Option value="cat5">版本管理</TagSelect.Option>
                                            <TagSelect.Option value="cat6">移动应用</TagSelect.Option>
                                            <TagSelect.Option value="cat7">数据库</TagSelect.Option>
                                            <TagSelect.Option value="cat8">产品</TagSelect.Option>
                                            <TagSelect.Option value="cat9">人工智能</TagSelect.Option>
                                        </TagSelect>
                                    </FormItem>
                                </StandardFormRow>
                            </Form>
                        </Card>
                    </Col>
                </Row>

                {topicState.data === undefined ? "" : this.getTopicList(topicState.data)}

                <Row gutter={16} type="flex" justify="center">
                    <Col className="gutter-row" md={3}>
                        <Card bordered={false}>
                            <Button
                                size="large"
                            >
                                加载更多
                            </Button>
                        </Card>
                    </Col>
                </Row>
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
    findTopicForPage: bindActionCreators(findTopicForPage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
