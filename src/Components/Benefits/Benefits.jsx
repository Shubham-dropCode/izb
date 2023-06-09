import React from "react";
import percent from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/percentage.png";
import CC from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/credit-card.png";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import Device from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/devices.png";
import money from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/money.png";

const Benefits = () => {
  return (
    <section id="benefits" class="benefits-style2-area" className="choose-style1-area">
      <div className="container pt-4">
        <div className="text-center my-5">
          <h1 style={{ color: "#484848" }}>
            Our IZB Save Plus Account Benefits
          </h1>
          <p style={{ color: "#484848" }}>
            We help businesses and customers achieve more.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <ul className="row choose-style1__content">
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
              <div className="single-choose-style1">
                <div className="icon">
                  <img src={percent} alt="" />
                </div>
                <div className="text">
                  <h5>Attractive Intrest</h5>
                </div>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
              <div className="single-choose-style1">
                <div className="icon">
                  <img src={CC} alt="" />
                </div>
                <div className="text">
                  <h5>IZB contactless Card</h5>
                </div>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
              <div className="single-choose-style1">
                <div className="icon">
                  <img src={EmailAlert} alt="" />
                </div>
                <div className="text">
                  <h5>SMS alert</h5>
                </div>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
              <div className="single-choose-style1">
                <div className="icon">
                  <img src={Device} alt="" />
                </div>
                <div className="text">
                  <h5>Mobile and Internet Banking Facilities</h5>
                </div>
              </div>
            </li>
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
              <div className="single-choose-style1">
                <div className="icon">
                  <img src={money} alt="" />
                </div>
                <div className="text">
                  <h5>No Money Charges</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Benefits;
