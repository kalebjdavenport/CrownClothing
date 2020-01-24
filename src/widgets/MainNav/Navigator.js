import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./Navigator.style.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigator = ({ currentUser }) => {
  console.log(currentUser);
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
        {currentUser ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigator;
