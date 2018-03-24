import React, { Component } from 'react'
import { Table } from 'antd'
import PerfectScrollbar from 'perfect-scrollbar'

import Boxer from '../../Boxer/Boxer'

const Box = Boxer
const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        style: { borderRight: '1px solid #eee' }
    },
    { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
    { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
    { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
    { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
    { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
    { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
    { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="#">action</a>
    }
]

const data = []
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
    })
}

class PerfectScrollTable extends Table {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}
}
export default class CategoriesList extends Component {
    render() {
        return (
            <Table
                bordered={true}
                size="small"
                columns={columns}
                dataSource={data}
                scroll={{ x: 1500, y: 300 }}
            />
        )
    }
    componentDidMount() {
        this.ps = new PerfectScrollbar(
            document.querySelector('.ant-table-body')
        )
        document.querySelectorAll('.ant-table-body-inner').forEach(body => {
            body.style.position = 'relative'
            new PerfectScrollbar(body)
        })
    }
}
