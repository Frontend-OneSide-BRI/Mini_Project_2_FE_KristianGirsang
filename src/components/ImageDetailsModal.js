import data from "../data/db.json";
import { useState } from "react";

const ImageDetailsModal = ({ selectedImage, closePopup }) => {
  const [expanded, setExpanded] = useState(false);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-75"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <div className="max-w-screen-sm mx-4 p-6 rounded-lg bg-white">
        <h1 className="flex justify-center items-center mb-2 text-lg font-bold">
          Image Details
        </h1>
        <img
          src={selectedImage}
          alt="Selected Image"
          className="w-full h-auto rounded-lg"
        />
        <h1 className="mt-4 font-semibold">
          {data.images.find((item) => item.url === selectedImage)?.name}
        </h1>

        {data.images.find((item) => item.url === selectedImage)
          ?.description && (
          <div>
            <p
              className={`mt-4 text-justify ${
                expanded ? "max-h-full" : "truncate overflow-hidden"
              }`}
            >
              {
                data.images.find((item) => item.url === selectedImage)
                  ?.description
              }
            </p>
            {data.images.find((item) => item.url === selectedImage)?.description
              .length > 16 && (
              <button
                className="mt-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={handleToggleExpanded}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}

        <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageDetailsModal;
