import React from "react";
import ProductCard from "./ProductCard"; // Import reusable component
import { useNavigate } from "react-router-dom";
import { products } from "../Products";
// CSS in LandingPage.css
// Sample Product Data (This can come from an API later)
// const products = [
//   { id: 1, image: "S1.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
//   { id: 2, image: "S2.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
//   { id: 3, image: "S3.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "10% off" },
//   { id: 4, image: "S4.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
// ];

const NewDrops = ({prop}) => {
  const navigate=useNavigate();
  const Updatedproducts = products.slice(0, 4); // Show only 4 products
  return (
    <section className="new-drops-container">
      {(prop==="Product") ? 
      <div className="new-drops-header">
        <h2>You may also like</h2>
        <button className="shop-btn" onClick={()=>{navigate("/listing")}}>SHOP NEW DROPS</button>
      </div> :
      <div className="new-drops-header">
        <h2>DON’T MISS OUT NEW DROPS</h2>
        <button className="shop-btn" onClick={()=>{navigate("/listing")}}>SHOP NEW DROPS</button>
      </div>
    }
    

      {/* Product Grid */}
      <div className="product-grid">
        {Updatedproducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewDrops;
