import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarToggler from "./NavbarToggler";
import NavbarCollapsingMenu from "./NavbarCollapsingMenu";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <NavbarLogo />
        <NavbarToggler />
        <NavbarCollapsingMenu />
      </div>
    </nav>
  );
};

export default Navbar;
