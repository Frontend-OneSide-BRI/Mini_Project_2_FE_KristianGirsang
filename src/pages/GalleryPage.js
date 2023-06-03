import React, {useEffect} from "react";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";

const GalleryPage = () => {
  useEffect(() => {
    document.title = "imagi-W | Gallery";
  }, []);
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
