import React, {Component} from 'react';
import {Form, message} from 'antd';
import * as api from '../../../../apis';
import StandardFormRow from '../../../../components/StandardFormRow/index'
import TagSelect from '../../../../components/TagSelect/index'

const FormItem = Form.Item;
const {findAllCategory} = api.topic;
class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getData();
    }

    getData() {
        findAllCategory().then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    this.setState({data: res.data});
                } else {
                    message.error('获取主题信息失败');
                }
            })
            .catch(() => {
                message.error('获取主题信息失败');
            });
    }

    getTagSelect = () => {

        return (
            <TagSelect onChange={this.props.handleFormSubmit} expandable>

                {
                    this.state.data.map((item, index) => (
                        <TagSelect.Option value={item.id} key={"cat" + index}>{item.name}</TagSelect.Option>
                    ))
                }

            </TagSelect>
        )
    };

    render() {
        return (
            <Form layout="inline">
                <StandardFormRow title="所属类目" block style={{paddingBottom: 11}}>
                    <FormItem>
                        {this.getTagSelect()}
                    </FormItem>
                </StandardFormRow>
            </Form>
        )
    }
}

export default Category;
