import React, { Component } from 'react'

import { Route, Switch } from 'react-router'

import Routes from './routes/'
import PageWrapper from './pages/PageWrapper/PageWrapper'
import PasswordForget from './pages/PasswordForget/PasswordForget'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const prefix = '/app/'
const authPages = [
    prefix + 'dashboard',
    prefix + 'shops',
    prefix + 'categories',
    prefix + 'products',
    prefix + 'tags',
    prefix + 'orders',
    prefix + 'sales',
    prefix + 'delivery',
    prefix + 'employees',
    prefix + 'customers',
    prefix + 'activities'
]

const BrowserHistory = createBrowserHistory()
Tracker.autorun(() => {
    const isAuth = !!Meteor.userId()
    const { location, push, replace } = BrowserHistory
    if (authPages.indexOf(location.pathname.toLowerCase()) !== -1 && !isAuth) {
        // <Redirect to='/' />
        BrowserHistory.push('/')
        console.log('go to index')
    }

    console.log(
        isAuth,
        BrowserHistory.location,
        authPages.indexOf(location.pathname.toLowerCase())
    )
})

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/password-forget"
                    exact
                    component={PasswordForget}
                />
                <Route path="/registration" exact component={Register} />
                <Route path="/" exact component={Login} />
                <Route path="/app" component={PageWrapper} />
            </Switch>
        )
    }
}
