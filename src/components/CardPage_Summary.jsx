import React from "react";

const CartSummary = ({ cart, subtotal, deliveryFee, total }) => {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="summary-item">
        <span>{cart.length} ITEM{cart.length !== 1 ? "S" : ""}</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Delivery</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="summary-item">
        <span>Sales Tax</span>
        <span>-</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="checkout-button">CHECKOUT</button>
      <p className="promo-code">Use a promo code</p>
    </div>
  );
};

export default CartSummary;
