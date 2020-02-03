import React, { useState } from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./Navigator.style.scss";

import { connect } from "react-redux";

import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigator = ({ currentUser }) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
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
        <div
          onClick={() => {
            setShowCartDropdown(prev => !prev);
          }}
          className="nav-icon"
        >
          <CartIcon />
        </div>
      </div>
      {showCartDropdown && (
        <CartDropdown toggleDropdown={setShowCartDropdown} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navigator);
