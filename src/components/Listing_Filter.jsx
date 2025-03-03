import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Filters = ({selectedFilters, onFilterChange}) => {
  // const [selectedFilters, setSelectedFilters] = useState({selectedFilters});

  // States for toggle visibility
  const [isRefineOpen, setIsRefineOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  // Handle selection for 'Refine By'
  const handleRefineByChange = (category) => {
    // setSelectedFilters({ ...selectedFilters, refineBy: category });
    onFilterChange({ refineBy: category });
  };

  // Handle size selection
  const handleSizeChange = (size) => {
    const updatedSizes = selectedFilters.size.includes(size)
      ? selectedFilters.size.filter((item) => item !== size)
      : [...selectedFilters.size, size];
    // setSelectedFilters({ ...selectedFilters, size: updatedSizes });
    onFilterChange({ size: updatedSizes });
  };

  // Handle color selection
  const handleColorChange = (color) => {
    const updatedColors = selectedFilters.color.includes(color)
      ? selectedFilters.color.filter((item) => item !== color)
      : [...selectedFilters.color, color];
    // setSelectedFilters({ ...selectedFilters, color: updatedColors });
    onFilterChange({ color: updatedColors });
  };

  // Handle product type selection
  const handleTypeChange = (type) => {
    const updatedTypes = selectedFilters.type.includes(type)
      ? selectedFilters.type.filter((item) => item !== type)
      : [...selectedFilters.type, type];
    // setSelectedFilters({ ...selectedFilters, type: updatedTypes });
    onFilterChange({ type: updatedTypes });
  };

  // Handle gender selection
  const handleGenderChange = (gender) => {
    const updatedGender = selectedFilters.gender.includes(gender)
      ? selectedFilters.gender.filter((item) => item !== gender)
      : [...selectedFilters.gender, gender];
    // setSelectedFilters({ ...selectedFilters, gender: updatedGender });
    onFilterChange({ gender: updatedGender });
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    // setSelectedFilters({ ...selectedFilters, priceRange: [e.target.value, selectedFilters.priceRange[1]] });
    onFilterChange({ priceRange: [e.target.value, selectedFilters.priceRange[1]] });
  };

  // Toggling functions for filter sections
  const toggleSection = (section) => {
    if (section === "refine") {
      setIsRefineOpen(!isRefineOpen);
    }
    if (section === "size") {
      setIsSizeOpen(!isSizeOpen);
    }
    if (section === "color") {
      setIsColorOpen(!isColorOpen);
    }
    if (section === "type") {
      setIsTypeOpen(!isTypeOpen);
    }
    if (section === "gender") {
      setIsGenderOpen(!isGenderOpen);
    }
    if (section === "price") {
      setIsPriceOpen(!isPriceOpen);
    }
  };

  return (
    <div className="filters">
      <h2 style={{ fontFamily: "Rubik-bold" }}>Filters</h2>

      {/* Refine By Section */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("refine")}>
          <span>REFINE BY</span>
          <span className="arrow">{isRefineOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isRefineOpen && (
          <div className="refine-buttons">
            <button
              className={selectedFilters.refineBy === "Men" ? "active" : ""}
              onClick={() => handleRefineByChange("Men")}
            >
              Men
            </button>
            <button
              className={selectedFilters.refineBy === "Casual" ? "active" : ""}
              onClick={() => handleRefineByChange("Casual")}
            >
              Casual
            </button>
          </div>
        )}
      </div>

      {/* Size Section */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("size")}>
          <span>SIZE</span>
          <span className="arrow">{isSizeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isSizeOpen && (
          <div className="size-buttons">
            {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
              <button
                key={size}
                className={selectedFilters.size.includes(size) ? "active" : ""}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color Section */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("color")}>
          <span>COLOR</span>
          <span className="arrow">{isColorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isColorOpen && (
          <div className="color-options">
            {["blue", "orange", "black", "green", "yellow", "brown"].map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color }}
                className={selectedFilters.color.includes(color) ? "active" : ""}
              />
            ))}
          </div>
        )}
      </div>

      {/* Type (Checkboxes) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("type")}>
          <span>TYPE</span>
          <span className="arrow">{isTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isTypeOpen && (
          <div className="type-checkboxes">
            {[
              "Casual shoes",
              "Runners",
              "Hiking",
              "Sneaker",
              "Basketball",
              "Golf",
              "Outdoor",
            ].map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={selectedFilters.type.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Gender (Checkboxes) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("gender")}>
          <span>GENDER</span>
          <span className="arrow">{isGenderOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isGenderOpen && (
          <div className="gender-checkboxes">
            {["Men", "Women"].map((gender) => (
              <label key={gender}>
                <input
                  type="checkbox"
                  checked={selectedFilters.gender.includes(gender)}
                  onChange={() => handleGenderChange(gender)}
                />
                {gender}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price (Single Slider) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection("price")}>
          <span>PRICE</span>
          <span className="arrow">{isPriceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isPriceOpen && (
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="1000"
              value={selectedFilters.priceRange[0]}
              onChange={(e) => handlePriceChange(e)}
            />
            <div className="price-values">
              <span>${selectedFilters.priceRange[0]}</span>
              <span>$1000</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
