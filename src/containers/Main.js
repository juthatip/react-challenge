import React , { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Nav from '../components/Layout/Nav'

import Shopping from './ShoppingContainer'
import StartContainer from './StartContainer'
import StorageContainer from './StorageContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/start" component={StartContainer} />
          <Route path="/shop" component={Shopping} />
          <Route path="/storage" component={StorageContainer} />
        </Switch>
      </div>
    )
  }
}

export default Main