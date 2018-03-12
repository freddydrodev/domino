import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../ui/stylesheets/main.less'
import App from '../../ui/App'

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

Meteor.startup(() => {
    render(router, document.getElementById('root'))
})
