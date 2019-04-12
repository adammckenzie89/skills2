import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product">
        {/* <h1>Product</h1> */}
        <h3>{this.props.name}</h3>
        <h3>{this.props.price}</h3>
        <h3>{this.props.img}</h3>
      </div>
    );
  }
}

export default Product;
