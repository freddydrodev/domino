import React, { Component } from 'react'

import Routes from './routes/'
import PageWrapper from './pages/PageWrapper'

export default class App extends Component {
    render() {
        return (
            <PageWrapper>
                <Routes />
            </PageWrapper>
        )
    }
}
