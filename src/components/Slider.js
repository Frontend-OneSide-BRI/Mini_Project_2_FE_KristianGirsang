import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Slide" className="w-full h-full object-cover" />
    </div>
  );
};

const SliderComponent = () => {
  const images = [
    "https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/pink-purple-sky-and-spring-nature-landscape-header.jpg",
    "https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/colorful-spring-flowers-sunset-nature-landscape-web-header.jpg",
    "https://www.freewebheaders.com/wp-content/gallery/beautiful-landscape/beautiful-spring-nature-and-mountain-art-work-landscape-header.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
