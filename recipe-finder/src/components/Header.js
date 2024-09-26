import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand mx-auto" href="/">
          {" "}
          {}
          <img
            className="img-fluid"
            src={logo}
            alt="Logo"
            width="100"
            height="100"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
