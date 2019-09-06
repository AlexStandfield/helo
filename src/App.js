import React, { Component } from 'react'
import routes from './routes'

// Components
import Nav from './Components/Nav/Nav'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar should not appear on exact path */}
        <Nav  />
        {routes}
      </div>
    )
  }
}
