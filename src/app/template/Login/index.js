import React, {Component} from 'react';
import { Link } from 'dva/router';
import {Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Divider} from 'antd';
import styles from './index.module.less';

const FormItem = Form.Item;
const {TabPane} = Tabs;

class Login extends React.Component {

    state = {
        count: 0,
        type: 'account',
    };

    handleSubmit = (e) => {

    }

    render() {
        const {form, login} = this.props;
        const {getFieldDecorator} = form;
        const {count, type} = this.state;

        return (
            <div className={styles.main}>
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
                                        prefix={<Icon type="user" className={styles.prefixIcon} />}
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
                                        prefix={<Icon type="lock" className={styles.prefixIcon} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                )}
                            </FormItem>
                        </TabPane>
                    </Tabs>
                    <FormItem className={styles.additional}>
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
            </div>
        )
    }
}

export default Form.create()(Login);
