import React, { Component } from 'react'
import { Table } from 'antd'
import PerfectScrollbar from 'perfect-scrollbar'

import Boxer from '../../Boxer/Boxer'
import db from './db'

const Box = Boxer
const columns = [
    {
        title: 'UserID',
        width: 150,
        dataIndex: 'userId',
        key: 'userId',
        fixed: 'left'
    },
    { title: 'PostID', dataIndex: 'id', key: 'id', width: 150 },
    { title: 'Title', dataIndex: 'title', key: 'title', width: 250 },
    { title: 'Description', dataIndex: 'body', key: 'body' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="#">action</a>
    }
]

export default class CategoriesList extends Component {
    state = {
        db: []
    }

    render() {
        const data = this.state.db.map(data => ({
            key: data.id,
            ...data
        }))

        return (
            <Table
                rowSelection={{}}
                bordered={true}
                size="small"
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 25 }}
                scroll={{ x: 1500, y: 450 }}
            />
        )
    }
    componentDidMount() {
        this.setState({ db: db })

        this.ps = new PerfectScrollbar(
            document.querySelector('.ant-table-body')
        )
        document.querySelectorAll('.ant-table-body-inner').forEach(body => {
            body.style.position = 'relative'
            new PerfectScrollbar(body)
        })
    }
}
