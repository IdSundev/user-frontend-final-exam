import React, { Component } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { url_backend } from "../../config/url";
import Pagination from "./Pagination";

export default class Main extends Component {
  componentDidMount() {
    this.getFilterProducts();
    this.getCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.page && this.props.page !== prevProps.page) {
      this.getFilterProducts();
    }
    if (this.state.id_category !== prevState.id_category) {
      this.getFilterProducts();
    }
    if (this.state.search !== prevState.search) {
      this.getFilterProducts();
    }
    if (this.state.orderby !== prevState.orderby) {
      this.getFilterProducts();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      id_category: "",
      search: "",
      orderby: "",
    };
    // this.getProducts = this.getProducts.bind(this);
    this.getFilterProducts = this.getFilterProducts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleIdCategory = this.handleIdCategory.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
  }

  // getProducts = () => {
  //   axios
  //     .get(`${url_backend}/products?page=${this.props.page}`)
  //     .then((res) => {
  //       this.setState({ products: res.data.products });
  //       this.setState({ links: res.data.links });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  getCategories = () => {
    axios
      .get(`${url_backend}/categories`)
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
    this.getFilterProducts();
  };

  handleIdCategory = (event) => {
    this.setState({ id_category: event.target.value });
    this.getFilterProducts();
  };

  handleOrderBy = (event) => {
    this.setState({ orderby: event.target.value });
    this.getFilterProducts();
  };

  getFilterProducts = () => {
    axios
      .get(`${url_backend}/products?page=${this.props.page}&category=${this.state.id_category}&name=${this.state.search}&orderby=${this.state.orderby}`)
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
      <div>
        <div className="box1">
          <div
            className="col_1_of_3 span_1_of_3"
            style={{ marginLeft: "10px", border: "none" }}
          >
            Search{"  "}
            <input
              type="text"
              style={{ padding: "10px" }}
              placeholder="Product name.."
              value={this.state.search}
              onBlur={this.handleSearch}
              onChange={this.handleSearch}
            />
            <br />
          </div>
          <div
            className="col_1_of_3 span_1_of_3"
            style={{ marginLeft: "10px", border: "none" }}
          >
            Category{"  "}
            <select
              className="frm-field required"
              style={{ padding: "10px" }}
              onChange={this.handleIdCategory}
            >
              <option value="">Select Category</option>
              {this.state.categories.map((category, idx) => {
                return (
                  <option key={idx} value={category.id_category}>
                    {category.category}
                  </option>
                );
              })}
            </select>
            <br />
          </div>
          <div
            className="col_1_of_3 span_1_of_3"
            style={{ marginLeft: "10px", border: "none" }}
          >
            <div>
              Sort By{"  "}
              <select
                className="frm-field required"
                style={{ padding: "10px" }}
                onChange={this.handleOrderBy}
              >
                <option value="">Select</option>
                <option value="name">Product Name</option>
                <option value="price">Product Price</option>
              </select>
              <br />
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="box1">
          {this.state.products.map((product, idx) => {
            return (
              <ProductCard
                key={idx}
                category={product.category}
                name={product.name}
                price={product.price}
                picture={product.picture}
              />
            );
          })}
          <div className="clear" />
        </div>
        <div className="box1">
          <Pagination links={this.state.links} pageSelected={this.props.page} />
          <div className="clear" />
        </div>
      </div>
    );
  }
}
