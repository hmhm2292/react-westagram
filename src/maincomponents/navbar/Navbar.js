import React, { Component } from "react";
import NavbarLeft from "./NavbarLeft.js";
import SearchBar from "./SearchBar.js";
import NavbarRight from "./NavbarRight.js";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="navBarGroup">
          <NavbarLeft />
          <SearchBar />
          <NavbarRight />
        </div>
      </nav>
    );
  }
}

export default Navbar;
