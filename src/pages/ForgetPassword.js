import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import {Redirect} from 'react-router-dom'

export default class ForgetPassword extends Component {

    constructor() {
        super();

        this.state = {
            isEmailVerified: false
        };
    }

    insert(refs) {
        var self = this;

        let formData = {
            email: refs.email.value
        }

        axios.post('http://localhost:3001/forgetpassword', formData, {
        }).then(function (response) {
            console.log(response.data);
            alert('success')

            self.setState({
                isEmailVerified: true
            })

        }).catch(function (err) {
            console.log(err);
        });
    }


    render() {

        if (this.state.isEmailVerified === true) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="forget_password">
                    <div className="wrap">
                        <h4 className="title">Email Verification</h4>
                        <form>
                            <p className="terms">Enter your email below to reset the password</p>
                            <br />
                            <br />
                            <div>
                                <div><input type="text" defaultValue="E-Mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-Mail';}" ref="email" /></div>
                            </div>
                            <br />
                            <input type="button" className="reset_password" onClick={() => this.insert(this.refs)} value="Submit" />
                            <div className="clear" />
                        </form>
                    </div>
                </div>
                <Footer />
                <a href="#" id="toTop" style={{ display: 'block' }}><span id="toTopHover" style={{ opacity: 1 }} /></a>
            </div>
        )
    }
}
