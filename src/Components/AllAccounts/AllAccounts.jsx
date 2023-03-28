import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Allaccount from "../../assets/images/IZB/PersonalLoan.jpg";

const AllAccounts = () => {
  const img = {
    backgroundImage: `url(${AllAccounts})`
  }
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
    <section className="wealth-secure-area">
      <div className="container">
        <div className="sec-title text-center d-flex justify-content-between">
          <h4>Personal Banking</h4>
          <button>heelo</button>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Slider {...settings}>
              <div style={img}>
                <div className="">

                  <h4>IZB Save Plus Account</h4>
                  <p>
                    Access our long and short-term loans designed to meet your
                    specific funding requirements.
                  </p>
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAccounts;
