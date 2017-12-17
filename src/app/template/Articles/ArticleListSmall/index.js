import React, {Component, PropTypes} from 'react'
import moment from 'moment';
import styles from './index.module.less'
import {Spin, Button, Card, List, Avatar, Icon, Divider, Badge} from 'antd';


class ArticleListHome extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
    }

    onLoadMore = () => {

    }

    renderActivities = (item) => {
        const IconText = ({type, text}) => (
            <span>
                <Icon type={type} style={{marginRight: 8, color: '#08c'}}/>
                {text}
              </span>
        );

        return (
            <List.Item key={item.id}>
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar}/>}
                    title={
                        <span>
                                <a className={styles.username}>
                                    <h3>{item.title}</h3>
                                </a>
                            </span>
                    }
                    description={
                        <span className={styles.datetime} title="web前端性能优化">
                                <Badge count={"精"} style={{backgroundColor: '#52c41a'}}/>
                                <Divider type="vertical"/>
                                <Badge count={"单售"}/>
                                <Divider type="vertical"/>
                                9天前
                                <Divider type="vertical"/>
                                <IconText type="star-o" text="88"/>
                                <Divider type="vertical"/>
                                <IconText type="like-o" text="66"/>
                                <Divider type="vertical"/>
                                <IconText type="message" text="8888"/>

                            </span>
                    }
                />
            </List.Item>
        );
    }

    render() {

        let articleList = [];
        articleList.push({
            avatar: "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png",
            title: "软件测试技术入门和详细剖析",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123',
            id: "1"
        })
        articleList.push({
            avatar: "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123',
            id: "2"
        })
        articleList.push({
            avatar: "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123',
            id: "3"
        })
        articleList.push({
            avatar: "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123',
            id: "4"
        })
        articleList.push({
            avatar: "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123',
            id: "5"
        })


        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore}>更多</Button>}
            </div>
        ) : null;

        return (
            <div>

                <Card
                    bodyStyle={{padding: 0}}
                    bordered={false}
                >
                    <List size="large"
                          loadMore={loadMore}
                          dataSource={articleList}
                          renderItem={this.renderActivities}
                          className={styles.activitiesList}
                    >
                    </List>
                </Card>
            </div>
        )
    }

}

export default ArticleListHome;
