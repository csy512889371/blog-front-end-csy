import React, {Component} from 'react';
import {Link} from 'dva/router';
import {Form, Input, Tabs, Button, Icon, Checkbox, Spin, Alert} from 'antd';
import styles from './index.module.less';
import {getQueryString} from '../../utils';
import {appSn} from '../../../apis/utils/appInfo';

import UnitConfig from '../../../uc/index';

const FormItem = Form.Item;
const {TabPane} = Tabs;

class Login extends Component {

    state = {
        type: 'account',
        loading: false,
        message: '',
        messageType: '',
        showMessage: 'none',
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({showMessage: 'none', message: '', messageType: ''});
        const {location, history} = this.props;
        let nextPathname = '';

        let returnPath = getQueryString('returnPath');
        if (location.state && location.state.nextPathname) {
            nextPathname = location.state.nextPathname;
        } else if (returnPath) {
            nextPathname += returnPath;
        }

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({loading: true});
                UnitConfig.login(
                    {username: values.userName, password: values.password, remember: values.remember, appSn: appSn},
                    history, nextPathname, values.remember, (loginMessage) => {
                        if (loginMessage && loginMessage.err) {
                            this.setState({
                                showMessage: 'block',
                                message: loginMessage.err,
                                messageType: 'error',
                                loading: false
                            });
                        }
                    }
                );
            }
        });

    }

    render() {
        const {form} = this.props;
        const {getFieldDecorator} = form;
        const {type} = this.state;

        return (
            <div className={styles.main}>
                <Spin spinning={this.state.loading}>

                    <Form onSubmit={this.handleSubmit}>
                        <Tabs animated={false} className={styles.tabs} activeKey={type} onChange={this.onSwitch}>
                            <TabPane tab="账户密码登录" key="account">
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{
                                            required: type === 'account', message: '请输入账户名！',
                                        }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="user" className={styles.prefixIcon}/>}
                                            placeholder="邮箱"
                                        />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            required: type === 'account', message: '请输入密码！',
                                        }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="lock" className={styles.prefixIcon}/>}
                                            type="password"
                                            placeholder="请输入密码"
                                        />
                                    )}
                                </FormItem>
                            </TabPane>
                        </Tabs>
                        <FormItem className={styles.additional}>
                            <Alert style={{display: this.state.showMessage}} message={this.state.message}
                                   type={this.state.messageType} showIcon/>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
                            )}
                            <span>
                            <Link className={styles.forgot} to="/user/reset">忘记密码</Link>
                            <Link className={styles.forgot} to="/user/register">注册账户&nbsp;&nbsp;</Link>
                        </span>

                            <Button size="large" className={styles.submit} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Spin>
            </div>
        )
    }
}

export default Form.create()(Login);
