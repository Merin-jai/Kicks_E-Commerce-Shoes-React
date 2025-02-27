import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../Products';

const ProductListings = () => {
  return (
    <section className="product-listings">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListings;
