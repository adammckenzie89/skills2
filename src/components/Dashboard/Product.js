import React, { Component } from "react";
import axios from "axios";

class Product extends Component {
  render() {
    let { img, name, price, id } = this.props;
    return (
      <div className="product">
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <h3>{price}</h3>
        <button onClick={() => this.props.handleDelete(id)}>Delete</button>
        <button
          onClick={() => this.props.selectProduct({ name, price, img, id })}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default Product;
