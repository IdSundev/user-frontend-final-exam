import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Login from './pages/Login'

 
export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/login" component={Login}/>\
      </div>
    )
  }
}
