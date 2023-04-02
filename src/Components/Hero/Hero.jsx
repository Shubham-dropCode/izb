import React from "react";
import HeroBackground from "../../assets/images/IZB/HeroBackground.png";
import "./Hero.css";

import BankingMenu from "./BankingMenu";

const Hero = () => {
  const HeroBgimg = {
    backgroundImage: `url(${HeroBackground})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  return (
    <div style={HeroBgimg}>
      <div className="auto-container h-100">
        <div className="d-flex flex-column h-75 justify-content-center position-relative ">
          <div>
            <h3 className="text-white py-1">Hello, Welcome to</h3>
            <h2 className="text-white py-1">INDO ZAMBIA BANK</h2>
            <p className="text-white pb-4">
              Boost you growth a supportive partner. Open an account today.
            </p>
          </div>
          <div className="btn-box">
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
          </div>
        </div>
       <BankingMenu/>
      </div>
    </div>
  );
};

export default Hero;
