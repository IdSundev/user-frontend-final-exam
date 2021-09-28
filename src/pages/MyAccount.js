import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'


// const FormData = require('form-data')
const cookies = new Cookies()

export default class Test extends Component {

    constructor() {
        super();

        this.state = {
            login: false,
            user: {},
            selectedFile: null

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selectedFile !== prevState.selectedFile) {
           console.log('AYO', this.state.selectedFile)
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

        axios.post(`http://localhost:3001/select`, formData, {
        })
            .then((response) => {
                this.setState({
                    user: response.data.data[0]
                })
                console.log('ini', this.state.user.profile)
                console.log(response)
            })

    }

    getUser(){
        let jwtToken = cookies.get('jwtToken');

        if (jwtToken !== undefined) {
            this.setState({
                login: true
            })
        }

        let formData = {
            token: jwtToken
        }

        axios.post(`http://localhost:3001/select`, formData, {
        })
            .then((response) => {
                this.setState({
                    user: response.data.data[0]
                })
                console.log('ini', this.state.user.profile)
                console.log(response)
            })

    }

    onFileChange = event => {

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state.selectedFile)

    };


    insert(refs) {

        var self = this

        let jwtToken = cookies.get('jwtToken');
        console.log('jwt', jwtToken)

        let formData = new FormData()



        formData.append("full_name", refs.full_name.value);
        formData.append("contact", refs.contact.value);
        formData.append("birth_of_date", refs.birth_of_date.value);
        formData.append("gender", refs.gender.value);
        formData.append("token", jwtToken);
        formData.append("newPassword", refs.newPassword.value);
        formData.append("confirmPassword", refs.confirmPassword.value);
        formData.append("profile", this.state.selectedFile);

        console.log(formData.get("profile"))

        // let formHeaders = formData.getHeaders()
        // console.log(formHeaders)

        


        // let formData = {

        //     full_name: refs.full_name.value,
        //     contact: refs.contact.value,
        //     birth_of_date: refs.birth_of_date.value,
        //     gender: refs.gender.value,
        //     token: jwtToken,
        //     newPassword: refs.newPassword.value,
        //     confirmPassword: refs.confirmPassword.value,
        //     profile: this.state.selectedFile

        // }
        // console.log(this.state.selectedFile)

        axios.post('http://localhost:3001/editinformation', formData, {
            // headers: {
            //     ...formHeaders,
            // },
        }).then(function (response) {
            console.log(response.data);
            alert('success')
            self.getUser()
        }).catch(function (err) {
            console.log(err);
        });
    }



    render() {

        
        // const user = this.state.user.map((item, index) => {
        //     return <img src={`http://localhost:3001/images/${item.filename}`} alt="" />
        // })
       

        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <div className="login">
                    <div className="wrap">
                        <div className="col_1_of_login span_1_of_login">
                            <div className="login-title">
                                <h4 className="title">Account Information</h4>
                                <div className="comments-area payment-confirmation">
                                    <div className="user_img">
                                        <img src={`http://localhost:3001/images/${this.state.user.profile}`} alt="" />
                                        <input type="file" accept="image/*" onChange={this.onFileChange} />
                                    </div>

                                </div>
                            </div>
                            <div className="login-title">
                                {/* <h4 className="title">Account Information</h4> */}
                                <div className="comments-area">
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
                                            <label>Birth of Date (YYYY-MM-DD)</label>
                                            <span>*</span>
                                            <input type="text" ref="birth_of_date" defaultValue={this.state.user.birth_of_date} />
                                        </p>
                                        <p>
                                            <label>Gender</label>
                                            <span>*</span>
                                            <input type="text" ref="gender" defaultValue={this.state.user.gender} />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col_1_of_login span_1_of_login">
                            <div className="login-title">
                                <h4 className="title">Change Password</h4>
                                <div className="comments-area">
                                    <form>
                                        <p>
                                            <label>New Password</label>
                                            <input type="password" ref="newPassword" />
                                        </p>
                                        <p>
                                            <label>Confirm Password</label>
                                            <input type="password" ref="confirmPassword" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="clear" />
                        <input type="button" className="editProfile" onClick={() => this.insert(this.refs)} value="Save" />
                    </div>
                </div>
                <Footer />
                <a href="#" id="toTop" style={{ display: 'block' }}><span id="toTopHover" style={{ opacity: 1 }} /></a>
            </div>

        )
    }
}
