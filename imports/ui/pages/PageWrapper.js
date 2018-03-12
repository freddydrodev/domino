import React, { Component } from 'react'
import { Layout } from 'antd'

import Header from '../layouts/MenuTop'
import SideBar from '../layouts/SideBar'
import Footer from '../layouts/GeneralFooter'

export default class PageWrapper extends Component {
    render() {
        return <Layout className="page-wrapper">
                <SideBar />
                <Layout>
                    <Header />
                    {/*content will be listed here throughout this.props.children*/}
                    {this.props.children}
                    <Footer />
                </Layout>
            </Layout>
    }
}
