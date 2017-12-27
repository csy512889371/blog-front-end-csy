import React, {Component} from 'react';
import {routerRedux, Link} from 'dva/router';
import {Form, Input, Button, Select, Row, Col, Popover, Progress} from 'antd';
import styles from './index.module.less';

const FormItem = Form.Item;
const {Option} = Select;
const InputGroup = Input.Group;

const passwordStatusMap = {
    ok: <div className={styles.success}>强度：强</div>,
    pass: <div className={styles.warning}>强度：中</div>,
    pool: <div className={styles.error}>强度：太短</div>,
};

const passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    pool: 'exception',
};

class Register extends Component {
    state = {
        count: 0,
        confirmDirty: false,
        visible: false,
        help: '',
        prefix: '86',
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.register.status === 'ok') {
            this.props.dispatch(routerRedux.push('/user/register-result'));
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onGetCaptcha = () => {
        let count = 59;
        this.setState({count});
        this.interval = setInterval(() => {
            count -= 1;
            this.setState({count});
            if (count === 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    };

    getPasswordStatus = () => {
        const {form} = this.props;
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'pool';
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields({force: true}, (err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: 'register/submit',
                    payload: {
                        ...values,
                        prefix: this.state.prefix,
                    },
                });
            }
        });
    };

    checkConfirm = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不匹配!');
        } else {
            callback();
        }
    };

    checkPassword = (rule, value, callback) => {
        if (!value) {
            this.setState({
                help: '请输入密码！',
                visible: !!value,
            });
            callback('error');
        } else {
            this.setState({
                help: '',
            });
            if (!this.state.visible) {
                this.setState({
                    visible: !!value,
                });
            }
            if (value.length < 6) {
                callback('error');
            } else {
                const {form} = this.props;
                if (value && this.state.confirmDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            }
        }
    };

    changePrefix = (value) => {
        this.setState({
            prefix: value,
        });
    };

    renderPasswordProgress = () => {
        const {form} = this.props;
        const value = form.getFieldValue('password');
        const passwordStatus = this.getPasswordStatus();
        return value && value.length ? (
            <div className={styles[`progress-${passwordStatus}`]}>
                <Progress
                    status={passwordProgressMap[passwordStatus]}
                    className={styles.progress}
                    strokeWidth={6}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        ) : null;
    };

    submitting = () => {
      //TODO DELETE
    }

    render() {
        const {form, register} = this.props;
        const {getFieldDecorator} = form;
        const {count, prefix} = this.state;
        return (
            <div className={styles.main}>
                <h3>注册</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('mail', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入邮箱地址！',
                                },
                                {
                                    type: 'email',
                                    message: '邮箱地址格式错误！',
                                },
                            ],
                        })(<Input size="large" placeholder="邮箱"/>)}
                    </FormItem>
                    <FormItem help={this.state.help}>
                        <Popover
                            content={
                                <div style={{padding: '4px 0'}}>
                                    {passwordStatusMap[this.getPasswordStatus()]}
                                    {this.renderPasswordProgress()}
                                    <div style={{marginTop: 10}}>
                                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                    </div>
                                </div>
                            }
                            overlayStyle={{width: 240}}
                            placement="right"
                            visible={this.state.visible}
                        >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        validator: this.checkPassword,
                                    },
                                ],
                            })(
                                <Input
                                    size="large"
                                    type="password"
                                    placeholder="至少6位密码，区分大小写"
                                />
                            )}
                        </Popover>
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码！',
                                },
                                {
                                    validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="确认密码"/>)}
                    </FormItem>



                    <FormItem>
                        <Button
                            size="large"
                            loading={this.submitting}
                            className={styles.submit}
                            type="primary"
                            htmlType="submit"
                        >
                            注册
                        </Button>
                        <Link className={styles.login} to="/">
                            系统开发中暂不支持注册。
                        </Link>
                        <Link className={styles.login} to="/user/login">
                            使用已有账户登录
                        </Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}


export default Form.create()(Register);
