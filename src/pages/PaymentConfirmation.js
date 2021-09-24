import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'




export default class Register extends Component {

    constructor() {
        super();

        this.state = {
            selectedFile: null
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedFile !== prevState.selectedFile) {
            console.log('AYO', this.state.selectedFile)
        }
    }

    onFileChange = event => {

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state.selectedFile)

    };

    insert(refs) {

        let formData = new FormData()

        formData.append("id_transaction", refs.id_transaction.value);
        formData.append("payment_time", refs.payment_time.value);
        formData.append("total", refs.total.value);
        formData.append("image_payment_confirmation", this.state.selectedFile);

        axios.post('http://localhost:3001/payment-confirmation', formData, {
        }).then(function (response) {
            console.log(response.data);
            document.getElementById("insert-payment-confirmation-form").reset();
            alert('success')

        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="payment-confirmation">
                    <div className="wrap">
                        <div className="col_1_of_login span_1_of_login">
                            <div className="login-title">
                                <h4 className="title">Payment Confirmation</h4>
                                <br/>
                                <div className="payment-image-confirmation">
                                    <form id="insert-payment-confirmation-form">
                                        <p>
                                            <label>Order Number</label>
                                            <span>*</span>
                                            <input type="text" ref="id_transaction" />
                                        </p>
                                        <p>
                                            <label>Transfer Date</label>
                                            <span>*</span>
                                            <input type="text" ref="payment_time" />
                                        </p>
                                        <p>
                                            <label>Amount Transfer</label>
                                            <span>*</span>
                                            <input type="text" ref="total" />
                                        </p>
                                        <p>
                                            <label>Print Transfer</label>
                                            <span>*</span>
                                            <input type="file" accept="image/*" onChange={this.onFileChange} />
                                        </p>
                                    </form>
                                </div>
                                <input type="button" className="payment-time" onClick={() => this.insert(this.refs)} value="Submit" />
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                </div>
                <Footer />
                <a href="#" id="toTop" style={{ display: 'block' }}><span id="toTopHover" style={{ opacity: 1 }} /></a>
            </div>
        )
    }
}
