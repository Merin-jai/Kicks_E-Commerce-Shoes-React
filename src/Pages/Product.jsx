import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import CartContext
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail_ImageGallery";
import ProductProfile from "../components/ProductDetail_ProductProfile";
import NewDrops from "../components/Landing_NewDrops";
import "../Styles/ProductPage.css";
import { products } from "../Products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart } = useContext(CartContext); // Access global cart

  useEffect(() => {
    const selectedProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <Header />
      <div className="product-detail-content">
        <ProductDetail images={product.images} />
        <ProductProfile product={product} addToCart={addToCart} />
      </div>
      <NewDrops prop="Product" />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
