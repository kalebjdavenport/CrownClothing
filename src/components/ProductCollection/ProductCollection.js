import React from "react";
import PropTypes from "prop-types";

import "./ProductCollection.style.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const ProductCollection = ({ title, items }) => {
  return (
    <div>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <CollectionItem title={item.name} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

ProductCollection.propTypes = {};

export default ProductCollection;
