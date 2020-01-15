import React, { useState } from "react";
import PropTypes from "prop-types";

import SHOP_DATA from "../shop/shop.data";
import ProductCollection from "../../components/ProductCollection/ProductCollection";

const Shop = props => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop">
      {collections.map(({ id, ...props }) => (
        <ProductCollection key={id} {...props} />
      ))}
    </div>
  );
};

Shop.propTypes = {};

export default Shop;
