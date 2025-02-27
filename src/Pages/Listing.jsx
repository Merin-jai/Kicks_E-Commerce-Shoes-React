import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Listing_Banner';
import ProductListings from '../components/Listing_productsgrid';
import "../Styles/ListingPage.css";

import { MdKeyboardArrowDown } from "react-icons/md";


const Listing = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <section className='Listing-header'>
            <div className='L-H-left'>
                <h1>Life Style Shoes</h1>
                <label>122 items</label>
            </div>
            <button >
                TRENDING 
                <MdKeyboardArrowDown style={{fontSize:"1.5vw"}}/>
            </button>
        </section>
        <div className='listing-contents'>
            <ProductListings/>
        </div>
        <Footer/>
    </div>
  )
}

export default Listing