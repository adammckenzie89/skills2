import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: "",
      productName: "",
      Price: ""
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCancleButton = this.handleCancleButton.bind(this);
    this.submitInventory = this.submitInventory.bind(this);
  }
  handleImageChange = e => {
    this.setState({ img: e.target.value });
  };
  handleProductName = e => {
    this.setState({ productName: e.target.value });
  };
  handlePriceChange = e => {
    this.setState({ Price: e.target.value });
  };
  handleCancleButton = e => {
    e.preventdefault();
    this.setState({
      img: "",
      productName: "",
      Price: ""
    });
  };
  submitInventory() {
    this.setState({
      img: "",
      productName: "",
      Price: ""
    });
  }
  handlePost() {
    axios
      .post("/api/inventory", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      })
      .then(response => {
        this.setState({ inventoryList: response.data });
      });
  }
  render() {
    return (
      <form className="form">
        <label>Image URL</label>
        <input onChange={this.handleImageChange} />
        <lable>Product Name</lable>
        <input onChange={this.handleProductName} />
        <label>Price</label>
        <input onChange={this.handlePriceChange} />
        <button onClick={this.handleCancleButton}>Cancel</button>
        <button onSubmit={this.submitInventory}>Add to Inventory</button>
      </form>
    );
  }
}

export default Form;
