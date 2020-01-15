import React from "react";
import "../styles/homepage.styles.scss";
import { withRouter } from "react-router-dom";

const ProductCard = ({ size, title, imageUrl, history, linkUrl, match }) => {
  return (
    <div
      className={`product-card ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="product-info">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">
          Shop <span className="icon">→</span>
        </span>
      </div>
    </div>
  );
};

export default withRouter(ProductCard);
