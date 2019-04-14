import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Inventory</Link>
      </div>
    );
  }
}

export default Header;
