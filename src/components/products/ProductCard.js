import React, { Component } from "react";
import { url_backend, url_backend_admin } from "../../config/url";
const currency = require("../../helpers/formatRupiah");

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          className="col_1_of_3 span_1_of_3"
          style={{ "marginLeft": "10px" }}
        >
          <a href="single.html">
            <div className="view view-fifth">
              <div className="top_box">
                <h3 className="m_1">{this.props.name.substring(1,38)}</h3>
                <p className="m_2">{this.props.category}</p>
                <div className="grid_img">
                  <div className="css3">
                    <img
                      src={`${url_backend_admin}/public/img/products/${this.props.picture}`}
                      alt=""
                    />
                  </div>
                  <div className="mask">
                    <div className="info">Quick View</div>
                  </div>
                </div>
                <div className="price">Rp. {currency.FormatRupiah(this.props.price)}</div>
              </div>
            </div>
            <span className="rating">
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-5"
                name="rating-input-1"
              />
              <label htmlFor="rating-input-1-5" className="rating-star1" />
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-4"
                name="rating-input-1"
              />
              <label htmlFor="rating-input-1-4" className="rating-star1" />
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-3"
                name="rating-input-1"
              />
              <label htmlFor="rating-input-1-3" className="rating-star1" />
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-2"
                name="rating-input-1"
              />
              <label htmlFor="rating-input-1-2" className="rating-star" />
              <input
                type="radio"
                className="rating-input"
                id="rating-input-1-1"
                name="rating-input-1"
              />
              <label htmlFor="rating-input-1-1" className="rating-star" />
              &nbsp; (45)
            </span>
          </a>
          <ul className="list">
            <a href="single.html"></a>
            <li>
              <a href="single.html">
                <img src="images/plus.png" alt="" />
              </a>
              <ul className="icon1 sub-icon1 profile_img">
                <a href="single.html"></a>
                <li>
                  <a href="single.html" />
                  <a className="active-icon c1" href="#">
                    Add To Bag{" "}
                  </a>
                  <ul className="sub-icon1 list">
                    <li>
                      <h3>sed diam nonummy</h3>
                      <a href />
                    </li>
                    <li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer{" "}
                        <a href>adipiscing elit, sed diam</a>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="clear" />
        </div>
      </div>
    );
  }
}
