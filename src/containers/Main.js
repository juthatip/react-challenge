import React , { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Nav from '../components/Layout/Nav'

import Shopping from './ShoppingContainers'
import StartContainers from './StartContainers'

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/start" component={StartContainers} />
          <Route path="/shop" component={Shopping} />
        </Switch>
      </div>
    )
  }
}

export default Main