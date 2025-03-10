import React, { createContext, useState, useEffect } from "react";

// Create Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage when the app starts
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Load cart from localStorage when the app loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Cart Updated:", [...cart, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
