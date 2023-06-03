import React from "react";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import FilterButton from "../components/Filter";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      {/* <FilterButton /> */}
      {/* Search functionality */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
