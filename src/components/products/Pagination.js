import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Pagination extends Component {
  render() {
    return (
      <div>
        <center>
          <Link to="/product/1">
            <button
              className="button1 grey"
            >
              &#60;&#60;
            </button>
          </Link>
          <Link to={`/product/${this.props.links.previous}`}>
            <button
              className="button1 grey"
            >
              &#60;
            </button>
          </Link>
          {this.props.links.pages.map((page, idx) => {
            if (page === "...") {
              return (
                <button
                  key={idx}
                  className="button1 grey"
                  disabled
                >
                  {page}
                </button>
              );
            }
            if (page === parseInt(this.props.pageSelected)) {
              return (
                <button key={idx} className="button1 grey">
                  {page}
                </button>
              );
            } else {
              return (
                <Link to={`/product/${page}`} key={idx}>
                  <button
                    className="button1 grey"
                  >
                    {page}
                  </button>
                </Link>
              );
            }
          })}
          <Link to={`/product/${this.props.links.next}`}>
            <button className="button1 grey">&gt;</button>
          </Link>
          <Link to={`/product/${this.props.links.last_page}`}>
            <button className="button1 grey">&gt;&gt;</button>
          </Link>
        </center>
      </div>
    );
  }
}
