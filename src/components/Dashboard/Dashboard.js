import React, { Component } from "react";
import Product from "./Product";

class Dashboard extends Component {
  render() {
    let productDisplay = this.props.inventoryList.map((product, index) => {
      return <Product {...this.props.inventoryList[index]} />;
    });
    return (
      <div className="Dashboard">
        {/* <h1>Dashboard</h1> */}
        {productDisplay}
      </div>
    );
  }
}

export default Dashboard;
