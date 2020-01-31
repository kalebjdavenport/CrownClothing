import React from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./CartDropdown.style.scss";

import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";

import CartItemSmall from "../CartItemSmall/CartItemSmall";

const CartDropdown = () => {
  const cartItems = useSelector(state => selectCartItemsCount(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItemSmall key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
