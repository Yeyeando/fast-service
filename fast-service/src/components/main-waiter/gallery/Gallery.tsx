import React from "react";
import imagesData from "./tables.json";
import "./gallery.css";
import { useNavigate } from "react-router-dom";

interface galleryProps {
  nextRoute?: String;
}
const ImageGallery: React.FC<galleryProps> = ({ nextRoute = "/" }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (nextRoute) {
      navigate(nextRoute);
    }
  };
  return (
    <div className="grid-container">
      {imagesData.images.map((image) => (
        <div className="grid-item" key={image.id} onClick={handleNext}>
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
