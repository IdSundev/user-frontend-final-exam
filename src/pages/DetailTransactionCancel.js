import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import NavigatorTransaction from './NavigatorTransaction'

export default class DetailTransactionCancel extends Component {

    constructor() {
        super();

        this.state = {
            detailTransaction: []
        }
    }

    componentWillMount() {

        // let jwtToken = cookies.get('jwtToken');

        // if (jwtToken !== undefined) {
        //     this.setState({
        //         login: true
        //     })
        // }

        // let formData = {
        //     token: jwtToken
        // }
        console.log(this.props)
        axios.get(`http://localhost:3001/detail-transaction-cancel?id_user=${this.props.match.params.idUser}&id_transaction=${this.props.match.params.idTransaction}`)
            .then((response) => {
                this.setState({
                    detailTransaction: response.data.data
                })
                console.log('INI', response)
                console.log(this.state.detailTransaction)
            })

    }




    render() {

        const detailTransaction = this.state.detailTransaction.map((item, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
            </tr>
        })



        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="header-top">
                    <div className="wrap">
                        <div className="cssmenu">
                            <h4 className="title">My Detail Transaction id#{this.props.match.params.idTransaction}</h4>
                        </div>
                    </div>
                </div>
                <div className="login">
                    <div className="wrap">
                        <div >
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailTransaction}
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
