import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
         <div
         key={index}
         className={`grid-item ${
           index === 0
             ? "rounded-top-left"
             : index === 1
             ? "rounded-top-right"
             : index === 2
             ? "rounded-bottom-left"
             : "rounded-bottom-right"
         }`}
       >
          <img src={image} alt={`Product ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
