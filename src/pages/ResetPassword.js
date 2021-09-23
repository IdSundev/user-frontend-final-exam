import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import {Redirect} from 'react-router-dom'

export default class ResetPassword extends Component {

    constructor() {
        super();

        this.state = {
            isPasswordReset: false
        };
    }

    insert(refs) {
        var self = this;

        let formData = {
            newPassword: refs.newPassword.value,
            confirmPassword: refs.confirmPassword.value,
            rand: this.props.match.params.id
        }

        console.log(this.props.match.params.id)
        console.log(formData)

        axios.post(`http://localhost:3001/resetpassword/${this.props.match.params.id}`, formData, {
        }).then(function (response) {
            console.log(response.data);
            alert('success')

            self.setState({
                isPasswordReset: true
            })

        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {

        if (this.state.isPasswordReset === true) {
            return <Redirect to='/login' />
        }

        return (
            <div>
                <HeaderTop/>
                <HeaderBottom/>
                <div className="forget_password">
                    <div className="wrap">
                        <h4 className="title">Reset Password</h4>
                        <form>
                            <div>
                                <div><input type="text" defaultValue="New Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'New Password';}" ref="newPassword"/></div>
                                <div><input type="text" defaultValue="Confirm Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" ref="confirmPassword"/></div>
                            </div>
                            <br />
                            <input type="button" className="reset_password" onClick={() => this.insert(this.refs)} value="Reset Password" />
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
