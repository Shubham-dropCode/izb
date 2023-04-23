import React from "react";
import HeroBackground from "../../assets/images/IZB/IZB Website Skin/Home_Page/New_changes/Untitled-1.png";
import bannerPhones from "../../assets/images/IZB/IZB Website Skin/Home_Page/SliderPhone.png";
import MobileStoreButton from "react-mobile-store-button";
import "./Hero.css";

import BankingMenu from "./BankingMenu";

const HeroSlide1 = () => {
  const HeroBgimg = {
    // backgroundImage: `url(${HeroBackground})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  const iosUrl =
    "https://apps.apple.com/us/app/izb-retail-banking/id1507943733";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.izb&hl=en&gl=US";
  return (
    <div style={HeroBgimg} className="HeroSlider1">
      <div className="container sliderContent h-100">
        <div className="h-75 position-relative">
          <div className="d-flex">
            <div className="pt-4 col-12 col-md-4 col-lg-4 bannerPhone">
              <img src={bannerPhones} width={350} alt="" />
            </div>
            <div className="flex-wrap align-self-xl-center ms-4 col-12">
              <h2
                className="py-1 AccOpen"
                style={{ color: "#9E1B1E"}}
              >
                Account Opening
              </h2>
              <h1
                className="py-1"
                style={{ color: "#ECAA44", fontSize: "54px" }}
              >
                Made Easy!
              </h1>
              <p className="pb-4" style={{ fontWeight: "600" }}>
                Open and <span style={{ color: "#9E1B1E" }}> INDO EEZY </span>{" "}
                savings Account on your Phone.
              </p>
              <div className="d-flex align-items-center">
                <MobileStoreButton
                  store="android"
                  className="mt-5 mt-md-0"
                  url={androidUrl}
                  width={157}
                  linkProps={{ title: "Google Play" }}
                />
                <MobileStoreButton
                  className="pt-2 mt-5 mt-md-0"
                  store="ios"
                  width={150}
                  url={iosUrl}
                  linkProps={{ title: "IOS Store" }}
                />
              </div>
              <div className="pt-4 col-12 col-md-4 col-lg-4 AfterText">
              <img src={bannerPhones} width={350} alt="" />
            </div>
            </div>
          </div>
        </div>
        {/* <BankingMenu /> */}
      </div>
    </div>
  );
};

export default HeroSlide1;
