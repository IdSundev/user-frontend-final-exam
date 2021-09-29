import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeaderBottom from '../components/HeaderBottom'
import HeaderTop from '../components/HeaderTop'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { Button } from 'react-bootstrap'
const cookies = new Cookies()
var turf = require("@turf/turf")

export default class ChooseAddress extends Component {

    constructor() {
        super();

        this.state = {
            login: false,
            address: [],
            currentRefs: [],
            warehouse: [],
            selectedWarehouse: [],
            closestWarehouseDistance: 0,
            cart: [],
            paymentSummary: [],
            totalPayment: 0,
            createTransaction: {}
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

        var self = this

        axios.post(`http://localhost:3001/address`, formData, {
        })
            .then((response) => {
                this.setState({
                    address: response.data.data
                })
                console.log(response)
                console.log('ini', this.state.address)
            })

        axios.get(`http://localhost:3001/warehouse`)
            .then((response) => {
                this.setState({
                    warehouse: response.data.data
                })
                console.log('INI', response)
                console.log('warehouse', this.state.warehouse)
            })

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

    getTotalPayment(cart) {
        cart.forEach(el => {
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
        this.state.paymentSummary.forEach(el => {
            total = total + el.totalPrice
        })

        this.setState({
            totalPayment: total
        })

        console.log('total payment', this.state.totalPayment)

    }

    getClosestWarehouse(index) {
        var self = this
        let options = { unit: "kilometers" };
        let closestWarehouse = 0;
        let id_warehouse;

        // this.state.warehouse.map((warehouse)=>{
        //     let from = turf.point([this.state.address[index].lon, this.state.address[index].lat]);
        //     let to = turf.point([warehouse.lon, warehouse.lat]);
        //     let distance = turf.distance(from, to, options);
        //     if(closestWarehouse===0){
        //         closestWarehouse = distance
        //     } else if (distance < closestWarehouse){
        //         closestWarehouse = distance
        //         id_warehouse = warehouse.id_warehouse
        //     }
        // })
        console.log('index', index)
        console.log('lon user', this.state.address[index].lon)

        this.state.warehouse.forEach((warehouse) => {
            let from = turf.point([this.state.address[index].lon, this.state.address[index].lat]);
            let to = turf.point([warehouse.lon, warehouse.lat]);
            let distance = turf.distance(from, to, options);
            console.log('list', distance)
            if (closestWarehouse === 0) {
                closestWarehouse = distance
            } else if (distance < closestWarehouse) {
                closestWarehouse = distance
                id_warehouse = warehouse.id_warehouse
            }
        })

        console.log('terpilih', id_warehouse)
        let distanceClosestWarehouse = closestWarehouse.toFixed(2)
        console.log('distanceClosestWarehouse', distanceClosestWarehouse)
        self.setState({
            closestWarehouseDistance: distanceClosestWarehouse
        })
        // this.state.closestWarehouseDistance.push(distanceClosestWarehouse)
        console.log('id selected warehouse', id_warehouse)
        console.log('ini jaraknya', closestWarehouse)
        console.log("jarak", this.state.closestWarehouseDistance)

        let formData = {
            id_warehouse: id_warehouse
        }

        console.log('kenapa erorr', formData)

        axios.post(`http://localhost:3001/selected-warehouse`, formData, {
        })
            .then((response) => {
                this.setState({
                    selectedWarehouse: response.data.data
                })
                console.log(response)
                console.log('ini_select', this.state.selectedWarehouse[0].id_warehouse)
                self.setState({
                    createTransaction: {
                        id_user: this.state.address[index].id_user,
                        id_address: this.state.address[index].id_address,
                        id_warehouse: this.state.selectedWarehouse[0].id_warehouse,
                        status: 'PAY BEFORE',
                        total: this.state.totalPayment
                    }
                })
            })


        // self.setState({
        //     createTransaction: {
        //         id_user: this.state.address[index].id_user,
        //         id_address: this.state.address[index].id_address,
        //         id_warehouse: id_warehouse_selected,
        //         status: 'PAY BEFORE',
        //         total: this.state.totalPayment
        //     }
        // })

        console.log('create-transaction', this.state.createTransaction)

        return id_warehouse;
    }

    insert() {

        console.log('a')

        var self = this;

        // console.log('plis', this.state.currentRefs[index].value)

        let formData = {
            id_user: this.state.createTransaction.id_user,
            id_address: this.state.createTransaction.id_address,
            id_warehouse: this.state.createTransaction.id_warehouse,
            status: 'PAY BEFORE',
            total: this.state.totalPayment
        }

        console.log('formData', formData)

        axios.post('http://localhost:3001/create-transaction', formData, {
        }).then(function (response) {
            console.log('response-data', response.data.result.insertId);
            alert(`ID Transaksi Anda adalah ${response.data.result.insertId}`)

            let transactionUser = {
                id_transaction: response.data.result.insertId,
                id_user: formData.id_user
            }
            self.addTransactionDetail(transactionUser)
            // this.setState({
            //     transactionID: response.data.result.insertId
            // })
        }).catch(function (err) {
            console.log(err);
        });


    }

    addTransactionDetail(transactionUser) {
        var self = this

        this.state.cart.forEach(el => {

            let formData = {
                id_transaction: transactionUser.id_transaction,
                id_product: el.id_product,
                quantity: el.quantity
            }
            axios.post('http://localhost:3001/create-transaction-detail', formData, {
            }).then(function (response) {
                console.log('response-data', response.data);
                // alert('success')
            }).catch(function (err) {
                console.log(err);
            });

        })

        let id_user = transactionUser.id_user

        self.deleteCart(id_user)

    }

    deleteCart(id_user) {

        let formData={
            id_user: id_user
        }

        axios.post('http://localhost:3001/delete-cart', formData, {
        }).then(function (response) {
            console.log('response-data', response.data);
            // alert('success')
        }).catch(function (err) {
            console.log(err);
        });

    }



    render() {

        if (this.state.login === false) {
            alert('Please Login First')
            return <Redirect to='/' />
        }

        const address = this.state.address.map((item, index) => {
            return <tr>
                <td>
                    <figure class="itemside">
                        <figcaption class="info">
                            <a class="title text-dark"><strong>Full Name: {item.full_name}</strong></a>
                            <p class="text-muted small">Alamat: {item.detail_address} Kode Pos: {item.postal_code} Kelurahan: {item.village}</p>
                        </figcaption>
                    </figure>
                </td>
                <td>
                    <div class="price-wrap">
                        <p class="text-muted small">{item.contact}</p>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <p class="text-muted small">{item.other_detail}</p>
                    </div>
                </td>
                <td class="text-right">
                    <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                    <Button variant="light" onClick={() => this.getClosestWarehouse(index)} >Choose</Button>
                </td>
            </tr>

        })

        const selectedWarehouse = this.state.selectedWarehouse.map((item, index) => {
            return <tr>
                <td>
                    <figure class="itemside">
                        <figcaption class="info">
                            <p class="text-muted small">Alamat: {item.detail_address} Kode Pos: {item.postal_code} Kelurahan: {item.village}</p>
                        </figcaption>
                    </figure>
                </td>
                <td>
                    <div class="price-wrap">
                        <p class="text-muted small">{this.state.closestWarehouseDistance} km</p>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <p class="text-muted small">{item.other_detail}</p>
                    </div>
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
                        <h2 class="title-page">Choose Address</h2>
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
                                                <th scope="col" width="250">Address</th>
                                                <th scope="col" width="120">Phone Number</th>
                                                <th scope="col" width="120">Other Detail</th>
                                                <th scope="col" class="text-right" width="200"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {address}
                                        </tbody>
                                    </table>
                                </div>
                            </main>
                            <br />
                        </div>
                    </div>
                </section>
                <section class="section-content padding-y">
                    <div class="container">
                        <div class="row">
                            <main class="col-md-9">
                                <div class="card">

                                    <table class="table table-borderless table-shopping-cart">
                                        <thead class="text-muted">
                                            <tr class="small text-uppercase">
                                                <th scope="col" width="250">Delivery Warehouse</th>
                                                <th scope="col" width="120">Distance</th>
                                                <th scope="col" width="120">Other Detail</th>
                                                <th scope="col" class="text-right" width="200"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedWarehouse}
                                        </tbody>
                                    </table>

                                    <div class="card-body border-top">
                                        {/* <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a> */}
                                        <Link to="/" class="btn btn-primary float-md-right" onClick={() => this.insert()}> Make Purchase <i class="fa fa-chevron-right"></i> </Link>
                                        <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
                                    </div>
                                </div>

                                <div class="alert alert-success mt-3">
                                    <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                                </div>

                            </main>
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

