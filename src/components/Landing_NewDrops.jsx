import React from "react";
import ProductCard from "./ProductCard"; // Import reusable component
// import "../Styles/NewDrops.css"; // Import styles

// Sample Product Data (This can come from an API later)
const products = [
  { id: 1, image: "S1.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
  { id: 2, image: "S2.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
  { id: 3, image: "S3.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "10% off" },
  { id: 4, image: "S4.png", title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 125, tag: "New" },
];

const NewDrops = () => {
  return (
    <section className="new-drops-container">
      <div className="new-drops-header">
        <h2>DON’T MISS OUT NEW DROPS</h2>
        <button className="shop-btn">SHOP NEW DROPS</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewDrops;
