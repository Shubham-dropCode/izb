import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slider from "react-slick";
import ArrowLeft from "../../assets/images/IZB/IZB Website Skin/LeftArrow.png";
import ArrowRight from "../../assets/images/IZB/IZB Website Skin/RightArrow.png";

const IndoBankingSlider = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowLeft}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          left: "25px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowRight}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          right: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      <Slide1 />

      
        <Slide2 />
    
    </Slider>
  );
};

export default IndoBankingSlider;
