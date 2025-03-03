import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="P-image-gallery">
      {/* Large Main Image (for both desktop & mobile) */}
      <div className="P-main-image">
        <img src={selectedImage} alt="Main Product" />
      </div>

      {/* Desktop: Grid Thumbnails | Mobile: Carousel */}
      <div className="P-thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Mobile: Navigation Dots */}
      <div className="P-navigation-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${selectedImage === images[index] ? "active-dot" : ""}`}
            onClick={() => setSelectedImage(images[index])}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
