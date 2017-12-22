import React, {Component} from 'react';
import globalStyles from '../global.module.less';
import {getStyle} from '../../utils';
import {Button, Row, Col, List, Avatar, Card} from 'antd';
import Menus from "../../components/menu/Menus";
import {Link} from 'dva/router';
import style from './index.module.less'
import VideoListSmall from '../Videos/VideoListSmall';

class Community extends Component {

    constructor(props) {
        super(props);
    }

    get_article_list = (tag, index) => {

    }

    render() {
        const {match} = this.props;

        console.log('matchmatchmatchmatchmatch');
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
                <section className={globalStyles.bannerHeaderWrapper}/>

                <div>
                    <div>
                        <Menus current={match.params.type}
                               fromUrl={"/blog/community"}
                               cateId={match.params.id}
                               getArticleList={(tag) => this.get_article_list(tag, 1)}
                               categories={categories}
                               history={this.props.history}/>
                    </div>

                    <div>
                        <Row gutter={16} type="flex" justify="center">
                            <Col className="gutter-row" md={12}>
                                <Card bordered={false}>
                                    <VideoListSmall/>
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

export default Community;
