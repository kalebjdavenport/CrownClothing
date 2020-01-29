import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./CartDropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
