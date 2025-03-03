import React, { useState } from "react";
//css in ProductPage.css
const ProductProfile = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="product-profile">
      {/* Tag for New Release */}
      <span className="product-tag">New Release</span>

      {/* Product Title & Price */}
      <h1 className="product-title">{product.title}</h1>
      <p className="product-price">${product.price}</p>

      {/* Color Selection */}
      <div className="section">
        <h3>COLOR</h3>
        <div className="color-options">
          {product.color.map((color, index) => (
            <span
              key={index}
              className={`color-circle ${selectedColor === color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="section">
        <div className="size-header">
          <h3>SIZE</h3>
          <a href="#" className="size-chart">SIZE CHART</a>
        </div>
        <div className="size-options">
          {product.size.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
              disabled={product.soldOutSizes.includes(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <button className="add-to-cart">ADD TO CART <span className="heart-icon">❤️</span></button>
      <button className="buy-now">BUY IT NOW</button>

      {/* About the Product */}
      <div className="section">
        <h3>ABOUT THE PRODUCT</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductProfile;
