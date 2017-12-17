import React,{Component} from 'react'
import {Menu} from 'antd'
import style from './index.module.less'

export default class Menus extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:this.props.categories[0].code
        }
    }

    handleClick = (e) => {
        if(e.key === 'video'){
            this.props.getArticleList('');
        }else{
            this.props.getArticleList(e.key);
        }
        let toPath = e.key === 'video'?'/blog/community':'/blog/community/'+e.key;
        this.setState({
            current: e.key,
        });
        this.props.history.push(toPath);
    };

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className={style.MenuContainer}
            >
                {
                    this.props.categories.map((item,index)=>(
                        <Menu.Item key={item.code}>
                            {item.name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }

    componentDidMount() {
        this.setState({
            current:this.props.history.location.pathname.replace('\/blog\/community','').replace("/","") || 'video' || 'video'
        })
    }

}
