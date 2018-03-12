import React from 'react'
import { Route, Switch } from 'react-router-dom'

import P from '../components/P'
import Dashboard from '../pages/Dashboard'
import Shops from '../pages/Shops'
import Categories from '../pages/Categories'
import Products from '../pages/Products'
import Tags from '../pages/Tags'
import Orders from '../pages/Orders'
import Sales from '../pages/Sales'
import Delivery from '../pages/Delivery'
import Employees from '../pages/Employees'
import Customers from '../pages/Customers'
import Activities from '../pages/Activities'

export default (routes = () => (
    <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Shops" component={Shops} />
        <Route path="/Categories" component={Categories} />
        <Route path="/Products" component={Products} />
        <Route path="/Tags" component={Tags} />
        <Route path="/Orders" component={Orders} />
        <Route path="/Sales" component={Sales} />
        <Route path="/Delivery" component={Delivery} />
        <Route path="/Employees" component={Employees} />
        <Route path="/Customers" component={Products} />
        <Route path="/Activities" component={Activities} />
        <Route path="/" exact component={P} />
        <Route render={() => <h1>404 Page Not Found</h1>} />
    </Switch>
))