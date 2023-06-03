import React, { useState } from "react";
import data from "../data/db.json";
import ImageDetailsModal from "./ImageDetailsModal";
import ViewMore from "./ViewMore";

const HomeContent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center m-4 py-[100px] border-2 border-gray-800 rounded-lg">
        <h1 className="font-bold text-5xl my-2 text-gray-800">
          Welcome to
          <span className="font-extrabold text-5xl text-blue-600"> imagi</span>-
          <span className="font-extrabold text-5xl text-red-600">W</span> a.k.a
          Imagination World
        </h1>
        <h3 className="font-extrabold text-4xl text-gary-800 my-2 p-4">
          We will show you the beauty of the world that you want to see.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center m-4 py-4 border-2 border-gray-800 rounded-lg">
        <h1 className="font-extrabold text-4xl text-gary-800 my-2 pb-4">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 place-items-center">
          {data.images.slice(0, 9).map((item, index) => (
            <div
              className="h-full cursor-pointer"
              key={index}
              onClick={() => handleImageClick}
            >
              <img
                src={item.url}
                alt={item.name}
                className="h-full w-full object-cover rounded-xl transition-transform duration-500 scale-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
          <ViewMore />
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

export default HomeContent;
