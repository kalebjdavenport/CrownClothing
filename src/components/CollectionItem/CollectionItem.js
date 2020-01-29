import React from "react";
import { useDispatch } from "react-redux";

import "./CollectionItem.style.scss";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const { title, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="image"
      />
      <h1 className="title">{title}</h1>

      <div className="bottom">
        <div className="price">${price}</div>
        <p className="buy" onClick={() => dispatch(addItem(item))}>
          Buy
        </p>
      </div>
    </div>
  );
};

export default CollectionItem;
