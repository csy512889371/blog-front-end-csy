import React, {Component, PropTypes} from 'react'
import styles from './index.module.less'
import {Avatar, Badge, Button, Card, Divider, Icon, List, Spin} from 'antd';
import {Link} from 'dva/router';

class VideoSubList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        data: [],
    }

    renderActivities = (item) => {
        const IconText = ({type, text, style}) => (
            <span>
                <Icon type={type} style={{marginRight: 8, color: '#08c'}}/>
                <span style={style}>
                    {text}
                </span>
              </span>
        );
        return (
            <List.Item key={item.id}>
                <List.Item.Meta
                    avatar={<Avatar src={item.imageUrl !== null ? item.imageUrl : "http://img.my.csdn.net/uploads/201712/17/1513517930_7778.png"}/>}
                    title={
                        <span>
                            <a target="_blank"
                               href={"/videos/doc/" + item.id}><h3>{item.name}</h3>
                            </a>
                        </span>
                    }
                    description={
                        <span className={styles.datetime} title={item.name}>
                            {item.isEssence === 1 ? <Badge count={"精"} style={{backgroundColor: '#52c41a'}}/> : ""}
                            <Divider type="vertical"/>
                            {item.isSolo === 1 ? <Badge count="单售"/> : ""}

                            <Divider type="vertical"/>
                                9天前
                                <Divider type="vertical"/>
                                <IconText type="star-o" text={item.collection}/>
                                <Divider type="vertical"/>
                                <IconText type="like-o" text={item.praise}/>
                                <Divider type="vertical"/>
                            </span>
                    }
                />

                <Badge count={"   " + item.view} style={{backgroundColor: '#d48806'}}
                       overflowCount={9999}/>
            </List.Item>
        );
    }

    render() {
        const {videoList, loadingMore, showLoadingMore, loading, onLoadMore} = this.props;

        const loadMore = showLoadingMore ? (
            <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
                {loadingMore && <Spin/>}
                {!loadingMore && <Button loading={loading} onClick={onLoadMore}>更多</Button>}
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
                          dataSource={videoList}
                          renderItem={this.renderActivities}
                          className={styles.activitiesList}
                          bordered={true}
                    >
                    </List>
                </Card>
            </div>
        )
    }
}

export default VideoSubList;
