import React, { Component } from "react";
import Footer from "../components/Footer";
import HeaderBottom from "../components/HeaderBottom";
import HeaderTop from "../components/HeaderTop";
import Main from "../components/Main";
import { withRouter } from "react-router";

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderBottom />
        <div className="index-banner">
          <div className="wmuSlider example1" style={{ height: "560px" }}>
            <div className="wmuSliderWrapper">
              <article
                style={{ position: "relative", width: "100%", opacity: 1 }}
              >
                <div className="banner-wrap">
                  <div className="slider-left">
                    <img src="images/SamsungBanner2.png" alt="" />
                  </div>
                  <div className="slider-right">
                    <h1>Galaxy Z</h1>
                    <h2>Fold 3</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="btn">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="slider-left">
                    <img src="images/banner2.jpg" alt="" />
                  </div>
                  <div className="slider-right">
                    <h1>Classic</h1>
                    <h2>White</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="btn">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="slider-left">
                    <img src="images/banner1.jpg" alt="" />
                  </div>
                  <div className="slider-right">
                    <h1>Classic</h1>
                    <h2>White</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="btn">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="slider-left">
                    <img src="images/banner2.jpg" alt="" />
                  </div>
                  <div className="slider-right">
                    <h1>Classic</h1>
                    <h2>White</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="btn">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="slider-left">
                    <img src="images/banner1.jpg" alt="" />
                  </div>
                  <div className="slider-right">
                    <h1>Classic</h1>
                    <h2>White</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <div className="btn">
                      <a href="shop.html">Shop Now</a>
                    </div>
                  </div>
                  <div className="clear" />
                </div>
              </article>
            </div>
            <a className="wmuSliderPrev">Previous</a>
            <a className="wmuSliderNext">Next</a>
            <ul className="wmuSliderPagination">
              <li>
                <a href="#" className>
                  0
                </a>
              </li>
              <li>
                <a href="#" className>
                  1
                </a>
              </li>
              <li>
                <a href="#" className="wmuActive">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
            <a className="wmuSliderPrev">Previous</a>
            <a className="wmuSliderNext">Next</a>
            <ul className="wmuSliderPagination">
              <li>
                <a href="#" className="wmuActive">
                  0
                </a>
              </li>
              <li>
                <a href="#" className>
                  1
                </a>
              </li>
              <li>
                <a href="#" className>
                  2
                </a>
              </li>
              <li>
                <a href="#" className>
                  3
                </a>
              </li>
              <li>
                <a href="#" className>
                  4
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
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

export default withRouter(Homepage);
