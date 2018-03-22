import React, { Component } from 'react'
import { Form, Icon, Input, Cascader } from 'antd'
const FormItem = Form.Item

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
]

function onChange(value) {
    console.log(value)
}

class NormalForm extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('category', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Category Name!'
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="folder"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder="Category name"
                        />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('parent', {
                        rules: [
                            {
                                required: false,
                                message: 'Select the parent categoty if exists!'
                            }
                        ]
                    })(
                        <Cascader
                            options={options}
                            onChange={onChange}
                            placeholder="Parent Category"
                        />
                    )}
                </FormItem>
            </Form>
        )
    }
}

const AddCategoryForm = Form.create()(NormalForm)

export default AddCategoryForm
