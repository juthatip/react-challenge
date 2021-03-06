import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from './containers/Main'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
