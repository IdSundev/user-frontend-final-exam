import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="wrap">
            <div className="col_1_of_footer-top span_1_of_footer-top">
              <ul className="f_list">
                <li>
                  <img src="images/f_icon.png" alt="" />
                  <span className="delivery">
                    Free delivery on all orders over £100*
                  </span>
                </li>
              </ul>
            </div>
            <div className="col_1_of_footer-top span_1_of_footer-top">
              <ul className="f_list">
                <li>
                  <img src="images/f_icon1.png" alt="" />
                  <span className="delivery">
                    Customer Service :
                    <span className="orange"> (800) 000-2587 (freephone)</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col_1_of_footer-top span_1_of_footer-top">
              <ul className="f_list">
                <li>
                  <img src="images/f_icon2.png" alt="" />
                  <span className="delivery">
                    Fast delivery &amp; free returns
                  </span>
                </li>
              </ul>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="footer-middle">
          <div className="wrap">
            <div className="section group">
              <div className="col_1_of_middle span_1_of_middle">
                <dl id="sample" className="dropdown">
                  <dt>
                    <a href="#">
                      <span>Please Select a Country</span>
                    </a>
                  </dt>
                  <dd>
                    <ul>
                      <li>
                        <a href="#">
                          Australia
                          <img className="flag" src="images/as.png" alt="" />
                          <span className="value">AS</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Sri Lanka
                          <img className="flag" src="images/srl.png" alt="" />
                          <span className="value">SL</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Newziland
                          <img className="flag" src="images/nz.png" alt="" />
                          <span className="value">NZ</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Pakistan
                          <img className="flag" src="images/pk.png" alt="" />
                          <span className="value">Pk</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          United Kingdom
                          <img className="flag" src="images/uk.png" alt="" />
                          <span className="value">UK</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          United States
                          <img className="flag" src="images/us.png" alt="" />
                          <span className="value">US</span>
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="col_1_of_middle span_1_of_middle">
                <ul className="f_list1">
                  <li>
                    <span className="m_8">
                      Sign up for email and Get 15% off
                    </span>
                    <div className="search">
                      <input
                        type="text"
                        name="s"
                        className="textbox"
                        defaultValue="Search"
                        onfocus="this.value = '';"
                        onblur="if (this.value == '') {this.value = 'Search';}"
                      />
                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        id="submit"
                        name="submit"
                      />
                      <div id="response"> </div>
                    </div>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="wrap">
            <p>
              © All rights reserved | Template by&nbsp;
              <a href="http://w3layouts.com/"> W3Layouts</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
