import React from "react";
import sliderImg from "../../assets/images/IZB/IZB Website Skin/Home_Page/banner.png";
import { FiCheckCircle } from "react-icons/fi";
import fastserve from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/indo-fast-serve_png.png";
import BankingMenu from "./BankingMenu";
import "./Hero.css";


const HeroSlide2 = () => {
  const HeroBgimg = {
    // backgroundImage: `url(${sliderImg})`,
    height: "75vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  return (
    <div style={HeroBgimg} className="HeroSlider2">
      <div className="auto-container sliderContent h-100">
        <div className="h-75 position-relative ">
          <div className="d-flex justify-content-end align-items-center h-100">
            <div className="pt-4">
              <img src={fastserve} width={300} alt="" />
              <h6
                className="text-center mt-3"
                style={{ backgroundColor: "#FFB200" }}
              >
                THE BANK THAT FOLLOWS YOU
              </h6>
            </div>
            <span className="border h-50 mx-3"></span>
            <div className="flex-column flex-wrap align-self-xl-center">
              <h5 className="py-1 text-white">
                Transact at an Indo Fast Serve <br /> Agent today.
              </h5>
              <p className="pb-1 text-white">
                <FiCheckCircle size={20} color="#FFC700" className="pe-1" />
                Open and INDO EEZY savings <br />
                Account on your Phone.
              </p>
              <p className="pb-1 text-white">
                <FiCheckCircle size={20} color="#FFC700" className="pe-1" />
                You will receive a One Time Pin (OTP) <br /> to confirm
                transactions{" "}
              </p>
              <p className="pb-1 text-white">
                <FiCheckCircle size={20} color="#FFC700" className="pe-1" />
                Once a transaction is completed, you’ll <br /> receive an SMS{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <BankingMenu /> */}
      </div>
    </div>
  );
};

export default HeroSlide2;
