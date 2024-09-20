import React, { useState } from 'react';
import GalleryData from '../Helper/GalleryData';
import '../Style/Gallery.css'; // Make sure to create this file for styling

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {GalleryData.map((card) => (
          <div
            key={card.id}
            className={`GALLERY-CARD GALLERY-CARD-${card.size}`}
            onClick={() => handleClick(card.imageUrl)}
          >
            <img src={card.imageUrl} alt={`Image ${card.id}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup" onClick={handleClose}>
          <div className="popup-content">
            <img src={selectedImage} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
