import React,{useState,useRef,useEffect} from 'react';
import ProductCard from './ProductCard';
import { products } from '../Products';

const ProductListings = () => {

    const [itemsPerPage, setItemsPerPage] = useState(9);
    // Number of products per page
    // Detect screen size and update items per page
    useEffect(() => {
        const updateItemsPerPage = () => {
          if (window.innerWidth <= 768) {
            setItemsPerPage(6); // 6 products on mobile
          } else {
            setItemsPerPage(9); // Default to 9 products on larger screens
          }
        };

        // Call the function to set initial value
        updateItemsPerPage();

        // Add event listener to handle screen resize
        window.addEventListener("resize", updateItemsPerPage);

        // Clean up the event listener when component is unmounted
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);
    
    // Calculate the total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // State to keep track of the current page
    const [currentPage, setCurrentPage] = useState(1);
    
    const productListRef =useRef(null);
    

    // Handle changing page
    const handlePageChange = (page) => {
      setCurrentPage(page);
      // Scroll to the top of the product listings section
      productListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // scrollToTop();
    };

    // const scrollToTop = () =>{
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }

    

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
