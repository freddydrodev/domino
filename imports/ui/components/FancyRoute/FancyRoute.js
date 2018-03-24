import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import PerfectScrollbar from 'perfect-scrollbar'
import 'nprogress/nprogress.css'

class FancyRoute extends Component {
  componentWillMount () {
    nprogress.start()
  }

  componentDidMount () {
    nprogress.done()
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default FancyRoute