import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HeaderBottom extends Component {
  render() {
    return (
      <div className="header-bottom">
        <div className="wrap">
          {/* start header menu */}
          <ul className="megamenu skyblue">
            <li>
              <Link to={`/`} className="color1">
                Home
              </Link>
            </li>
            <li>
            <Link to={`/product`} className="color2">
                Product
              </Link>
            </li>
          </ul>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
