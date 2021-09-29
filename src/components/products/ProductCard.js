import React, { Component } from "react";
import { url_backend_admin } from "../../config/url";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const currency = require("../../helpers/formatRupiah");
const cookies = new Cookies();


export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    };

  }

  insert(index) {


    let jwtToken = cookies.get('jwtToken');

    if (jwtToken !== undefined) {
        this.setState({
            login: true
        })
    }

    let formData = {
      id_product: index,
      token: jwtToken
    }

    console.log(formData)

    axios.post('http://localhost:3001/add-product-to-cart', formData, {
    }).then(function (response) {
      console.log(response.data);
      alert('success')

    }).catch(function (err) {
      // console.log(err);
      alert('Please Login First')
    });

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
            <a className="btn btn-dark" style={{ "marginRight": "5px" }} onClick={() => this.insert(this.props.id_product)} >Add to Cart</a>
            <Link
              to={`/product/detail/${this.props.id_product}`}
              className="color1"
            >
              <a className="btn btn-warning">Detail</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
