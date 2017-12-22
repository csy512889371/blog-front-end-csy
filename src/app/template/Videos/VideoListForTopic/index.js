import React from 'react';
import Banner from './Banner';
import {getStyle} from '../../../utils/index';
import {Badge, Row, Col, List, Avatar, Card, Timeline} from 'antd';
import Menus from "../../../components/menu/Menus";
import styles from './index.module.less';
import VideoListSmall from '../VideoListSmall/index';

import {FormModal} from '../../../components/ModalForm/index';

class Topics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    fields = () => {
        return [{
            label: '点击',
            type: 'buy',
            name: 'title',
            options: {
                initialValue:"自动获取人工智能的百度网盘链接",
                url:"https://sns.io/sell/GDHIVN6W"
            }
        }]
    }

    buy = () => {
        this.setState({
            modalShow: true
        })
    }

    onCancel = () => {
        this.setState({
            modalShow: false
        })
    }

    get_article_list = (tag, index) => {

    }

    render() {
        const {match} = this.props;
        console.log("asdfasdfasdfasdfasdf");
        console.log(match);

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

        return (
            <div>
                <Banner buy={this.buy}  />
                <div>
                    <div>
                        <Menus current={match.params.type}
                               fromUrl={"/topics"}
                               cateId={match.params.id}
                               getArticleList={(tag) => this.get_article_list(tag, 1)} categories={categories}
                               history={this.props.history}/>
                    </div>

                    <div>
                        <Row gutter={16} type="flex" justify="center">
                            <Col className="gutter-row" md={12}>
                                <Card bordered={false}>
                                    <VideoListSmall/>
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

export default Topics;
