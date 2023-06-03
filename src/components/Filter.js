import React from "react";

const FilterButton = ({ category, selectedCategory, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const isActive = selectedCategory === category;

  return (
    <button
      className={`bg-gray-400 border-solid border-2 border-black hover:bg-gray-800 py-2 px-4 rounded-lg ${
        isActive ? "bg-gray-800 text-white" : ""
      }`}
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export default FilterButton;
