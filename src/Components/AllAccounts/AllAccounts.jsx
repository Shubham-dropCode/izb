import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/1.png";
import Img2 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/2.png";
import Img3 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/3.png";
import Img4 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/4.png";
import Img5 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/5.png";
import Img6 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/6.png";
import Img7 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/7.png";
import Img8 from "../../assets/images/IZB/IZB Website Skin/Home_Page/New/8.png";
import AccountCard from "./AccountCard";

const AllAccounts = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          <h4>Personal Banking</h4>
          <a href="#" className="text-white rounded px-3 py-1" style={{ backgroundColor: "#9E1B1E" }}>Indo Net Banking</a>
        </div>
        <div className="row gap-4">
          <Slider {...settings}>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
          </Slider>
        </div>

        <div className="sec-title pt-5 text-center d-flex justify-content-between">
          <h4>Personal Banking</h4>
          <a href="#" className="text-white rounded px-3 py-1" style={{ backgroundColor: "#9E1B1E" }}>Indo Net Banking</a>
        </div>
        <div className="row gap-4">
          <Slider {...settings}>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
            <div>
              <AccountCard />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AllAccounts;
