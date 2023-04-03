import React from "react";
import bgimg from "../../assets/images/IZB/IZB Website Skin/Home_Page/Image_61.png";

const Slide2 = () => {
  const textColor = {
    color: "#9E1B1E",
  };
  return (
    <section className="overview-area" style={{ backgroundColor: "#FFF5E7" }}>
      <div className="container">
        <div className="row">
          <div className=" col-md-6 col-xl-6">
            <div className="overview-content-box-one">
              <img src={bgimg} style={{ backgroundColor: "#FFF5E7" }} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title">
                <h2 style={textColor}>Indo Net Banking</h2>
                <p className="my-4">
                  Manage your account conveniently through the Internet.
                  Up-to-the-second details of your account Access anytime, from
                  anywhere No queues to stand in, or turns to wait for.
                </p>
                <p className="mb-5">
                  View Account Balances Monitor cleared transactions, forex
                  rates inquiry vew, print and store electronic copies of your
                  statements
                </p>
                <h6 className="mb-4">
                  {" "}
                  <strong> Click Below for Indo Net Banking:</strong>
                </h6>
              </div>
              <div>
                <button
                  className="btn btn-danger w-25 text-white fs-6"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  Retail
                </button>
                <button
                  className="btn btn-danger w-25 text-white fs-6"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  Corporate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide2;
