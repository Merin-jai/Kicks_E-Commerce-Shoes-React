import React from "react";
import "../Styles/Productcard.css"; // Import styles

const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        {/* Display Tag if available */}
        {product.tag && <span className="product-tag">{product.tag}</span>}
        
        {/* Product Image */}
        <div className="product-image-container">
          {/* <img src={require(`../assests/img/${product.image}`)} alt={product.title} className="product-image" /> */}
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
  
        {/* Product Info */}
        <h3 className="product-title">{product.title}</h3>
        <button className="view-product-btn">VIEW PRODUCT <span className="product-price">- ${product.price}</span></button>
      </div>
    );
  };

export default ProductCard;
