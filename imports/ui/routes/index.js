import React from 'react'
import { Switch } from 'react-router-dom'

import FancyRoute from '../components/FancyRoute'
import routers from './routers'

export default (routes = () => (
    <Switch>
        {routers.map((route, i) => <FancyRoute key={i} {...route} />)}
        {/* <Route path="/Dashboard" component={Dashboard} />
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
        <Route render={() => <h1>404 Page Not Found</h1>} /> */}
    </Switch>
))
