import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewDrops from '../components/Landing_NewDrops';
import CartItem from '../components/CardPage_Items';
import CartSummary from '../components/CardPage_Summary';
import { CartContext } from "../context/CartContext"; // Import CartContext
import '../Styles/CartPage.css';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const {removeFromCart} = useContext(CartContext);


  // Update quantity
  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? 6.99 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className='Cart-container'>
        <Header />
        <div className='Cart-heading'>
            <h1 className='Cart-title'>Saving to celebrate</h1>
            <p className='Cart-Description'>
              Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
            </p>
            <label style={{fontFamily:"OpenSans"}}>
              <a className='Lhighlight'>Join us</a> or <a className='Lhighlight'>Sign-in</a>
            </label>
        </div>

        <div className='Cart-content'>
          <div className="cart-items">
            <h3>Your Bag</h3>
            <p>Items in your bag are not reserved - check out now to make them yours.</p>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  index={index}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))
            )}
          </div>

          {/* Right - Order Summary */}
          <CartSummary cart={cart} subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
        </div>

        <NewDrops prop="Product" />
        <Footer />
    </div>
  );
}

export default CartPage;
