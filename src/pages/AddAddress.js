import React, { Component } from "react";
import Footer from "../components/Footer";
import HeaderBottom from "../components/HeaderBottom";
import HeaderTop from "../components/HeaderTop";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { url_backend } from "../config/url";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class AddAddress extends Component {
  componentDidMount() {
    this.getProvince();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id_province !== prevState.id_province) {
      this.getCity(this.state.id_province);
    }
    if (this.state.id_city !== prevState.id_city) {
      this.getDistrict(this.state.id_city);
    }
    if (this.state.id_district !== prevState.id_district) {
      this.getVillage(this.state.id_district);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      province: [],
      id_province: "",
      isProvinceValid: "",
      city: [],
      id_city: "",
      isCityValid: "",
      district: [],
      id_district: "",
      isDistrictValid: "",
      village: [],
      isVillageValid: "",
      name: "",
      isNameValid: "",
      detail_address: "",
      isDetailAddressValid: "",
      other_detail: "",
      isOtherDetailValid: "",
      contact: "",
      isContactValid: "",
      pin_as: "HOME",
    };
    this.handleProvince = this.handleProvince.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleDetailAddress = this.handleDetailAddress.bind(this);
    this.handleOtherDetail = this.handleOtherDetail.bind(this);
    this.getProvince = this.getProvince.bind(this);
    this.getCity = this.getCity.bind(this);
    this.getDistrict = this.getDistrict.bind(this);
    this.getVillage = this.getVillage.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handlePin = this.handlePin.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  getProvince = () => {
    axios
      .get(`${url_backend}/province`)
      .then((res) => {
        this.setState({ province: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProvince = (event) => {
    const { value } = event.target;
    this.setState({
      id_province: event.target.value,
      city: [],
      id_city: "",
      isCityValid: "",
      district: [],
      id_district: "",
      isDistrictValid: "",
      village: [],
      id_village: "",
    });
    value !== "Select Province"
      ? this.setState({
          isProvinceValid: true,
          id_province: value,
        })
      : this.setState({
          isProvinceValid: false,
          id_province: "",
        });
  };

  getCity = (id_province) => {
    // console.log(id_province);
    axios
      .get(`${url_backend}/city?province=${id_province}`)
      .then((res) => {
        this.setState({ city: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCity = (event) => {
    const { value } = event.target;
    this.setState({
      id_city: event.target.value,
      district: [],
      id_district: "",
      isDistrictValid: "",
      village: [],
      id_village: "",
    });
    value !== "Select City"
      ? this.setState({
          isCityValid: true,
          id_city: value,
        })
      : this.setState({
          isCityValid: false,
          id_city: "",
        });
  };

  getDistrict = (id_city) => {
    // console.log(id_city);
    axios
      .get(`${url_backend}/district?city=${id_city}`)
      .then((res) => {
        this.setState({ district: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDistrict = (event) => {
    const { value } = event.target;
    this.setState({
      id_district: event.target.value,
      village: [],
      id_village: "",
    });
    value !== "Select District"
      ? this.setState({
          isDistrictValid: true,
          id_district: value,
        })
      : this.setState({
          isDistrictValid: false,
          id_district: "",
        });
  };

  getVillage = (id_district) => {
    // console.log(id_district);
    axios
      .get(`${url_backend}/village?district=${id_district}`)
      .then((res) => {
        this.setState({ village: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleVillage = (event) => {
    const { value } = event.target;
    this.setState({
      id_village: event.target.value,
    });
    value !== "Select Village"
      ? this.setState({
          isVillageValid: true,
          id_village: value,
        })
      : this.setState({
          isVillageValid: false,
          id_village: "",
        });
  };

  handleDetailAddress = (event) => {
    const { value } = event.target;
    this.setState({ detail_address: value });
    this.state.detail_address.length > 5
      ? this.setState({ isDetailAddressValid: true })
      : this.setState({ isDetailAddressValid: false });
  };

  handleOtherDetail = (event) => {
    const { value } = event.target;
    this.setState({ other_detail: value });
    this.state.other_detail.length > 5
      ? this.setState({ isOtherDetailValid: true })
      : this.setState({ isOtherDetailValid: false });
  };

  handleName = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
    this.state.name.length > 5
      ? this.setState({ isNameValid: true })
      : this.setState({ isNameValid: false });
  };

  handleContact = (event) => {
    const { value } = event.target;
    this.setState({ contact: value });
  };

  handleSave = () => {
    if (
      this.state.name === "" ||
      this.state.detail_address === "" ||
      this.state.contact === "" ||
      this.state.id_village === ""
    ) {
      alert("ERROR!! Provide correct data , please!");
      return;
    }
    axios
      .post(`${url_backend}/addres`, {
        id_user: this.props.match.params.id,
        id_village: this.state.id_village,
        detail_address: this.state.detail_address,
        other_detail: this.state.other_detail,
        pin_as: this.state.pin_as,
        contact: this.state.contact,
        full_name: this.state.name,
      })
      .then(() => {
        alert("New Addres has saved!");
      })
      .catch((err) => {
        alert("New Addres has no saved!");
      });
    this.setState({
      name: "",
      isNameValid: "",
      detail_address: "",
      isDetailAddressValid: "",
      other_detail: "",
      isOtherDetailValid: "",
      contact: "",
      isContactValid: "",
      pin_as: "HOME",
    });
  };

  handlePin = (event) => {
    this.setState({ pin_as: event.target.value });
  };

  render() {
    return (
      <div>
        <HeaderTop />
        <HeaderBottom />
        <center>
          <div className="col-md-6 mt-3">
            <h3>Add New Address</h3>
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
                <td style={{ padding: "8px" }}>
                  <input
                    type="text"
                    className={
                      this.state.isNameValid === ""
                        ? "form-control"
                        : this.state.isNameValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    id="inputFullName"
                    placeholder="Enter Fullname..."
                    value={this.state.name}
                    onBlur={this.handleName}
                    onChange={this.handleName}
                  />
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  Contact:
                </td>
                <td style={{ padding: "8px" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="inputContact"
                    placeholder="Enter Contact..."
                    value={this.state.contact}
                    onBlur={this.handleContact}
                    onChange={this.handleContact}
                  />
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  Pin As:
                </td>
                <td style={{ padding: "8px" }}>
                  <select className="form-control" onChange={this.handlePin}>
                    <option value="HOME">HOME</option>
                    <option value="OFFICE">OFFICE</option>
                  </select>
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  Province:
                </td>
                <td style={{ padding: "8px" }}>
                  <select
                    className={
                      this.state.isProvinceValid === ""
                        ? "form-control"
                        : this.state.isProvinceValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    // value={this.state.id_province}
                    onChange={this.handleProvince}
                  >
                    <option>Select Province</option>
                    {this.state.province.map((province, idx) => {
                      return (
                        <option key={idx} value={province.id_province}>
                          {province.province}
                        </option>
                      );
                    })}
                  </select>
                  {this.state.isProvinceValid ? (
                    ""
                  ) : (
                    <span
                      id="inputCategory-error"
                      className="error invalid-feedback"
                    >
                      Please provide a Province!
                    </span>
                  )}
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  City:
                </td>
                <td style={{ padding: "8px" }}>
                  <select
                    className={
                      this.state.isCityValid === ""
                        ? "form-control"
                        : this.state.isCityValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    // value={this.state.id_city}
                    onChange={this.handleCity}
                  >
                    <option>Select City</option>
                    {this.state.city.map((city, idx) => {
                      return (
                        <option key={idx} value={city.id_city}>
                          {city.city}
                        </option>
                      );
                    })}
                  </select>
                  {this.state.isCityValid ? (
                    ""
                  ) : (
                    <span
                      id="inputCity-error"
                      className="error invalid-feedback"
                    >
                      Please provide a City!
                    </span>
                  )}
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  District:
                </td>
                <td style={{ padding: "8px" }}>
                  <select
                    className={
                      this.state.isDistrictValid === ""
                        ? "form-control"
                        : this.state.isDistrictValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    // value={this.state.id_city}
                    onChange={this.handleDistrict}
                  >
                    <option>Select District</option>
                    {this.state.district.map((district, idx) => {
                      return (
                        <option key={idx} value={district.id_sub_district}>
                          {district.sub_district}
                        </option>
                      );
                    })}
                  </select>
                  {this.state.isDistrictValid ? (
                    ""
                  ) : (
                    <span
                      id="inputDistrict-error"
                      className="error invalid-feedback"
                    >
                      Please provide a District!
                    </span>
                  )}
                </td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td
                  className="bg-dark"
                  style={{ color: "white", padding: "8px" }}
                >
                  Village:
                </td>
                <td style={{ padding: "8px" }}>
                  <select
                    className={
                      this.state.isVillageValid === ""
                        ? "form-control"
                        : this.state.isVillageValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    // value={this.state.id_city}
                    onChange={this.handleVillage}
                  >
                    <option>Select Village</option>
                    {this.state.village.map((village, idx) => {
                      return (
                        <option key={idx} value={village.id_village}>
                          {village.village}
                        </option>
                      );
                    })}
                  </select>
                  {this.state.isVillageValid ? (
                    ""
                  ) : (
                    <span
                      id="inputVillage-error"
                      className="error invalid-feedback"
                    >
                      Please provide a Village!
                    </span>
                  )}
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
                  <input
                    type="text"
                    className={
                      this.state.isDetailAddressValid === ""
                        ? "form-control"
                        : this.state.isDetailAddressValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    id="inputDetailAddress"
                    placeholder="Enter Detail Address..."
                    value={this.state.detail_address}
                    onBlur={this.handleDetailAddress}
                    onChange={this.handleDetailAddress}
                  />
                  {this.state.isDetailAddressValid ? (
                    ""
                  ) : (
                    <span
                      id="inputDetailAddress-error"
                      className="error invalid-feedback"
                    >
                      Please provide a Detail Address! (character &ge; 5)
                    </span>
                  )}
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
                  <input
                    type="text"
                    className={
                      this.state.isOtherDetailValid === ""
                        ? "form-control"
                        : this.state.isOtherDetailValid
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    id="inputOtherDetail"
                    placeholder="Enter Other Detail Address..."
                    value={this.state.other_detail}
                    onBlur={this.handleOtherDetail}
                    onChange={this.handleOtherDetail}
                  />
                  {this.state.isOtherDetailValid ? (
                    ""
                  ) : (
                    <span
                      id="inputOtherDetail-error"
                      className="error invalid-feedback"
                    >
                      Please provide a Other Detail Address! (character &ge; 5)
                    </span>
                  )}
                </td>
              </tr>
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
                    onClick={this.handleSave}
                  >
                    Add Address
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </center>
        <Footer />
      </div>
    );
  }
}

export default withRouter(AddAddress);
