import React, {Component} from 'react';
import {Link} from 'dva/router';
import {Form, Input, Button, Popover, Progress, message} from 'antd';
import styles from './index.module.less';

import {selectBlogRegisterUser} from '../selector';
import {addUser, clearState} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    FIND_USER_ADD_FETCH, FIND_USER_ADD_SUCCESS, FIND_USER_ADD_ERROR
} from '../actionTypes';

const FormItem = Form.Item;

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
        confirmDirty: false,
        visible: false,
        help: '',
        submitting: false,
    };

    componentWillReceiveProps(nextProps) {
        const topicVideoState = nextProps.topicVideoState;
        switch (topicVideoState.type) {
            case FIND_USER_ADD_FETCH:
                this.setState({submitting: true, isShowError: true});
                break;
            case FIND_USER_ADD_SUCCESS:
                if (topicVideoState.data.success === true) {
                    message.info("注册成功");
                    nextProps.history.push("/user/login");
                    break;
                }

                if (this.state.isShowError) {
                    message.error(topicVideoState.data.errMessage);
                }
                this.setState({submitting: false, isShowError: false});
                break;
            case FIND_USER_ADD_ERROR:
                this.setState({submitting: true, isShowError: false});
                break;
            default:
                break;
        }
    }

    componentWillUnmount() {
        const {clearState} = this.props;
        clearState();
    }

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
        const {addUser} = this.props;
        this.props.form.validateFields({force: true}, (err, values) => {
            if (!err) {
                addUser({
                    ...values
                })
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

    render() {
        const {form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <div className={styles.main}>
                <h3>注册</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('username', {
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
                    <FormItem>
                        {getFieldDecorator('nickname', {
                            rules: [{required: true, message: '请填写用户名!', whitespace: true}],
                        })(
                            <Input placeholder="用户名"/>
                        )}
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
                            loading={this.state.submitting}
                            className={styles.submit}
                            type="primary"
                            htmlType="submit"
                        >
                            注册
                        </Button>
                        <Link className={styles.login} to="/user/login">
                            使用已有账户登录
                        </Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        topicVideoState: selectBlogRegisterUser(state)
    }
};

const mapDispatchToProps = dispatch => ({
    clearState: bindActionCreators(clearState, dispatch),
    addUser: bindActionCreators(addUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Register));
