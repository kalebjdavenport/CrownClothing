import React, { useState } from "react";

// Components
import ProductCard from "../components/ProductCard";

const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats"
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets"
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers"
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens"
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens"
  }
];

const ProductMenu = () => {
  const [productData, setProductData] = useState(sections);

  return (
    <div className="productMenu">
      <div className="row">
        {productData.slice(0, 3).map(product => (
          <ProductCard
            key={product.id}
            linkUrl={product.linkUrl}
            imgUrl={product.imageUrl}
            title={product.title.toUpperCase()}
          />
        ))}
      </div>
      <div className="row">
        {productData.slice(3, 5).map(product => (
          <ProductCard
            key={product.id}
            linkUrl={product.linkUrl}
            size={product.size}
            imgUrl={product.imageUrl}
            title={product.title.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
