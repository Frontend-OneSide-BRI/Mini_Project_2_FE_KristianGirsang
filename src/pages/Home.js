import React, { useEffect } from "react";
import SliderComponent from "../components/Slider";

const Home = () => {
  useEffect(() => {
    document.title = "imagi-W | HomePage";
  }, []);
  return (
    <>
      <SliderComponent />
    </>
  );
};

export default Home;
