import React, {Component, PropTypes} from 'react'

import style from './index.module.less'

import ArticleList from './ArticleList';

class ArticleListHome extends Component {

    constructor(props) {
        super(props);
    }

    get_article_detail = () => {

    }

    render() {
        let articleList = [];
        articleList.push({
            coverImg: "http://img.my.csdn.net/uploads/201712/15/1513295218_6486.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123'
        })
        articleList.push({
            coverImg: "http://img.my.csdn.net/uploads/201712/13/1513163020_3495.jpg",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123'
        })
        articleList.push({
            coverImg: "http://img.my.csdn.net/uploads/201712/15/1513295218_6486.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123'
        })
        articleList.push({
            coverImg: "http://img.my.csdn.net/uploads/201712/15/1513295218_6486.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123'
        })
        articleList.push({
            coverImg: "http://img.my.csdn.net/uploads/201712/15/1513295218_6486.png",
            title: "web前端性能优化",
            time: "2017-12-12",
            viewCount: "123",
            commentCount: '123'
        })

        return (
            <div className={style.container}>
                <ArticleList
                    history={this.props.history}
                    data={articleList}
                    getArticleDetail={this.get_article_detail}
                />
            </div>
        )
    }

}

export default ArticleListHome;
