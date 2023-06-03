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
      className={`font-bold text-xl text-gray-800  hover:bg-gray-800 border-2 border-solid border-gray-500 hover:text-white py-4 px-8 rounded-lg ${
        isActive ? "text-white bg-gray-800" : ""
      }`}
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export default FilterButton;
