import React, { Component } from "react";
import Footer from "../components/Footer";
import HeaderBottom from "../components/HeaderBottom";
import HeaderTop from "../components/HeaderTop";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { url_backend } from "../config/url";

class ListAddress extends Component {
  componentDidMount() {
    this.getAddress();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.address !== prevState.address) {
      this.getAddress();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      address: [],
    };
    this.getAddress = this.getAddress.bind(this);
  }

  getAddress = () => {
    axios
      .get(`${url_backend}/address?user=${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ address: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setDefaultAddress = (id_address) => {
    axios
      .post(`${url_backend}/address/setdefault?user=${this.props.match.params.id}&address=${id_address}`)
      .then(() => {
        this.getAddress()
        alert("Set Default Address Success.")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderBottom />
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <div className="row">
            <div className="col-md-12">
              <Link to={`/address/add/${this.props.match.params.id}`}>
                <button className="btn btn-dark mr-2">
                  Create New Address
                </button>
              </Link>
            </div>
            {this.state.address.map((request, idx) => {
              let action;
              if (request.set_default === "FALSE") {
                action = (
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      className="bg-dark"
                      style={{ color: "white", padding: "8px" }}
                    >
                      Action:
                    </td>
                    <td style={{ padding: "8px" }}>
                      <button
                        type="button"
                        className="btn btn-dark"
                        style={{
                          backgroundColor: "#212529",
                          borderColor: "#212529",
                        }}
                        onClick={() => {this.setDefaultAddress(request.id_address)}}
                      >
                        Set Default Address
                      </button>
                    </td>
                  </tr>
                );
              }
              if (request.set_default === "TRUE") {
                action = (
                  <tr style={{ border: "1px solid black" }}>
                    <td
                      className="bg-dark"
                      style={{ color: "white", padding: "8px" }}
                    >
                      Status:
                    </td>
                    <td style={{ padding: "8px" }}>
                      <button
                        type="button"
                        className="btn btn-warning"
                        style={{
                          backgroundColor: "#ffc107",
                          borderColor: "#ffc107",
                        }}
                      >
                        Default Address
                      </button>
                    </td>
                  </tr>
                );
              }
              return (
                <div>
                  <div className="col-md-6" key={idx}>
                    <table
                      className="table"
                      style={{ border: "1px solid black", marginTop: "20px" }}
                    >
                      <tr style={{ border: "1px solid black" }}>
                        <td
                          className="bg-dark"
                          style={{ color: "white", padding: "8px" }}
                        >
                          Full Name:
                        </td>
                        <td style={{ padding: "8px" }}>{request.full_name}</td>
                      </tr>
                      <tr style={{ border: "1px solid black" }}>
                        <td
                          className="bg-dark"
                          style={{ color: "white", padding: "8px" }}
                        >
                          Contact:
                        </td>
                        <td style={{ padding: "8px" }}>{request.contact}</td>
                      </tr>
                      <tr style={{ border: "1px solid black" }}>
                        <td
                          className="bg-dark"
                          style={{ color: "white", padding: "8px" }}
                        >
                          Address:
                        </td>
                        <td style={{ padding: "8px" }}>
                          {request.village}, {request.sub_district},{" "}
                          {request.city}, {request.province}
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid black" }}>
                        <td
                          className="bg-dark"
                          style={{ color: "white", padding: "8px" }}
                        >
                          Detail Address:
                        </td>
                        <td style={{ padding: "8px" }}>
                          {request.detail_address}
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid black" }}>
                        <td
                          className="bg-dark"
                          style={{ color: "white", padding: "8px" }}
                        >
                          Other Detail:
                        </td>
                        <td style={{ padding: "8px" }}>
                          {request.other_detail}
                        </td>
                      </tr>
                      {action}
                    </table>
                  </div>
                  <div className="col-md-6"></div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ListAddress);
