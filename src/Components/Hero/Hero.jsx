import React from "react";
import HeroBackground from "../../assets/images/IZB/HeroBackground.png";
import SavingAcc from "../../assets/images/IZB/SavingAcc.png";
import Credit from "../../assets/images/IZB/credit.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";

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
        {/* <div
          className="position-absolute d-flex flex-column clearfix col-sm-12 col-md-12 col-lg-12 col-xl-12"
          style={{
            width: "1150px",
            height: "350px",
            top: "80%",
            backgroundColor: "#f7f1eb",
          }}
        >
          <div
            className="tab-content-box-item tab-content-box-item-active"
            id="tabid11"
          >
            <div className="col-12">
              
              
            </div>
          </div>
          
        </div> */}
        <section id="required" className="documents-area position-absolute col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                {/*Start Single Documents Box*/}
                <div className="single-documents-box">
                  <div className="features-style2-tab-content-box-item">
                    <div className="row">
                      <div className="col-xl-12 col-md-12">
                        <div className="features-style2-text-box text-center">
                          Persnal Banking
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="col-xl-6 col-md-6 border border-primary border-top-0 border-start-0">
                          <div className="features d-flex flex-column align-items-center">
                            <div className="text-box d-flex flex-column align-items-center">
                              <img
                                className="pt-3"
                                width={70}
                                src={SavingAcc}
                                alt="Saving Account"
                              />
                              <h4 className="text-center pt-3">
                                Saving Account
                              </h4>
                            </div>
                            <div className="pt-3">
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-md-6 border border-primary border-top-0 border-end-0 border-start-0">
                          <div className="features d-flex flex-column align-items-center">
                            <div className="text-box d-flex flex-column align-items-center">
                              <img
                                className="pt-3"
                                width={70}
                                src={SavingAcc}
                                alt="Saving Account"
                              />
                              <h4 className="text-center pt-3">
                                Saving Account
                              </h4>
                            </div>
                            <div className="pt-3">
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                              <div>
                                <ArrowR />
                                Saving account
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Documents Box*/}
              </div>
              {/*  */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
