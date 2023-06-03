import data from "../data/db.json";
import ImageDetailsModal from "./ImageDetailsModal";
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen-lg my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 place-items-center">
          {data.images.map((item, index) => {
            return (
              <div
                className="h-full cursor-pointer"
                key={index}
                onClick={() => handleImageClick(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-xl transition-transform duration-500 scale-100 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <ImageDetailsModal
          selectedImage={selectedImage}
          closePopup={closePopup}
        />
      )}
    </>
  );
};

export default Gallery;
