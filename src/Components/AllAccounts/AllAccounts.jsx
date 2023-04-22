import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccountCard from "./AccountCard";
import SavePlusCard from "../AllAccounts/Personal/SavePlusCard";
import PrivilegeCard from "../AllAccounts/Personal/PrivilegeCard";
import TisungeSavings from "./Personal/TisungeSavings";
import PersonalLoanCard from "./Personal/PersonalLoanCard";
import IzbPrivilegeCurrentCard from "./Business/izbPrivilegeCurrentCard";
import ClassicCurrentCard from "./Business/classicCurrentCard";
import SMECurrentCard from "./Business/SMECurrentCard";
import TermLoanCard from "./Business/TermLoanCard";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ArrowL from "../../assets/images/IZB/IZB Website Skin/ArrowL.png";
import ArrowR from "../../assets/images/IZB/IZB Website Skin/ArrowR.png";
import { BsLock } from "react-icons/bs";
import "../Hero/Hero.css"

const AllAccounts = () => {
  const SliderArrow = {
    
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowR}
        className={"SliderArrow " + className }
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          right: "-50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowL}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          left: "-70px",
        }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className="wealth-secure-area mb-5"
      style={{ backgroundColor: "#FFF5E7" }}
    >
      <div className="container">
        <div className="sec-title text-center d-flex justify-content-between">
          <h4 style={{ color: "#9E1B1E" }}>Personal Banking</h4>

          <Link to="/PersonalBanking">
            <a
              href="#"
              className="text-white rounded px-3 py-1 me-4"
              style={{ backgroundColor: "#9E1B1E" }}
            >
              See More <AiOutlineArrowRight size={21} className="me-1 pb-1" />
            </a>
          </Link>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div>
              <SavePlusCard />
            </div>
            <div>
              <PrivilegeCard />
            </div>
            <div>
              <TisungeSavings />
            </div>
            <div>
              <PersonalLoanCard />
            </div>
            <div>
              <PersonalLoanCard />
            </div>
          </Slider>
        </div>

        <div className="sec-title pt-5 text-center d-flex justify-content-between">
          <h4 style={{ color: "#9E1B1E" }}>Business Banking</h4>
          <Link to="/BusinessBanking">
            {" "}
            <a
              href="#"
              className="text-white rounded px-3 py-1 me-4"
              style={{ backgroundColor: "#9E1B1E" }}
            >
              See More <AiOutlineArrowRight size={21} className="me-1 pb-1" />
            </a>
          </Link>
        </div>
        <div className="row gap-4">
          <Slider {...settings}>
            <div>
              <IzbPrivilegeCurrentCard />
            </div>
            <div>
              <ClassicCurrentCard />
            </div>
            <div>
              <SMECurrentCard />
            </div>
            <div>
              <TermLoanCard />
            </div>
            <div>
              <SavePlusCard />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AllAccounts;
