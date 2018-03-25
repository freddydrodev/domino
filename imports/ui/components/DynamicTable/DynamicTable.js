import React, { Component } from 'react'
import { Table } from 'antd'
import PerfectScrollbar from 'perfect-scrollbar'

import DynamicCell from './DynamicCell/DynamicCell'

export default class DynamicTable extends Component {
    componentDidMount() {
        this.ps = new PerfectScrollbar(
            document.querySelector('.ant-table-body')
        )
        document.querySelectorAll('.ant-table-body-inner').forEach(body => {
            body.style.position = 'relative'
            new PerfectScrollbar(body)
        })
    }

    render() {
        const columns = this.props.columnsConfig.map(col => ({
            render: (txt, record) =>
                col.cellType ? (
                    <DynamicCell value={txt} type={col.cellType} />
                ) : (
                    txt
                ),
            ...col,
            cellType: null
        }))
        return (
            <Table
                rowSelection={{}}
                bordered={true}
                size="small"
                columns={columns}
                dataSource={this.props.dataSource}
                pagination={{ pageSize: 25 }}
                scroll={{ x: 1500, y: 450 }}
                {...this.props.options}
            />
        )
    }
}
