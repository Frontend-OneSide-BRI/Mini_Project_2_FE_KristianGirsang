import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/Slider";

const Home = () => {
  useEffect(() => {
    document.title = "imagi-W | HomePage";
  }, []);
  return (
    <div>
      <Navbar />
      <SliderComponent />
      {/* <div className="font-extrabold text-7xl mt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div> */}
    </div>
  );
};

export default Home;
