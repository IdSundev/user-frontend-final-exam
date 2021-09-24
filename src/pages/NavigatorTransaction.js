import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class NavigatorTransaction extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="wrap">
                    <div className="cssmenu">
                    <h4 className="title">My Transaction</h4>
                        <ul>
                            <li><Link to="/transaction-on-payment">On Payment</Link></li>
                            <li><Link to="/transaction-on-process">On Process</Link></li>
                            <li><Link to="/transaction-on-delivery">On Delivery</Link></li>
                            <li><Link to="/transaction-complete">Completed</Link></li>
                            <li><Link to="/transaction-cancel">Cancel</Link></li>
                        </ul>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        )
    }
}
