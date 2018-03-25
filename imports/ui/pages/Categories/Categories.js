import React, { Component } from 'react'
import { Layout } from 'antd'

import AddCategory from '../../components/Categories/AddCategory/AddCategory'
import CategoriesList from '../../components/Categories/CategoriesList/CategoriesList'
import LearnTable from '../../components/Categories/LearnTables/LearnTables'
import DynamicTable from '../../components/DynamicTable/DynamicTable'

const { Content } = Layout

import db from '../../components/Categories/CategoriesList/db.json'

const dataSource = db.map(data => ({
    key: data.id,
    ...data
}))

const columnsConfig = [
    {
        key: 'switch',
        title: 'Switcher',
        dataIndex: 'id',
        width: 150,
        cellType: {
            name: 'date',
            editable: true
        }
    },
    {
        key: 'switch2',
        title: 'Switcher2',
        dataIndex: 'title',
        cellType: {
            name: 'text',
            editable: true
        }
    }
]
export default class Categories extends Component {
    render() {
        return (
            <Content>
                <AddCategory />
                {/* <CategoriesList /> */}
                <DynamicTable
                    dataSource={dataSource}
                    columnsConfig={columnsConfig}
                    options={{
                        scroll: { y: 500 }
                    }}
                />
            </Content>
        )
    }
}
