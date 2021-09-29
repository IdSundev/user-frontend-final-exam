import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export default class HeaderTop extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="wrap">
                    <div className="logo">
                        <Link to="/"><img src="images/logo2.jpg" alt="" /></Link>
                    </div>
                    <div className="cssmenu">
                        <ul>
                            <li className="active"><Link to="/register">Sign up &amp; Save</Link></li>
                            <li><a href="shop.html">Store Locator</a></li>
                            <li><Link to="/login">My Account</Link></li>
                            <li><a href="checkout.html">CheckOut</a></li>
                        </ul>
                    </div>
                    <ul className="icon2 sub-icon2 profile_img">
                        <li><a className="active-icon c2" href="#"> </a>
                            <ul className="sub-icon2 list">
                                <li><h3>Products</h3><a href /></li>
                                <li><p>Lorem ipsum dolor sit amet, consectetuer  <a href>adipiscing elit, sed diam</a></p></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clear" />
                </div>
            </div>
        )
    }
}
