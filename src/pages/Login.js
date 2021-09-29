import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {Link, Redirect} from 'react-router-dom'

const cookies = new Cookies()

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            login: false
        };
    }

    componentWillMount() {
        let jwtToken = cookies.get('jwtToken');

        if (jwtToken !== undefined) {
            this.setState({
                login: true
            })
        }
    }

    insert(refs) {
        var self = this;
        console.log(refs.username.value)
        console.log(refs.password.value)

        let formData = {
            username: refs.username.value,
            password: refs.password.value,
        }

        console.log(formData)

        axios.post('http://localhost:3001/login', formData, {
        }).then(function (response) {

            console.log(response.data)

            if (response.data.login) {
                cookies.set('jwtToken', response.data.token, { path: '/' });

                self.setState({
                    login: true
                })
            }

        }).catch(function (err) {
            console.log(err);

        });
    }


    render() {

        if (this.state.login === true) {
            return <Redirect to='/' />
        } 

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="login">
                    <div className="wrap">
                        <div className="col_1_of_login span_1_of_login">
                            <h4 className="title">New Customers</h4>
                            <h5 className="sub_title">Register Account</h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
                            <div className="button1">
                                <Link to="/register"><input type="submit" name="Submit" defaultValue="Continue" /></Link>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="col_1_of_login span_1_of_login">
                            <div className="login-title">
                                <h4 className="title">Registered Customers</h4>
                                <div className="comments-area">
                                    <form>
                                        <p>
                                            <label>Username</label>
                                            <span>*</span>
                                            <input type="text" ref="username" />
                                        </p>
                                        <p>
                                            <label>Password</label>
                                            <span>*</span>
                                            <input type="text" ref="password" />
                                        </p>
                                        <p id="login-form-remember">
                                            <label><Link to="/forgetpassword">Forget Your Password ?</Link></label>
                                        </p>
                                        <p>
                                            <input type="button" onClick={() => this.insert(this.refs)} value="Login" />
                                        </p>
                                    </form>
                                </div>
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
