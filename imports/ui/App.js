import React, { Component } from 'react'

import { Route, Switch } from 'react-router'

import Routes from './routes/'
import PageWrapper from './pages/PageWrapper/PageWrapper'
import PasswordForget from './pages/PasswordForget/PasswordForget'
import { Router } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/password-forget"
                    exact
                    component={PasswordForget}
                />
                <Route path="/registration" exact component={PasswordForget} />
                <Route path="/" exact component={PasswordForget} />
                <Route path="/app" component={PageWrapper} />
            </Switch>
        )
    }
}
