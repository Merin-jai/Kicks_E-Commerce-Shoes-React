// ProductDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail_ImageGallery";
import "../Styles/ProductPage.css";

import { products } from "../Products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    // <div className="product-detail-page">
    //   <ProductDetailHeader product={product} />
    //   <div className="product-main-content">
    //     <ProductImageGallery images={product.images} />
    //     <ProductDescription description={product.description} />
    //   </div>
    //   <ProductFooter />
    //   <ProductJoinClub />
    // </div>
    <div className="product-detail-page">
        <Header />
        <div className="product-detail-content">
            <ProductDetail images={product.images} />
        </div>
        
        
        <Footer />
    </div>
  );
};

export default ProductDetailPage;
