import React from "react";

import { Link } from "react-router-dom";
import "./Navigator.style.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigator = () => {
  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="links">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigator;
