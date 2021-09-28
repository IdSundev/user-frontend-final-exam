import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pagination extends Component {
  render() {
    return (
      <div className="mt-4">
        <center>
          <Link to="/product/1">
            <button className="btn btn-dark" style={{ marginRight: "5px" }}>
              &#60;&#60;
            </button>
          </Link>
          <Link to={`/product/${this.props.links.previous}`}>
            <button className="btn btn-dark" style={{ marginRight: "5px" }}>
              &#60;
            </button>
          </Link>
          {this.props.links.pages.map((page, idx) => {
            if (page === "...") {
              return (
                <button
                  key={idx}
                  className="btn btn-dark"
                  style={{ marginRight: "5px" }}
                  disabled
                >
                  {page}
                </button>
              );
            }
            if (page === parseInt(this.props.pageSelected)) {
              return (
                <button
                  key={idx}
                  className="btn btn-dark"
                  style={{ marginRight: "5px" }}
                >
                  {page}
                </button>
              );
            } else {
              return (
                <Link to={`/product/${page}`} key={idx}>
                  <button
                    className="btn btn-dark"
                    style={{ marginRight: "5px" }}
                  >
                    {page}
                  </button>
                </Link>
              );
            }
          })}
          <Link to={`/product/${this.props.links.next}`}>
            <button
              className="btn btn-dark mr-2"
              style={{ marginRight: "5px" }}
            >
              &gt;
            </button>
          </Link>
          <Link to={`/product/${this.props.links.last_page}`}>
            <button className="btn btn-dark">&gt;&gt;</button>
          </Link>
        </center>
      </div>
    );
  }
}
