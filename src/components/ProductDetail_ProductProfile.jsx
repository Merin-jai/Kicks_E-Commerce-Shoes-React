import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductProfile = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="product-profile">
      {/* Tag (New/Sale) */}
      <span className="Product-tag">{product.tag === "New" ? "New Release" : product.tag}</span>

      {/* Product Title & Price */}
      <h1 className="Product-title">{product.title}</h1>
      <p className="Product-price">${product.price.toFixed(2)}</p>

      {/* Color Selection */}
        <div className="section">
          <h3 className="section-title">COLOR</h3>
          <div className="color-options">
            {product.color.map((color, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>


      {/* Size Selection */}
      <div className="section">
        <div className="size-header">
          <h3 className="section-title">SIZE</h3>
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
      <div className="action-buttons">
        <button className="add-to-cart">ADD TO CART</button>
        <button className="wishlist-button"><IoMdHeartEmpty/></button>
      </div>
      <button className="buy-now">BUY IT NOW</button>

      {/* About the Product */}
      <div className="section">
        <h3 className="section-title">ABOUT THE PRODUCT</h3>
        <p className="product-description">{product.description}</p>
        <p className="P-desc">This product is excluded from all promotional discounts and offers.</p>
        <ul className="P-desc-list">
          <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
          <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductProfile;
