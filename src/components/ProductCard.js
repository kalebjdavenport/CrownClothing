import React from "react";
import "../styles/homepage.styles.scss";

const ProductCard = ({ size, title, imgUrl }) => {
  return (
    <div className={`product-card ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      {console.log(size)}
      <div className="product">
        <h1 className="title">{title}</h1>
        <span className="subtitle">
          Shop <span className="icon">→</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
