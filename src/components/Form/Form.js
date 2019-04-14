import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: "",
      productName: "",
      price: ""
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
    this.handlepriceChange = this.handlepriceChange.bind(this);
    this.handleCancleButton = this.handleCancleButton.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  handleImageChange = e => {
    this.setState({ img: e.target.value });
  };
  handleProductName = e => {
    this.setState({ productName: e.target.value });
  };
  handlepriceChange = e => {
    this.setState({ price: e.target.value });
  };
  handleCancleButton = e => {
    e.preventdefault();
    this.setState({
      img: "",
      productName: "",
      price: ""
    });
  };

  handlePost() {
    axios
      .post("/api/inventory", {
        name: this.state.productName,
        price: this.state.price,
        img: this.state.img
      })
      .then(response => {
        this.setState({ inventoryList: response.data });
      });
  }
  editProduct(id) {
    axios.put(`/api/inventory/${id}`, {}).catch(error => console.log(error));
  }
  render() {
    console.log(this.state.productName);

    return (
      <form className="form">
        <label>Image URL</label>
        <input onChange={this.handleImageChange} />
        <label>Product Name</label>
        <input onChange={this.handleProductName} />
        <label>price</label>
        <input onChange={this.handlepriceChange} />
        <button onClick={this.handleCancleButton}>Cancel</button>
        <button onClick={this.handlePost}>Add to Inventory</button>
      </form>
    );
  }
}

export default Form;
