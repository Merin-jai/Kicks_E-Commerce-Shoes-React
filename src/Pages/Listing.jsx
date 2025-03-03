import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Listing_Banner';
import ProductListing from '../components/Listing_productsgrid';
import Filter from '../components/Listing_Filter';
import "../Styles/ListingPage.css";
import { products } from '../Products';

import { MdKeyboardArrowDown } from "react-icons/md";


const Listing = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        refineBy: "Men",
        size: [],
        color: [],
        type: [],
        gender: [],
        priceRange: [0, 1000],
      });

    // Handle filters changes from the Filters component
    const handleFilterChange = (newFilters) => {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        ...newFilters,
      }));
    };
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
            <Filter selectedFilters={selectedFilters} onFilterChange={handleFilterChange}/>
            <ProductListing selectedFilters={selectedFilters} products={products}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Listing