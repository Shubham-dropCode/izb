import React from "react";
import PhoneIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/PhoneIcon.png";
import LaptopIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/LaptopIcon.png";
import CCIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/CCIcon.png";
import { Link } from "react-router-dom";

const DoMore = () => {
  const sectionStyle = {
    top: "100%",
  };
  const textColor = {
    color: "#949292",
  };
  return (
    <section
      style={sectionStyle}
      className="choose-style1-area pt-5 mt-5 mt-md-0 mt-xl-0 pt-md-0 pt-xl-0"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: "#484848" }}>
            <strong>DO MORE</strong> ON THE GO
          </h1>
          <p style={{ color: "#767676" }}>
            Enjoy Banking From Anywhere at Anytime With Our Convenient
            E-services.
          </p>
        </div>
<<<<<<< HEAD
        <div className="row choose-style1__content gap-5 justify-content-center">
=======
        <div className="row choose-style1__content justify-content-between">
>>>>>>> 8294967e7a965cdc0025e34367896d8c1d736961
          {/*Start Single Choose Style1*/}
          <div
            className="col-12 col-xl-3 col-lg-3 single-choose-style1-colum text-center border"
            style={{
              borderRadius: "12px",
              backgroundColor: "#FDFDFD",
              // width: "30%",
            }}
          >
            <div className="single-choose-style1">
              <div className="icon">
                <img src={PhoneIcon} />
              </div>
              <div className="text">
                <h3 style={{ color: "#9E1B1E" }}>Mobile Banking</h3>
                <p style={textColor}>
                  Learn more about how you can bank from anywhere across the
                  world.
                </p>
              </div>
              <div
                className="button-box text-center mt-4"
                style={{ color: "#9E1B1E" }}
              >
                <Link to="/MobileBanking">
                  <button
                    className="btn-one shadow mt-5 mb-4 mb-md-0 mb-lg-0 mb-xl-0 bg-white rounded"
                    type="submit"
                  >
                    <span className="txt">Download</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*End Single Choose Style1*/}
          {/*Start Single Choose Style1*/}
          <div
            className="col-12 col-xl-3 col-lg-3 single-choose-style1-colum text-center border"
            style={{
              borderRadius: "12px",
              backgroundColor: "#FDFDFD",
              // width: "30%",
            }}
          >
            <div className="single-choose-style1">
              <div className="icon">
                <img src={CCIcon} alt="" />
              </div>
              <div className="text">
                <h3 style={{ color: "#9E1B1E" }}>Contactless Payment</h3>
                <p style={textColor}>
                  Tap and pay the new way get your contactless card today.
                </p>
              </div>
              <div
                className="button-box text-center"
                style={{ color: "#9E1B1E", marginTop: "3rem" }}
              >
                <Link to="/ContactlessCard">
<<<<<<< HEAD
                <button
                  className="btn-one shadow mb-3 bg-white rounded"
                  type="submit"
=======
                  <button
                    className="btn-one shadow mb-5 bg-white rounded"
                    type="submit"
>>>>>>> 8294967e7a965cdc0025e34367896d8c1d736961
                  >
                    <span className="txt"> Know More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*End Single Choose Style1*/}
          {/*Start Single Choose Style1*/}
          <div
            className="col-12 col-xl-3 col-lg-3 single-choose-style1-colum text-center border"
            style={{
              borderRadius: "12px",
              backgroundColor: "#FDFDFD",
              // width: "30%",
            }}
          >
            <div className="single-choose-style1">
              <div className="icon">
                <img src={LaptopIcon} alt="" />
              </div>
              <div className="text">
                <h3 style={{ color: "#9E1B1E" }}>Net Banking</h3>
                <p style={textColor}>
                  Manage your account conveniently through the Internet.
                </p>
              </div>
              <div
                className="button-box text-center"
                style={{ color: "#9E1B1E", marginTop: "3rem" }}
              >
                <Link to="/NetBanking">
                  <button
                    className="btn-one shadow my-4 bg-white rounded"
                    type="submit"
                  >
                    <span className="txt"> Register</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*End Single Choose Style1*/}
        </div>
      </div>
    </section>
  );
};

export default DoMore;
