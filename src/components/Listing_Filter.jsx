import React, { useState } from 'react';

const Filters = () => {
  const [selectedRefine, setSelectedRefine] = useState('Men');
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleRefineSelect = (value) => {
    setSelectedRefine(value);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };

  const handleColorSelect = (color) => {
    setSelectedColor((prev) =>
      prev.includes(color) ? prev.filter((item) => item !== color) : [...prev, color]
    );
  };

  const handleTypeSelect = (type) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender((prev) =>
      prev.includes(gender) ? prev.filter((item) => item !== gender) : [...prev, gender]
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>

      {/* Refine By */}
      <div className="filter-group">
        <span>Refine By</span>
        <div className="refine-buttons">
          <button
            className={selectedRefine === 'Men' ? 'active' : ''}
            onClick={() => handleRefineSelect('Men')}
          >
            Men
          </button>
          <button
            className={selectedRefine === 'Casual' ? 'active' : ''}
            onClick={() => handleRefineSelect('Casual')}
          >
            Casual
          </button>
        </div>
      </div>

      {/* Size */}
      <div className="filter-group">
        <span>Size</span>
        <div className="size-buttons">
          {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
            <button
              key={size}
              className={selectedSize.includes(size) ? 'active' : ''}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="filter-group">
        <span>Color</span>
        <div className="color-options">
          {['blue', 'orange', 'black', 'green', 'yellow', 'brown'].map((color) => (
            <button
              key={color}
              className={selectedColor.includes(color) ? 'active' : ''}
              onClick={() => handleColorSelect(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Type (Checkboxes) */}
      <div className="filter-group">
        <span>Type</span>
        <div className="type-checkboxes">
          {[
            'Casual shoes',
            'Runners',
            'Hiking',
            'Sneaker',
            'Basketball',
            'Golf',
            'Outdoor',
          ].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={selectedType.includes(type)}
                onChange={() => handleTypeSelect(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Gender (Checkboxes) */}
      <div className="filter-group">
        <span>Gender</span>
        <div className="gender-checkboxes">
          {['Men', 'Women'].map((gender) => (
            <label key={gender}>
              <input
                type="checkbox"
                checked={selectedGender.includes(gender)}
                onChange={() => handleGenderSelect(gender)}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="filter-group">
        <span>Price</span>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={handlePriceChange}
        />
        <span>
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
    </div>
  );
};

export default Filters;
