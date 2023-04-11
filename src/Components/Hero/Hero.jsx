import React from "react";
import HeroBackground from "../../assets/images/IZB/IZB Website Skin/Home_Page/New_changes/Untitled-1.png";
import bannerPhones from "../../assets/images/IZB/IZB Website Skin/Home_Page/SliderPhone.png";
import MobileStoreButton from 'react-mobile-store-button';
import "./Hero.css";

import BankingMenu from "./BankingMenu";

const  Hero = () => {
  const HeroBgimg = {
    backgroundImage: `url(${HeroBackground})`,
    height: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  const iosUrl = "https://apps.apple.com/us/app/izb-retail-banking/id1507943733"
  const androidUrl = "https://play.google.com/store/apps/details?id=com.izb&hl=en&gl=US"
  return (
    <div style={HeroBgimg}>
      <div className="auto-container h-100">
        <div className="h-75 position-relative ">
          <div className="d-flex ">
            <div className="pt-4">
              <img src={bannerPhones} width={350} alt="" />
            </div>
            <div className="flex-column flex-wrap align-self-xl-center ms-4">
              <h2 className="py-1">Account Opening</h2>
              <h1 className="py-1">Made Easy!</h1>
              <p className="pb-4">
                Open and INDO EEZY savings Account on your Phone.
              </p>
              <div className="d-flex align-items-center">
                 <MobileStoreButton
                store="android"
                className=""
                url={androidUrl}
                width="10.5rem"
                linkProps={{Title:"Google Play"}}
                />
                <MobileStoreButton
                className="pt-2"
                store="ios"
                width="10rem"
                url={iosUrl}
                linkProps={{Title:"IOS Store"}}
                />
              </div>
            </div>
          </div>
          {/* <div className="btn-box">
            <div className="get-app-box">
              <ul className="clearfix">
                <li>
                  <a className="style2" href="#">
                    <div className="text">
                      <h4> Open and Account</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="style2" href="#">
                    <div className="text">
                      <h4>Why bank with us</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <BankingMenu />
      </div>
    </div>
  );
};

export default Hero;
