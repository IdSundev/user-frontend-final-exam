import React, { Component } from 'react'
import {Route} from 'react-router-dom'


import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import MyAccount from './pages/MyAccount'

// test

 
export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route path="/resetpassword/:id" component={ResetPassword}/>
        <Route path="/accountinformation" component={MyAccount}/>

      </div>
    )
  }
}
