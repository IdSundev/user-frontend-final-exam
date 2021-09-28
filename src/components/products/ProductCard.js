import React, { Component } from "react";
import { url_backend_admin } from "../../config/url";
import { Link } from "react-router-dom";
const currency = require("../../helpers/formatRupiah");

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-3">
        <div className="card mb-2">
          <img
            className="card-img-top"
            src={`${url_backend_admin}/public/img/products/${this.props.picture}`}
            alt="Card image cap"
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.category}
              <br />
              Avail: {this.props.available}
              <br />
              Rp. {currency.FormatRupiah(this.props.price)}
            </p>
            <a className="btn btn-dark" style={{"marginRight":"5px", "color":"white"}}>Add to Cart</a>
            <Link
              to={`/product/detail/${this.props.id_product}`}
            >
              <a className="btn btn-warning">Detail</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
