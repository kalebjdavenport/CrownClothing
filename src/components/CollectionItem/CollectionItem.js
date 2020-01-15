import React from "react";

import "./CollectionItem.style.scss";

const CollectionItem = ({ title, price, imageUrl }) => {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="image"
      />
      <h1 className="title">{title}</h1>

      <div class="bottom">
        <div className="price">${price}</div>
        <p className="buy">Buy </p>
      </div>
    </div>
  );
};

export default CollectionItem;
