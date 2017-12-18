import React from 'react'
import ReactDOM from 'react-dom'
import {
    Badge,
    Button,
    Input,
    InputNumber,
    Select,
    DatePicker,
    Form,
    Radio,
    Switch,
} from 'antd'

import styles from './index.module.less'

const FormItem = Form.Item
const RadioGroup = Radio.Group

class ModForm extends React.Component {

    componentDidMount() {
        for (const component of this.needToEmptyStyleComponents) {
            const dom = ReactDOM.findDOMNode(component);
            dom.setAttribute('style', '');
        }
    }

    handleSubmit = (e) => {
        e && e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const {onOk} = this.props
                onOk && onOk(values)
                this.props.form.resetFields()
            }
        })
    }
    doCancel = () => {
        const {onCancel} = this.props
        onCancel && onCancel()
        this.props.form.resetFields()
    }

    generateFormItem = ({formItemLayout, label, hasFeedBack, name, options, component}) => {
        const {getFieldDecorator} = this.props.form
        return (<FormItem
            {...formItemLayout}
            key={name}
            label={label}
            hasFeedBack={hasFeedBack}
        >
            {getFieldDecorator(name, options)(component)}
        </FormItem>)
    }

    getTextField = field => <span className="ant-form-text">{field.options && field.options.initialValue}</span>

    getInputField = field => (<Input/>)

    getInputNumberField = field => <InputNumber
        step={field.options.step}
        formatter={field.options.formatter}
        style={{width: '100%'}}
    />

    getTextAreaField = field => (
        <Input type="textarea" rows={field.options.rows || 4} disabled={field.options.disabled}/>)

    getBuyTextField = field => (
        <div>
            <a target="_blank" rel="扫码支付" href={field.options.url}>
                <Badge count={"扫描支付"} style={{backgroundColor: '#135200'}}/>
            </a>
            <div>
                {field.options && field.options.initialValue}
            </div>
            <div style={{color: '#eb2f96'}}>
                微信支付目前有问题，请使用支付宝支付。
            </div>
        </div>
    )

    getSelectField = field => (<Select
        placeholder="请选择"
        style={{
            width: '100%',
        }}
        disabled={field.disabled}
        multiple={field.multiple}
    >
        {field.items().map(({key, value}) =>
            <Select.Option key={key.toString()} value={key.toString()}>{value}</Select.Option>)}
    </Select>)

    getRadioGroupField = field => <RadioGroup>
        {field.items().map(({key, value}) =>
            <Radio key={key.toString()} value={key.toString()}>{value}</Radio>
        )}
    </RadioGroup>

    getDateField = field => (<DatePicker
        showToday={false}
        placeholder="请选择日期"
    />)

    getDateTimeField = field =>
        (<DatePicker
            showTime
            format="YYYY-MM-DD"
            placeholder="请选择时间"
            showToday={false}
            ref={item => this.needToEmptyStyleComponents.push(item)}
        />)

    getSwitchField = field => <Switch
        checkedChildren={'开'}
        unCheckedChildren={'关'}
        disabled={field.options.disabled}
        defaultChecked={field.options.initialValue}
    />

    getUploadField = field =>
        <input
            type="file"
            ref={field.options.ref}
            disabled={field.options.disabled}
            name="patchFile"
        />

    generateFormFields(fields) {
        const formItemLayout = this.props.formItemLayout || {
            labelCol: {span: 6},
            wrapperCol: {span: 14}
        }
        const components = [];
        this.needToEmptyStyleComponents = [];
        for (const field of fields) {
            let component = null;
            switch (field.type) {
                case 'input':
                    component = this.getInputField(field)
                    break;
                case 'inputNumber':
                    component = this.getInputNumberField(field)
                    break;
                case 'select':
                    component = this.getSelectField(field)
                    break;
                case 'radioGroup':
                    component = this.getRadioGroupField(field)
                    break;
                case 'date':
                    component = this.getDateField(field)
                    break;
                case 'datetime':
                    component = this.getDateTimeField(field)
                    break;
                case 'switch':
                    component = this.getSwitchField(field)
                    break;
                case 'upload':
                    component = this.getUploadField(field)
                    break;
                case 'textarea':
                    component = this.getTextAreaField(field)
                    break;
                case 'buy':
                    component = this.getBuyTextField(field)
                    break;
                default:
                    component = this.getTextField(field)
                    break
            }
            component = this.generateFormItem({
                formItemLayout,
                component,
                label: field.label,
                name: field.name,
                options: field.options,
                hasFeedBack: field.type === 'input',
            })
            components.push(component);
        }
        const buttons = (<FormItem
            key="control-buttons"
            wrapperCol={{
                span: 14,
                offset: 6,
            }}
        >
            <div className={styles.buttons}>
                {this.props.showCancel && <Button onClick={this.doCancel}>取消</Button>}
                {!this.props.noBtn && <Button type="primary" htmlType="submit">{this.props.okText || '确定'}</Button>}
            </div>

        </FormItem>)
        components.push(buttons)
        return components;
    }

    render() {
        const {
            fields,
        } = this.props
        return (
            <div className={styles.formWrapper}>
                <Form onSubmit={this.handleSubmit} ref={(c) => {
                    this.form = c;
                    this.props.cb && this.props.cb(this.handleSubmit)
                }}>
                    {this.generateFormFields(fields)}
                </Form>
            </div>
        )
    }
}

const ModalForm = Form.create()(ModForm)

export default ModalForm
