import React from "react";
import "../Styles/ProductCard.css"; // Import styles

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <img src={require(`../assets/${product.image}`)} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <button className="view-product-btn">VIEW PRODUCT - ${product.price}</button>
    </div>
  );
};

export default ProductCard;
