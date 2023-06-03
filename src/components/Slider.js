import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Slide"
        className="w-full lg:h-[500px] md:h-[400px] sm:h-[350px] object-fill"
      />
    </div>
  );
};

const SliderComponent = () => {
  const images = [
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1275&q=80",
    "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index} imageUrl={image} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
