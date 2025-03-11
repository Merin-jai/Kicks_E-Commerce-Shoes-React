import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const CartItem = ({ item, index, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />

      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <p className="cart-item-subtitle">Men’s Road Running Shoes</p>
        <p className="cart-item-color">
          {item.color}  
        </p>
        <div className="cart-item-size-quantity"> 
           <div> Size : <select className="cart-size-dropdown">
            <option>{item.size}</option> 
          </select></div>
          <div>
            Quantity <select
                  className="cart-quantity-dropdown"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
            </select>
          </div>

        </div>
        <div className="cart-icons">
          <CiHeart className="cart-wishlist-icon" />
          <IoTrashBinOutline className="cart-remove-icon" onClick={() => removeFromCart(index)} />
        </div>
      </div>

      <div className="cart-item-actions">
        
      <span className="cart-item-price">${item.price.toFixed(2)}</span>
        
      </div>
    </div>
  );
};

export default CartItem;
