import React from "react";
import imagesData from "./tables.json";
import "./gallery.css";

const ImageGallery: React.FC = () => {
  return (
    <div className="grid-container">
      {imagesData.images.map((image) => (
        <div className="grid-item" key={image.id}>
          <div className="image-container">
            <img src={image.url} alt={image.alt} className="img-fluid" />
            <div className="overlay">
              <span className="image-id">{image.id}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
