import React from "react";
import HeroBackground from "../../assets/images/IZB/HeroBackground.png";

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
      <div className="auto-container">
        <div className="d-flex flex-column justify-center">
          <h3 className="text-white">Hello, Welcome to</h3>
          <h2 className="text-white">INDO ZAMBIA BANK</h2>
          <p className="text-white">
            Boost you growth a supportive partner. Open an account today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
