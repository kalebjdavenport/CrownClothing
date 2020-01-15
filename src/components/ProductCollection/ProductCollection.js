import React from "react";
import PropTypes from "prop-types";

import "./ProductCollection.style.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const ProductCollection = ({ title, items }) => {
  return (
    <div>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ name, id, ...props }) => (
          <CollectionItem title={name} key={id} {...props} />
        ))}
      </div>
    </div>
  );
};

ProductCollection.propTypes = {};

export default ProductCollection;
