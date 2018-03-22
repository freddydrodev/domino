import React, { Component } from 'react'
import { Table } from 'antd'

export default class LearnTable extends Component {
    state = {
        sorting: false,
        dataSource: [
            { key: 'a', name: 'Mike', age: 24, location: 'babi' },
            { key: 'b', name: 'Fred', age: 19, location: 'accra' },
            { key: 'c', name: 'Franck', age: 15, location: 'poy' }
        ],
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: txt => <a href="#">{txt}</a>
            },
            { title: 'Location', dataIndex: 'location', key: 'location' },
            { title: 'Age', dataIndex: 'age', key: 'age' }
        ]
    }

    changeSortageHandler = () => {
        const sorting = this.state.sorting
        this.setState({ sorting: !sorting })
    }
    render() {
        const { dataSource, columns } = this.state
        return <Table dataSource={dataSource} columns={columns} />
    }
}
