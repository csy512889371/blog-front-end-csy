import React from 'react';
import {Modal, Icon, message} from 'antd';
import {Link} from 'react-router-dom';
import ColorPicker from '../Color/ColorPicker';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.lessLoaded = false;

        this.state = {
            color: '#108ee9',
        };
    }

    handleColorChange = (color) => {

    }

    render() {
        return (
            <footer id="footer">
                <ul>
                    <li>
                        <h2><Icon type="link"/> nick Architect</h2>
                        <div>
                            <a target="_blank " href="www.mqyjq.com">
                                Home
                            </a>
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
                            QQ群号：345714893
                        </div>

                    </li>
                    <li>
                        <h2>Copyright © {new Date().getFullYear()}</h2>
                        <div>
                            www.mqyjq.com
                            &nbsp;
                        </div>
                        <div>
                            Built with&nbsp; nick
                        </div>
                    </li>
                </ul>
            </footer>
        );
    }


}


export default Footer;
