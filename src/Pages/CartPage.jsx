import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewDrops from '../components/Landing_NewDrops';

const CartPage = () => {
  return (
    <div>
        <Header />
        <div className='Cart-content'>
            <h1>Cart Page</h1>
        </div>
        <NewDrops prop="Product" />
        <Footer />
    </div>
  )
}

export default CartPage