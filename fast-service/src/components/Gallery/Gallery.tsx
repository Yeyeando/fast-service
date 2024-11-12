import React from "react";
import imagesData from "./tables.json";
import "./gallery.css";

const ImageGallery: React.FC = () => {
  return (
    <div className="w-100">
      {/* Fila de imágenes */}
      <div className="row g-3">
        {imagesData.images.map((image) => (
          <div className="col-md-3" key={image.id}>
            <div className="card">
              <img src={image.url} alt={image.alt} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{image.id}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
