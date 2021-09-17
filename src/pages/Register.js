import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


export default class Register extends Component {

    constructor() {
        super();

        this.state = {
            register: false
        };
    }

    insert(refs) {
        var self = this;

        let formData = {

            full_name: refs.full_name.value,
            username: refs.username.value,
            email: refs.email.value,
            password: refs.password.value,
            status: "UNVERIFIED"

        }

        axios.post('http://localhost:3001/register', formData, {
        }).then(function (response) {
            console.log(response.data);
            alert('success')

            self.setState({
                insert_flag: 1,
                register: true
            })

        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {

        if (this.state.register === true) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="register_account">
                    <div className="wrap">
                        <h4 className="title">Create an Account</h4>
                        <form>
                            <div>
                                <div><input type="text" defaultValue="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" ref="full_name" /></div>
                                <div><input type="text" defaultValue="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" ref="username"/></div>
                                <div><input type="text" defaultValue="E-Mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-Mail';}" ref="email" /></div>
                                <div><input type="text" defaultValue="password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}" ref="password"/></div>
                            </div>
                            <p className="terms">By clicking 'Create Account' you agree to the <a href="#">Terms &amp; Conditions</a>.</p>
                            <br/>
                            <br/>
                            <input type="button" className="register" onClick={() => this.insert(this.refs)} value="Register" />
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
