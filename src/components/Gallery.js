import data from "../data/db.json";
import FilterButton from "./Filter";
import ImageDetailsModal from "./ImageDetailsModal";
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen-lg my-5">
        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4">
          <FilterButton
            category="All"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <FilterButton
            category="Architecture"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <FilterButton
            category="Nature"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <FilterButton
            category="People"
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 place-items-center">
          {/* Render images based on the selected category */}
          {data.images
            .filter((item) =>
              selectedCategory ? item.category === selectedCategory : true
            )
            .map((item, index) => {
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
