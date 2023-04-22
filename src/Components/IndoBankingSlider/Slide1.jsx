import React from "react";
import IndoBanking from "../../assets/images/IZB/IZB Website Skin/Home_Page/IndoBanking1.png";
import img1 from "../../assets/images/IZB/IZB Website Skin/Home_Page/Icons/24-7.png";
import MobileStoreButton from "react-mobile-store-button";
import "../Hero/Hero.css"

const Slide1 = () => {
  const textColor = {
    color: "#9E1B1E",
  };
  const iosUrl =
    "https://apps.apple.com/us/app/izb-retail-banking/id1507943733";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.izb&hl=en&gl=US";

  return (
    <section className="overview-area" >
      <div className="container" style={{ backgroundColor: "#FFF5E7" }}>
        <div className="row p-5">
          <div className="col-xl-6 col-md-6 ">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title ps-5">
                <h2 style={textColor}>INDO MOBILE BANKING</h2>
                <div className="d-flex align-items-center gap-3 my-3">
                  <img src={img1} className="" width={50} alt="" />
                  <h5>Anytime, Anywhere.</h5>
                </div>
                <p>
                  Indo Mobile Banking gives you access to your account on your
                  mobile/tab device. Perform your banking tasks from the palm of
                  your hand, from anywhere and at anytime!
                </p>
                <h3 className="py-3" style={textColor}>
                  USSD Dial *232#
                </h3>
              </div>
              <div className="d-flex align-items-center" style={{paddingLeft:"35px"}}>
                <MobileStoreButton
                  store="android"
                  className=""
                  url={androidUrl}
                  width="9rem"
                  linkProps={{ Title: "Google Play" }}
                />
                <MobileStoreButton
                  className="pt-2"
                  store="ios"
                  width="8.5rem"
                  url={iosUrl}
                  linkProps={{ Title: "IOS Store" }}
                />
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-xl-6 position-relative">
            <div className="overview-content-box-one position-relative">
              <img
                src={IndoBanking}
                width="80%"
                className="position-absolute SliderImg"
                style={{ top:"-120px",left:"20%", }}
                alt=""
      
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide1;
