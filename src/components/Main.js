import React, { Component } from "react";
import ProductCard from "./products/ProductCard";
import axios from "axios";
import { url_backend } from "../config/url";

export default class Main extends Component {
  componentDidMount() {
    this.getProducts();
  }

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts = () => {
    axios
      .get(`${url_backend}/products?page=${this.props.page}`)
      .then((res) => {
        this.setState({ products: res.data.products });
        this.setState({ links: res.data.links });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.links) return null;
    return (
        <div className="row">
          {this.state.products.map((product, idx) => {
            return (
              <ProductCard
                key={idx}
                category={product.category}
                name={product.name}
                price={product.price}
                picture={product.picture}
                available={product.available}
                id_product={product.id_product}
              />
            );
          })}
        </div>
    );
  }
}
