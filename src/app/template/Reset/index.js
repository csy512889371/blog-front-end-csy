import React, {Component} from 'react';
import {routerRedux, Link} from 'dva/router';
import {Form, Input, Button, Select, Row, Col, Popover, Progress} from 'antd';
import styles from './index.module.less';

const FormItem = Form.Item;
const {Option} = Select;
const InputGroup = Input.Group;


class Reset extends Component {
    state = {
        count: 0,
        confirmDirty: false,
        visible: false,
        help: '',
        prefix: '86',
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.register.status === 'ok') {
            this.props.dispatch(routerRedux.push('/user/register'));
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

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

    submitting = () => {
      //TODO DELETE
    }

    render() {
        const {form, register} = this.props;
        const {getFieldDecorator} = form;
        const {count, prefix} = this.state;
        return (
            <div className={styles.main}>
                <h2>重置密码</h2>
                <h3>系统会发送邮件到注册邮箱，引导您重置密码！</h3>
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


                    <FormItem>
                        <Button
                            size="large"
                            loading={this.submitting}
                            className={styles.submit}
                            type="primary"
                            htmlType="submit"
                        >
                            功能开发中,如需找回请qq联系管理员。
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


export default Form.create()(Reset);
