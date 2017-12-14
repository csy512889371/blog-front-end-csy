import React, {Component} from 'react';

import {Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert} from 'antd';
import './index.less';

const FormItem = Form.Item;
const {TabPane} = Tabs;

class Login extends React.Component {

    state = {
        count: 0,
        type: 'account',
    };

    render() {
        const {form, login} = this.props;
        const {getFieldDecorator} = form;
        const {count, type} = this.state;


        return (

            <div className="main">
                <Form onSubmit={this.handleSubmit}>
                    <Tabs animated={false} className="main" activeKey={type} onChange={this.onSwitch}>
                        <TabPane tab="账户密码登录" key="account">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{
                                        required: type === 'account', message: '请输入账户名！',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="user" className="prefixIcon"/>}
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
                                        prefix={<Icon type="lock" className="prefixIcon"/>}
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
                                        prefix={<Icon type="mobile" className="prefixIcon"/>}
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
                                                prefix={<Icon type="mail" className="prefixIcon"/>}
                                                placeholder="验证码"
                                            />
                                        )}
                                    </Col>
                                    <Col span={8}>
                                        <Button
                                            disabled={count}
                                            className="getCaptcha"
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

                    <FormItem className="additional">
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox className="autoLogin">自动登录</Checkbox>
                        )}
                        <a className="forgot" href="">忘记密码</a>
                        <Button size="large" className="submit" type="primary" htmlType="submit">
                            登录
                        </Button>
                    </FormItem>

                </Form>
            </div>

        )
    }
}

export default Form.create()(Login);
