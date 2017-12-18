import React from 'react'
import PropTypes from 'prop-types'
import {
    Modal,
} from 'antd'

import Form from './form'

export default class FormModal extends React.Component {

    render() {
        const {
            modalKey,
            visible,
            title,
            fields,
            onCancel,
            onOk,
            okText,
            showCancel,
            noBtn
        } = this.props
        return (
            <Modal
                wrapClassName="form"
                key={modalKey}
                visible={visible}
                title={title}
                onCancel={onCancel}
                footer={null}
            >
                <Form
                    fields={fields}
                    onOk={onOk}
                    onCancel={onCancel}
                    showCancel={showCancel ? showCancel : false}
                    okText={okText}
                    noBtn={noBtn ? noBtn : false}
                />
            </Modal>
        )
    }
}

FormModal.propTypes = {
    modalKey: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(Object).isRequired,
    okText: PropTypes.string,
}
