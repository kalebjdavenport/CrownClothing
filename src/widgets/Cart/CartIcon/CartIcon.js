import React from "react";
import "./CartIcon.style.scss";

import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";

const CartIcon = () => {
  const itemsInCart = useSelector(state => selectCartItemsCount(state));
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

export default CartIcon;
