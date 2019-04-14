import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    axios.get("/api/inventory").then(response => {
      this.setState({ inventoryList: response.data });
    });
  }

  handleDelete(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(res => this.getProducts())
      .catch(error => console.log(error));
  }
  render() {
    let productDisplay = this.state.inventoryList.map((product, index) => {
      return (
        <Product
          key={index}
          {...this.state.inventoryList[index]}
          handleDelete={this.handleDelete}
          selectProduct={this.props.selectProduct}
        />
      );
    });

    return <div>{productDisplay}</div>;
  }
}

export default Dashboard;
