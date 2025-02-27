import React,{useState,useRef} from 'react';
import ProductCard from './ProductCard';
import { products } from '../Products';

const ProductListings = () => {

    // Number of products per page
    const itemsPerPage = 9;
    
    // Calculate the total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // State to keep track of the current page
    const [currentPage, setCurrentPage] = useState(1);
    
    const productListRef =useRef();
    // Scroll to the top of the product listings section
    productListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    // Handle changing page
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    // Get the products for the current page
    const currentProducts = products.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  return (
    <section ref={productListRef} className="product-listings">
      <div className="products-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; PREVIOUS
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          NEXT &gt;
        </button>
      </div>
    </section>
  );
};

export default ProductListings;
