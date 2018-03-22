import React, { Component } from 'react'
import { Layout } from 'antd'

import AddCategory from '../components/Categories/AddCategory'
import CategoriesList from '../components/Categories/CategoriesList'
import LearnTable from '../components/Categories/LearnTables'

const { Content } = Layout
export default class Categories extends Component {
    render() {
        return <Content>
                <AddCategory />
                <CategoriesList />
                <LearnTable />
            </Content>
    }
}
