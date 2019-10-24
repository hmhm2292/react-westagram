import React from "react";
import NavbarLeft from "./NavbarLeft.js";
import SearchBar from "./SearchBar.js";
import NavbarRight from "./NavbarRight.js";
import "./_Navbar.scss";

function Navbar() {
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

export default Navbar;
