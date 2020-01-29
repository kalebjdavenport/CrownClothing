import React from "react";
import "./CartItemSmall.style.scss";

const CartItemSmall = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item-small">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} &times; ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemSmall;
