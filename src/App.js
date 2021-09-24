import React, { Component } from 'react'
import {Route} from 'react-router-dom'


import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import MyAccount from './pages/MyAccount'
import Productpage from './pages/Productpage'
import TransactionComplete from './pages/TransactionComplete'
import DetailTransactionComplete from './pages/DetailTransactionComplete'
import TransactionOnPayment from './pages/TransactionOnPayment'
import DetailTransactionOnPayment from './pages/DetailTransactionOnPayment'
import TransactionOnProcess from './pages/TransactionOnProcess'
import TransactionOnDelivery from './pages/TransactionOnDelivery'
import TransactionCancel from './pages/TransactionCancel'
import DetailTransactionOnProcess from './pages/DetailTransactionOnProcess'
import DetailTransactionOnDelivery from './pages/DetailTransactionOnDelivery'
import DetailTransactionCancel from './pages/DetailTransactionCancel'
import PaymentConfirmation from './pages/PaymentConfirmation'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/product" component={Productpage}/>
        <Route exact path="/product/:id" component={Productpage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route path="/resetpassword/:id" component={ResetPassword}/>
        <Route path="/accountinformation" component={MyAccount}/>
        <Route path="/transaction-complete" component={TransactionComplete}/>
        <Route path="/transaction-on-payment" component={TransactionOnPayment}/>
        <Route path="/transaction-on-process" component={TransactionOnProcess}/>
        <Route path="/transaction-on-delivery" component={TransactionOnDelivery}/>
        <Route path="/transaction-cancel" component={TransactionCancel}/>
        <Route path="/detail-transaction-complete/:idUser/:idTransaction" component={DetailTransactionComplete}/>
        <Route path="/detail-transaction-on-payment/:idUser/:idTransaction" component={DetailTransactionOnPayment}/>
        <Route path="/detail-transaction-on-process/:idUser/:idTransaction" component={DetailTransactionOnProcess}/>
        <Route path="/detail-transaction-on-delivery/:idUser/:idTransaction" component={DetailTransactionOnDelivery}/>
        <Route path="/detail-transaction-cancel/:idUser/:idTransaction" component={DetailTransactionCancel}/>
        <Route path="/payment-confirmation" component={PaymentConfirmation}/>
      </div>
    )
  }
}
