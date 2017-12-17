import React, {Component, PropTypes} from 'react'
import {ArticleListCell} from "../ArticleListCell";

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => (
                        <ArticleListCell getArticleDetail={this.props.getArticleDetail} history={this.props.history}
                                         key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}
