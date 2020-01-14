import React from "react";
import "../styles/homepage.styles.scss";

const ProductCard = () => {
  return (
    <div className="hompage">
      <div className="product-item-menu">
        <div className="product-card">
          <div className="product">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop now!</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">Shop now!</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">Shop now!</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product">
            <h1 className="title">MENS</h1>
            <span className="subtitle">Shop now!</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">Shop now!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
