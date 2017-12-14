import React, {Component} from 'react';
import { Link } from 'dva/router';
import {Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert} from 'antd';
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
                                        placeholder="admin"
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
                                        placeholder="888888"
                                    />
                                )}
                            </FormItem>
                        </TabPane>
                        <TabPane tab="手机号登录" key="mobile">
                            <FormItem>
                                {getFieldDecorator('mobile', {
                                    rules: [{
                                        required: type === 'mobile', message: '请输入手机号！',
                                    }, {
                                        pattern: /^1\d{10}$/, message: '手机号格式错误！',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="mobile" className={styles.prefixIcon} />}
                                        placeholder="手机号"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                <Row gutter={8}>
                                    <Col span={16}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{
                                                required: type === 'mobile', message: '请输入验证码！',
                                            }],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="mail" className={styles.prefixIcon} />}
                                                placeholder="验证码"
                                            />
                                        )}
                                    </Col>
                                    <Col span={8}>
                                        <Button
                                            disabled={count}
                                            className={styles.getCaptcha}
                                            size="large"
                                            onClick={this.onGetCaptcha}
                                        >
                                            {count ? `${count} s` : '获取验证码'}
                                        </Button>
                                    </Col>
                                </Row>
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
                        <a className={styles.forgot} href="">忘记密码</a>
                        <Button size="large" className={styles.submit} type="primary" htmlType="submit">
                            登录
                        </Button>
                    </FormItem>
                </Form>
                <div className={styles.other}>
                    其他登录方式
                    {/* 需要加到 Icon 中 */}
                    <span className={styles.iconAlipay} />
                    <span className={styles.iconTaobao} />
                    <span className={styles.iconWeibo} />
                    <Link className={styles.register} to="/user/register">注册账户</Link>
                </div>
            </div>

        )
    }
}

export default Form.create()(Login);
