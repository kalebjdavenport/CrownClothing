import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./CartDropdown.style.scss";

import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selector";

import CartItemSmall from "../CartItemSmall/CartItemSmall";

const CartDropdown = ({ toggleDropdown }) => {
  const cartItems = useSelector(state => selectCartItems(state));
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItemSmall key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleDropdown();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
