import React from "react";
import logo from "../../assets/images/brand-logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light" style={{ zIndex: '2' }}>
      <a
        className="navbar-brand"
        style={{ backgroundColor: "#f8f9fa", boxShadow: "none" }}
        href="#"
      >
        <img
          id="brand-logo"
          src={logo}
          height="50"
          className="d-inline-block align-top"
          alt=""
          style={{ backgroundColor: "#f8f9fa" }}
        />
      </a>
    </nav>
  );
}

export default Header;
