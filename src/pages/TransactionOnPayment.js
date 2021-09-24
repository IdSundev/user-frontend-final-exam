import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import NavigatorTransaction from './NavigatorTransaction'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export default class TransactionOnPayment extends Component {

    constructor() {
        super();

        this.state = {
            login: false,
            transactions: []
        }
    }

    componentWillMount() {

        let jwtToken = cookies.get('jwtToken');

        if (jwtToken !== undefined) {
            this.setState({
                login: true
            })
        }

        let formData = {
            token: jwtToken
        }

        axios.post(`http://localhost:3001/transaction-on-payment`, formData, {
        })
            .then((response) => {
                this.setState({
                    transactions: response.data.data
                })
                console.log(response)
                console.log(this.state.transactions)
            })

    }



    render() {

        if (this.state.login === false) {
            return <Redirect to='/login' />
        }

        const transactions = this.state.transactions.map((item, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{item.order_time_complete}</td>
                <td>{item.receipt_number}</td>
                <td>{item.status}</td>
                <td>{item.payment_confirmation}</td>
                <td>{item.user_address}</td>
                <td>{item.warehouse_address}</td>
                <td>{item.total}</td>
                <td><Link to={`/detail-transaction-on-payment/${item.id_user}/${item.id_transaction}`}><Button variant="secondary">See Details</Button>{' '}</Link></td>
            </tr>
        })

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <NavigatorTransaction />
                <div className="login">
                    <div className="wrap">
                        <div >
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Order Time</th>
                                        <th>Receipt Number</th>
                                        <th>Status</th>
                                        <th>Payment Confirmation</th>
                                        <th>Address</th>
                                        <th>Warehouse Address</th>
                                        <th>Total Payment</th>
                                        <th>Details Product</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions}
                                </tbody>
                            </Table>
                        </div>
                        <div className="clear" />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
