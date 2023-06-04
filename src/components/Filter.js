import React from "react";

const FilterButton = ({ category, selectedCategory, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const isActive =
    selectedCategory === category ||
    (category === "All" && selectedCategory === null);

  return (
    <button
      className={`font-bold text-sm py-2 px-5 md:text-md md:py-2 md:px-5  text-gray-800  hover:bg-gray-800 border-2 border-solid border-gray-500 hover:text-white lg:py-4 lg:px-8 lg:text-xl rounded-lg  ${
        isActive ? "text-white bg-gray-800" : ""
      }`}
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export default FilterButton;
