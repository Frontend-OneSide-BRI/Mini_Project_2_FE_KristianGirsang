import React, { useEffect } from "react";
import SliderComponent from "../components/Slider";
import HomeContent from "../components/HomeContent";

const Home = () => {
  useEffect(() => {
    document.title = "imagi-W | HomePage";
  }, []);
  return (
    <>
      <SliderComponent />
      <HomeContent />
    </>
  );
};

export default Home;
