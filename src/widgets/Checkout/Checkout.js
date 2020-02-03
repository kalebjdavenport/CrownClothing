import React from "react";
import "./Checkout.style.scss";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";

const Checkout = () => {
  const cartItems = useSelector(state => selectCartItems(state));
  const total = useSelector(state => selectCartTotal(state));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => {
        return <CheckoutCard key={item.id} cartItem={item} />;
      })}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default Checkout;
