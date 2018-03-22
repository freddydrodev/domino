import React, { Component } from 'react'
import { Modal, Button, Input, Form } from 'antd'

import AddCategoryForm from './AddCategoryForm'
const FormItem = Form.Item
export default class AddCategory extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({ visible: true })
    }
    handleOk = e => {
        console.log(e)
        this.setState({ visible: false })
    }
    handleCancel = e => {
        console.log(e)
        this.setState({ visible: false })
    }
    render() {
        return (
            <div>
                <div className="d-flex between middle mb-3">
                    <h2 className="mb-0">Categories</h2>
                    <div>
                        <Button type="primary" onClick={this.showModal}>
                            Open
                        </Button>
                        <Modal
                            title="Add Category"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <AddCategoryForm />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
