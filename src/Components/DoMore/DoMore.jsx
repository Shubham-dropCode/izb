import React from "react";
import PhoneIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/PhoneIcon.png";
import LaptopIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/LaptopIcon.png";
import CCIcon from "../../assets/images/IZB/IZB Website Skin/Home_Page/CCIcon.png";

const DoMore = () => {
  const sectionStyle = {
    top: "100%",
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
          <p style={{ color: "#484848" }}>
            Enjoy Banking From Anywhere at Anytime With Our Convenient
            E-services.
          </p>
        </div>
        <ul className="row choose-style1__content">
          {/*Start Single Choose Style1*/}
          <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
            <div className="single-choose-style1">
              <div className="icon">
                <img src={PhoneIcon} />
              </div>
              <div className="text">
                <h3>Mobile Banking</h3>
                <p>
                  Learn more about how you can bank from anywhere across the
                  world.
                </p>
              </div>
              <div
                className="button-box text-center mt-4"
                style={{ color: "#9E1B1E" }}
              >
                <button
                  className="btn-one shadow my-3 bg-white rounded"
                  type="submit"
                >
                  <span className="txt"> Download Now</span>
                </button>
              </div>
            </div>
          </li>
          {/*End Single Choose Style1*/}
          {/*Start Single Choose Style1*/}
          <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
            <div className="single-choose-style1">
              <div className="icon">
                <img src={CCIcon} alt="" />
              </div>
              <div className="text">
                <h3>Contactless Payment</h3>
                <p>Tap and pay the new way get your contactless card today.</p>
              </div>
              <div
                className="button-box text-center mt-4"
                style={{ color: "#9E1B1E" }}
              >
                <button
                  className="btn-one shadow my-3 bg-white rounded"
                  type="submit"
                >
                  <span className="txt"> Know More</span>
                </button>
              </div>
            </div>
          </li>
          {/*End Single Choose Style1*/}
          {/*Start Single Choose Style1*/}
          <li className="col-xl-4 col-lg-4 single-choose-style1-colum text-center">
            <div className="single-choose-style1">
              <div className="icon">
                <img src={LaptopIcon} alt="" />
              </div>
              <div className="text">
                <h3>Net Banking</h3>
                <p>Manage your account conveniently through the Internet.</p>
              </div>
              <div
                className="button-box text-center mt-4"
                style={{ color: "#9E1B1E" }}
              >
                <button
                  className="btn-one shadow my-3 bg-white rounded"
                  type="submit"
                >
                  <span className="txt"> Register</span>
                </button>
              </div>
            </div>
          </li>
          {/*End Single Choose Style1*/}
        </ul>
      </div>
    </section>
  );
};

export default DoMore;
