import React from 'react';
import {Modal, Icon, message} from 'antd';
import {Link} from 'dva/router';
import ColorPicker from '../../Color/ColorPicker';
import {loadScript} from '../../utils';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.lessLoaded = false;
        this.state = {
            color: '#108ee9',
        };
    }

    handleColorChange = (color) => {

        const changeColor = () => {
            window.less.modifyVars({
                '@primary-color': '#108ee9',
            }).then(() => {
                console.log('改变颜色成功');
                this.setState({color});
            });
        };

        const lessUrl = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js';

        if (this.lessLoaded) {
            changeColor();
        } else {
            window.less = {
                async: true,
            };
            loadScript(lessUrl).then(() => {
                this.lessLoaded = true;
                changeColor();
            });
        }
    }

    render() {
        return (
            <footer id="footer">
                <ul>
                    <li>
                        <h2><Icon type="link"/> Eva Architect</h2>
                        <div>
                            <Link to="/">
                                Home
                            </Link>
                        </div>


                        <div style={{marginTop: 12}}>
                            <ColorPicker
                                type="sketch"
                                small
                                color={this.state.color}
                                position="top"
                                presetColors={[
                                    '#f04134',
                                    '#00a854',
                                    '#108ee9',
                                    '#f5317f',
                                    '#f56a00',
                                    '#7265e6',
                                    '#ffbf00',
                                    '#00a2ae',
                                ]}
                                onChangeComplete={this.handleColorChange}
                            />
                        </div>


                    </li>
                    <li>
                        <h2><Icon type="link"/> 资源链接</h2>
                        <div>
                            <a href="https://github.com/ReactTraining/react-router">react-router</a>
                            <span> - </span>
                            官网
                        </div>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="http://iconfont.cn/">iconfont</a> -
                            矢量图
                        </div>
                        <div>
                            <a target="_blank" rel="noopener noreferrer"
                               href="http://leonshi.com/redux-saga-in-chinese/docs/api/index.html">redux-saga</a> -
                            中文手册
                        </div>

                    </li>
                    <li>
                        <h2><Icon type="customer-service"/> 联系方式</h2>
                        <div>
                            QQ群号(架构师成长之路)：688324454
                        </div>

                    </li>
                    <li>
                        <h2>Copyright © {new Date().getFullYear()}</h2>
                        <div>
                            www.mqyjq.com
                            &nbsp;
                        </div>
                        <div>
                            Built with&nbsp; eva
                        </div>
                    </li>
                </ul>


            </footer>
        );
    }


}


export default Footer;
