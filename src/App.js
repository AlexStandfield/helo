import React, { Component } from 'react'
import routes from './routes'

import 'reset-css'

export default class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    )
  }
}
