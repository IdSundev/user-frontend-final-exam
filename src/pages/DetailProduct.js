import React, { Component } from "react";
import Detail from "../components/products/Detail";
import { withRouter } from "react-router";

class DetailProduct extends Component {

  render() {
    return (
      <div>
        <Detail id_product={this.props.match.params.id}/>
      </div>
    );
  }
}

export default withRouter(DetailProduct);
