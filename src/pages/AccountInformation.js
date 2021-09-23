import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default class AccountInformation extends Component {

    constructor() {
        super();

        this.state = {
            login: false,
            user: {}
        }
    }

    componentWillMount() {

        let jwtToken = cookies.get('jwtToken');
    
        if (jwtToken !== undefined){
          this.setState({
            login: true
          })
        }

        let formData = {
            token : jwtToken
        }

        axios.post(`http://localhost:3001/select`, formData, {
            })
            .then((response) => {
                this.setState({
                    user: response.data.data[0]
                })
                console.log(this.state.product)
            })
    }

    render() {
        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="forget_password">
                    <div className="wrap">
                        <div className="comments-area">
                            <h4 className="title">Account Information</h4>
                            <br />
                            <form>
                                <p>
                                    <label>Full Name</label>
                                    <span>*</span>
                                    <input type="text" ref="full_name" defaultValue={this.state.user.full_name} />
                                </p>
                                <p>
                                    <label>Contact</label>
                                    <span>*</span>
                                    <input type="text" ref="contact" defaultValue={this.state.user.contact} />
                                </p>
                                <p>
                                    <label>Birth of Date</label>
                                    <span>*</span>
                                    <input type="text" ref="birth_of_date" defaultValue={this.state.user.birth_of_date} />
                                </p>
                                <p>
                                    <label>Gender</label>
                                    <span>*</span>
                                    <input type="text" ref="gender" defaultValue={this.state.user.gender} />
                                </p>
                            </form>
                            <br/>
                        </div>
                            <input type="button" className="editProfile" onClick={() => this.insert(this.refs)} value="Edit" />
                            <br/>
                    </div>
                </div>
                <Footer />
                <a href="#" id="toTop" style={{ display: 'block' }}><span id="toTopHover" style={{ opacity: 1 }} /></a>
            </div>
        )
    }
}
