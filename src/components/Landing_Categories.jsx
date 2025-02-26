import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import "../Styles/Landingcategories.css"; // Ensure correct import

const categoryData = [
  {
    id: 1,
    name: "LIFESTYLE SHOES",
    image: require("../assests/img/category2.png"), // Ensure correct path
  },
  {
    id: 2,
    name: "BASKETBALL SHOES",
    image: require("../assests/img/category1.png"), // Ensure correct path
  },
];

const LandingCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categoryData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categoryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="categories-section">
      {/* Title & Navigation */}
      <div className="categories-header">
        <h2 className="categories-title">CATEGORIES</h2>
        <div className="nav-buttons">
          <button className="nav-button" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="nav-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Categories Display */}
      <div className="categories-container">
        {categoryData.slice(currentIndex, currentIndex + 2).map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-img" />
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <FaExternalLinkAlt className="category-link-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingCategories;
