import React, { useState } from 'react';
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const Filters = () => {
  const [selectedRefine, setSelectedRefine] = useState('Men');
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // States for toggle visibility
  const [isRefineOpen, setIsRefineOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

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

   // Toggling functions
   const toggleSection = (section) => {
    if (section === 'refine') {
      setIsRefineOpen(!isRefineOpen);
    }
    if (section === 'size') {
      setIsSizeOpen(!isSizeOpen);
    }
    if (section === 'color') {
      setIsColorOpen(!isColorOpen);
    }
    if (section === 'type') {
      setIsTypeOpen(!isTypeOpen);
    }
    if (section === 'gender') {
      setIsGenderOpen(!isGenderOpen);
    }
    if (section === 'price') {
      setIsPriceOpen(!isPriceOpen);
    }
  };

  return (
    <div className="filters">
      <h2 style={{fontFamily:"Rubik-bold"}}>Filters</h2>

      {/* Refine By */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('refine')}>
          <span>REFINE BY</span>
          <span className="arrow">{isRefineOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>

        {
          isRefineOpen && (
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
          )}
      </div>

      {/* Size */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('size')}>
          <span>SIZE</span>
          <span className="arrow">{isSizeOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>
        {
          isSizeOpen && ( 
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
          )
        }
      </div>

      {/* Color */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('color')}>
          <span>COLOR</span>
          <span className="arrow">{isColorOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>
        {
          isColorOpen && (
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
          )
        }
      </div>

      {/* Type (Checkboxes) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('type')}>
          <span>TYPE</span>
          <span className="arrow">{isTypeOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>
        {
          isTypeOpen && (
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
          )
        }
      </div>

      {/* Gender (Checkboxes) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('gender')}>
          <span>GENDER</span>
          <span className="arrow">{isGenderOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>
        {
          isGenderOpen && (
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
          )
        }
      </div>

      {/* Price (Range) */}
      <div className="filter-group">
        <div className="filter-header" onClick={() => toggleSection('price')}>
          <span>PRICE</span>
          <span className="arrow">{isPriceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        {isPriceOpen && (
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={handlePriceChange}
            />
            <span>
              ${priceRange[0]}  ${priceRange[1]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
