import React, { Component } from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'

import Header from '../../layouts/MenuTop/MenuTop'
import SideBar from '../../layouts/SideBar/SideBar'
import Footer from '../../layouts/GeneralFooter/GeneralFooter'
import FancyRoute from '../../components/FancyRoute/FancyRoute'
import routers from '../../routes/'

export default class PageWrapper extends Component {
    render() {
        return <Layout className="page-wrapper">
                <SideBar />
                <Layout>
                    <Header />
                    {/*content will be listed here throughout this.props.children*/}
                    {/* {this.props.children} */}
                    <Switch>
                        {routers.map((route, i) => (
                            <FancyRoute key={i} {...route} />
                        ))}
                    </Switch>
                    <Footer />
                </Layout>
            </Layout>
    }
}
