import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/CheckoutPage.css";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    deliveryOption: "standard",
    billingSame: true,
    ageConfirmed: false,
    newsletter: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.address || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Order Submitted:", formData);
  };

  // Calculate Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = formData.deliveryOption === "standard" ? 6.00 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="checkout-container">
      <Header />

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Login and Checkout Faster</h2>
          <label>Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <h3>Shipping Address</h3>
          <div className="name-fields">
            <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} />
          </div>
          <input type="text" name="address" placeholder="Find Delivery Address*" value={formData.address} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />

          <h3>Delivery Options</h3>
          <label className="delivery-option">
            <input type="radio" name="deliveryOption" value="standard" checked={formData.deliveryOption === "standard"} onChange={handleChange} />
            Standard Delivery <span className="price">$6.00</span>
          </label>
          <label className="delivery-option">
            <input type="radio" name="deliveryOption" value="store" checked={formData.deliveryOption === "store"} onChange={handleChange} />
            Collect in Store <span className="price">Free</span>
          </label>

          <h3>Additional Information</h3>
          <label>
            <input type="checkbox" name="billingSame" checked={formData.billingSame} onChange={handleChange} />
            My billing and delivery information are the same
          </label>
          <label>
            <input type="checkbox" name="ageConfirmed" checked={formData.ageConfirmed} onChange={handleChange} required />
            I'm 13+ years old
          </label>
          <label>
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
            Yes, I'd like to receive emails about exclusive sales and more.
          </label>

          <button type="submit" className="checkout-btn">Review and Pay</button>
        </form>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="summary-item"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="summary-item"><span>Delivery:</span><span>${deliveryFee.toFixed(2)}</span></div>
          <hr />
          <div className="summary-total"><span>Total:</span><span>${total.toFixed(2)}</span></div>

          <h3>Order Details</h3>
          {cart.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.image} alt={item.title} />
              <div>
                <p className="order-title">{item.title}</p>
                <p>Size {item.size} - Quantity {item.quantity}</p>
                <p className="order-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
