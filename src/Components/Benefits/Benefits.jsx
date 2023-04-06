import React from "react";
import percent from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/percentage.png";
import CC from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/credit-card.png";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import Device from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/devices.png";
import money from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/money.png";

const Benefits = () => {
  return (
    <section className="choose-style1-area">
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

      <section id="required" className="documents-area" style={{backgroundColor:"#FFF5E7"}}>
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>Savings A/c Required Documents</h2>
            <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div>
          </div>
          <div className="container">
            
          
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    IZB application form
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    Recommendation letter                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-3 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">Proof of rasidence</h3>
                </div>
                <ul>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">Minimum of k1000 per month to be maintained.</a>
                  </li>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">T-Pin</a>
                  </li>
                  
                </ul>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-3 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">Copy of NRC/Passport</h3>
                </div>
                <ul>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">Passport</a>
                  </li>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">Visa</a>
                  </li>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">Bank Statement (If any)</a>
                  </li>
                  <li>
                    <span className="icon-play-button-1" />
                    <a href="#">Company Proof</a>
                  </li>
                </ul>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-3 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                  Passport size photos
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    Color &amp; Passport Size
                    <br />
                    Photographs
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Benefits;
