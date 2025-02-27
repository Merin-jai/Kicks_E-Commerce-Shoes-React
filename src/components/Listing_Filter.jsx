import React, { useState } from "react";
// css in listingpage.css

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    refineBy: "Men", // default 'Men'
    size: [],
    color: [],
    type: [],
    gender: [],
    priceRange: [0, 1000],
  });

  // Handle selection for the 'Refine By' buttons
  const handleRefineByChange = (category) => {
    setSelectedFilters({ ...selectedFilters, refineBy: category });
  };

  // Handle size selection
  const handleSizeChange = (size) => {
    const updatedSizes = selectedFilters.size.includes(size)
      ? selectedFilters.size.filter((item) => item !== size)
      : [...selectedFilters.size, size];
    setSelectedFilters({ ...selectedFilters, size: updatedSizes });
  };

  // Handle color selection
  const handleColorChange = (color) => {
    const updatedColors = selectedFilters.color.includes(color)
      ? selectedFilters.color.filter((item) => item !== color)
      : [...selectedFilters.color, color];
    setSelectedFilters({ ...selectedFilters, color: updatedColors });
  };

  // Handle product type selection
  const handleTypeChange = (type) => {
    const updatedTypes = selectedFilters.type.includes(type)
      ? selectedFilters.type.filter((item) => item !== type)
      : [...selectedFilters.type, type];
    setSelectedFilters({ ...selectedFilters, type: updatedTypes });
  };

  // Handle gender selection
  const handleGenderChange = (gender) => {
    const updatedGender = selectedFilters.gender.includes(gender)
      ? selectedFilters.gender.filter((item) => item !== gender)
      : [...selectedFilters.gender, gender];
    setSelectedFilters({ ...selectedFilters, gender: updatedGender });
  };

  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setSelectedFilters({ ...selectedFilters, priceRange: newValue });
  };

  return (
    <div className="filter">
      <h2>Filters</h2>

      {/* Refine By Section */}
      <div className="filter-section">
        <h3>Refine By</h3>
        <div className="filter-buttons">
          <button
            onClick={() => handleRefineByChange("Men")}
            className={selectedFilters.refineBy === "Men" ? "active" : ""}
          >
            Men
          </button>
          <button
            onClick={() => handleRefineByChange("Casual")}
            className={selectedFilters.refineBy === "Casual" ? "active" : ""}
          >
            Casual
          </button>
        </div>
      </div>

      {/* Size Section */}
      <div className="filter-section">
        <h3>Size</h3>
        <div className="filter-buttons">
          {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={selectedFilters.size.includes(size) ? "active" : ""}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Section */}
      <div className="filter-section">
        <h3>Color</h3>
        <div className="filter-buttons">
          {["blue", "orange", "black", "green", "yellow", "gray", "brown"].map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              style={{ backgroundColor: color }}
              className={selectedFilters.color.includes(color) ? "active" : ""}
            />
          ))}
        </div>
      </div>

      {/* Product Type Section */}
      <div className="filter-section">
        <h3>Type</h3>
        <div className="filter-buttons">
          {["Casual shoes", "Runners", "Hiking", "Sneaker", "Basketball", "Golf", "Outdoor"].map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={selectedFilters.type.includes(type) ? "active" : ""}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Gender Section */}
      <div className="filter-section">
        <h3>Gender</h3>
        <div className="filter-buttons">
          {["Men", "Women"].map((gender) => (
            <button
              key={gender}
              onClick={() => handleGenderChange(gender)}
              className={selectedFilters.gender.includes(gender) ? "active" : ""}
            >
              {gender}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={selectedFilters.priceRange[0]}
          onChange={(e) => handlePriceChange(e, [e.target.value, selectedFilters.priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={selectedFilters.priceRange[1]}
          onChange={(e) => handlePriceChange(e, [selectedFilters.priceRange[0], e.target.value])}
        />
        <p>
          ${selectedFilters.priceRange[0]} - ${selectedFilters.priceRange[1]}
        </p>
      </div>
    </div>
  );
};

export default Filter;
