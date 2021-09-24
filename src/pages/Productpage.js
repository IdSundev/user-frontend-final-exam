import React, { Component } from "react";
import Footer from "../components/Footer";
import HeaderBottom from "../components/HeaderBottom";
import HeaderTop from "../components/HeaderTop";
import Main from "../components/products/Main";
import { withRouter } from "react-router";

class Productpage extends Component {
  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderBottom />
        <div className="main" style={{marginTop:"20px"}}>
          <div className="wrap">
            <div className="content-bottom">
              {/* pagination products  */}
              <Main
                page={
                  !this.props.match.params.id ? 1 : this.props.match.params.id
                }
              />
            </div>
          </div>
        </div>

        <Footer />
        <a href="#" id="toTop" style={{ display: "block" }}>
          <span id="toTopHover" style={{ opacity: 1 }} />
        </a>
      </div>
    );
  }
}

export default withRouter(Productpage);
