import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slider from "react-slick";

const IndoBankingSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Slide1 />
        </div>
        <div>
          <Slide2 />
        </div>
      </Slider>
    </div>
  );
};

export default IndoBankingSlider;
