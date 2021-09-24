import React, { Component } from "react";
import axios from "axios";
import { url_backend, url_backend_admin } from "../../config/url";
import HeaderTop from "../HeaderTop";
import HeaderBottom from "../HeaderBottom";
import Footer from "../Footer";

export default class Detail extends Component {
  componentDidMount() {
    this.getProduct();
  }

  constructor(props) {
    super(props);
    this.state = {
      id_product: "",
      name: "",
      price: "",
      picture: "",
      category: "",
      available: "",
    };
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct = () => {
    axios
      .get(`${url_backend}/products/detail/${this.props.id_product}`)
      .then((res) => {
        this.setState({
          id_product: res.data.product[0].id_product,
          name: res.data.product[0].name,
          price: res.data.product[0].price,
          picture: res.data.product[0].picture,
          category: res.data.product[0].category,
          available: res.data.product[0].available,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderBottom />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img
              className="card-img-top"
              src={`${url_backend_admin}/public/img/products/${this.state.picture}`}
              alt="Card image cap"
            />
          </div>
          <div className="col-md-6">
            <h5 style={{ marginTop: "30px" }}>{this.state.name}</h5>
            <table className="table table-bordered table-striped">
              <tr>
                <td>Price</td>
                <td>: {this.state.price}</td>
              </tr>
              <tr>
                <td>Available</td>
                <td>: {this.state.available}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>: {this.state.category}</td>
              </tr>
            </table>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.<br />
              <a className="btn btn-dark" style={{ marginRight: "5px", marginTop: "10px" }}>
                Add to Cart
              </a>
            </p>
          </div>
          <div className="col-md-1"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
