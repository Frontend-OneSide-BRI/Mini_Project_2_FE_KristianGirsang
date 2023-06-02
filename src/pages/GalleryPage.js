import React from "react";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      {/* Search functionality */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
