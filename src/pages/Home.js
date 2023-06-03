import React, {useEffect} from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    document.title = "imagi-W | HomePage";
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Slider />
    </div>
  );
};

export default Home;
