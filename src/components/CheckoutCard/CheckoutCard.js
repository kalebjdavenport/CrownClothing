import React from "react";

import "./CheckoutCard.style.scss";

import { useDispatch } from "react-redux";
import {
  removeUnitOfItemFromCart,
  removeItemFromCart,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutCard = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          onClick={() => dispatch(removeUnitOfItemFromCart(cartItem))}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>
      <div
        onClick={() => dispatch(removeItemFromCart(cartItem))}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutCard;
