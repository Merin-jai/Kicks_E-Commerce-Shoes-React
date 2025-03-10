import React from "react";
import { IoTrashOutline } from "react-icons/io5"; // Trash bin icon
import { FaHeart } from "react-icons/fa"; // Heart icon for wishlist

const CartItem = ({ item, index, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      {/* Product Image */}
      <img src={item.image} alt={item.title} className="cart-item-image" />

      {/* Product Details */}
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-subtitle">Men’s Road Running Shoes</p>
        <p className="cart-item-color">{item.color} / Size 
          <select className="cart-size-dropdown">
            <option>{item.size}</option> {/* Preselected Size */}
          </select>
        </p>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
      </div>

      {/* Actions (Quantity + Remove) */}
      <div className="cart-item-actions">
        {/* Quantity Dropdown */}
        <select
          className="cart-quantity-dropdown"
          value={item.quantity}
          onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              Quantity {qty}
            </option>
          ))}
        </select>

        {/* Wishlist & Remove Icons */}
        <div className="cart-icons">
          <FaHeart className="cart-wishlist-icon" />
          <IoTrashOutline className="cart-remove-icon" onClick={() => removeFromCart(index)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
