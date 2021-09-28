import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Button} from 'react-bootstrap'
const cookies = new Cookies()

export default class ShoppingCart extends Component {

    constructor() {
        super();

        this.state = {
            login: false,
            cart: [],
            paymentSummary: [],
            totalPayment: 0,
            currentRefs: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.paymentSummary !== prevState.paymentSummary) {
           console.log('AYO', this.state.paymentSummary)
        }
    } 

    componentWillMount() {
        // this.getCart()

        let jwtToken = cookies.get('jwtToken');

        if (jwtToken !== undefined) {
            this.setState({
                login: true
            })
        }

        let formData = {
            token: jwtToken
        }
        
        var self = this

        axios.post(`http://localhost:3001/shopping-cart`, formData, {
        })
            .then((response) => {
                this.setState({
                    cart: response.data.data
                })
                console.log(response)
                console.log('ini', this.state.cart)
                self.getTotalPayment(this.state.cart)
            })
    }

    // getCart(){
    //     let jwtToken = cookies.get('jwtToken');

    //     if (jwtToken !== undefined) {
    //         this.setState({
    //             login: true
    //         })
    //     }

    //     let formData = {
    //         token: jwtToken
    //     }
        
    //     var self = this

    //     axios.post(`http://localhost:3001/shopping-cart`, formData, {
    //     })
    //         .then((response) => {
    //             this.setState({
    //                 paymentSummary: response.data.data
    //             })
    //             console.log(response)
    //             console.log('ini', this.state.cart)
    //             self.getTotalPayment(this.state.cart)
    //         })
    // }

    getTotalPayment(cart){
        cart.forEach(el=>{
            console.log('ini elemen', el)
            this.state.paymentSummary.push({
                id_cart_detail: el.id_cart_detail,
                id_product: el.id_product,
                picture: el.picture,
                name: el.name, 
                description: el.description,
                category: el.category,
                price: el.price,
                quantity: el.quantity,
                totalPrice: Number(el.price) * Number(el.quantity)
            })
            console.log('ini', this.state.paymentSummary)
          })
        
        let total = 0
        this.state.paymentSummary.forEach(el=>{
            total = total + el.totalPrice
        })

        this.setState({
            totalPayment: total
        })

        console.log('total payment', this.state.totalPayment)
        
    }

    insert(index) {

        var self = this;
    
        console.log('plis', this.state.currentRefs[index].value)

        let formData = {
            quantity: this.state.currentRefs[index].value,
            index: index,
            id_cart_detail: this.state.paymentSummary[index].id_cart_detail
        }
        
        console.log(formData)

        axios.post('http://localhost:3001/update-cart', formData, {
        }).then(function (response) {
            console.log('response-data', response.data);
            alert('success')
        }).catch(function (err) {
            console.log(err);
        });

        console.log('payment-summary', this.state.paymentSummary)

        // self.getCart()
    }



    render() {

        if (this.state.login === false) {
            alert('Please Login First')
            return <Redirect to='/' />
        } 

        const paymentSummary = this.state.paymentSummary.map((item, index) => {
            return <tr>
                <td>
                    <figure class="itemside">
                        <div class="aside"><img src={`http://localhost:3001/images/${item.picture}`} class="img-sm" /></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark">{item.name}</a>
                            <p class="text-muted small">Category: XL,{item.category}<br /> Description: {item.description}</p>
                        </figcaption>
                    </figure>
                </td>
                <td>
                    <input type="number" ref={(element) => this.state.currentRefs.push(element)} defaultValue={item.quantity} />
                    <Button variant="warning" onClick={() => this.insert(index)}>Edit Quantity</Button>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price">{item.totalPrice}</var>
                        <small class="text-muted">{item.price} each </small>
                    </div>
                </td>
                <td class="text-right">
                    <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                    <a href="" class="btn btn-light"> Remove</a>
                </td>
            </tr>
    
        })


        return (
            <div>
                <HeaderTop />
                <HeaderBottom />
                <br />
                <section class="section-pagetop bg">
                    <div class="container">
                        <h2 class="title-page">Shopping cart</h2>
                    </div>
                </section>
                <br />
                <section class="section-content padding-y">
                    <div class="container">

                        <div class="row">
                            <main class="col-md-9">
                                <div class="card">

                                    <table class="table table-borderless table-shopping-cart">
                                        <thead class="text-muted">
                                            <tr class="small text-uppercase">
                                                <th scope="col">Product</th>
                                                <th scope="col" width="120">Quantity</th>
                                                <th scope="col" width="120">Price</th>
                                                <th scope="col" class="text-right" width="200"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paymentSummary}
                                        </tbody>
                                    </table>

                                    <div class="card-body border-top">
                                        {/* <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a> */}
                                        <Link to="/address" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </Link>
                                        <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
                                    </div>
                                </div>

                                <div class="alert alert-success mt-3">
                                    <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                                </div>

                            </main>
                            <aside class="col-md-3">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label>Have coupon?</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                                    <span class="input-group-append">
                                                        <button class="btn btn-primary">Apply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <dl class="dlist-align">
                                            <dt><strong>Total price:</strong></dt>
                                            <dd class="text-right">Rp. {this.state.totalPayment}</dd>
                                        </dl>
                                        {/* <dl class="dlist-align">
                                            <dt>Discount:</dt>
                                            <dd class="text-right">Rp. 0</dd>
                                        </dl>
                                        <dl class="dlist-align">
                                            <dt>Total:</dt>
                                            <dd class="text-right  h5"><strong>Rp. {this.state.totalPayment}</strong></dd>
                                        </dl>
                                        <hr />
                                        <p class="text-center mb-3">
                                            <img src="assets/images/misc/payments.png" height="26" />
                                        </p> */}

                                    </div>
                                </div>
                            </aside>
                        </div>

                    </div>
                </section>

                <section class="section-name bg padding-y">
                    <div class="container">
                        <h6>Payment and refund policy</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                </section>

                <footer class="section-footer border-top padding-y">
                    <div class="container">
                        <p class="float-md-right">
                            &copy; Copyright 2020 All rights reserved
                        </p>
                        <p>
                            <a href="#">Terms and conditions</a>
                        </p>
                    </div>
                </footer>

                <Footer />
            </div>
        )
    }
}

