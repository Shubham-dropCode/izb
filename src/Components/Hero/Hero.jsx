import React from "react";
import SavingAcc from "../../assets/images/IZB/SavingAcc.png";
import Credit from "../../assets/images/IZB/IZB Website Skin/Home_Page/Credit.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import "./Hero.css";

import BankingMenu from "./BankingMenu";
import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const bankMenu = {
    position: "absolute",
    borderRadius: "12px",
    backgroundColor: "#FFF5E7",
    left: "8%",
    top: "90%",
  };

  return (
    <>
      <section className="position-relative">
        <Slider {...settings}>
          <div>
            <HeroSlide1 />
          </div>
          <div>
            <HeroSlide2 />
          </div>
        </Slider>
      </section>
      <section
        id="required"
        className="documents-area col-sm-10 col-md-10 col-lg-10 col-xl-10 py-3"
        style={bankMenu}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box p-1"
                style={{ borderRadius: "12px" }}
              >
                <div className="features-style2-tab-content-box-item">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 p-0">
                      <div className="features-style2-text-box text-center m-3 mb-0 text-white heading-box">
                        <h4 className="text-white">Personal Banking</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-xl-6 col-md-6">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={SavingAcc}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3">Saving Account</h5>
                          </div>
                          <div className="pt-3">
                            <div>
                              <Link to="/SavePlusAccount">
                              <ArrowR />
                              Save Plus Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/PrivilageSavingAcc">
                              <ArrowR />
                              Privilege Savings Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/TisungoSaving">
                              <ArrowR />
                              Tisunge Savings Account
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="border"></span>
                      <div className="col-xl-6 col-md-6 ">
                        <div
                          className="features d-flex flex-column align-items-center"
                          style={{ borderRadius: "12px" }}
                        >
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={Credit}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3">Credit</h5>
                          </div>
                          <div className="py-3">
                            <div>
                              <Link to="/IndoPersonalLoan">
                              <ArrowR />
                              Personal Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/IndoHomeLoan">
                              <ArrowR />
                              Indo Home Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/IndoVehicleLoan">
                              <ArrowR />
                              Vehicle Loan
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="Hborder"></span>
                <div className="d-flex align-items-center justify-content-end p-2">
                <Link to="/PersonalBanking">

                  Read More
                  <AiOutlineArrowRight className="ms-2" />
                </Link>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-6 col-lg-6">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box p-1 rounded-4"
                style={{ borderRadius: "12px" }}
              >
                <div className="features-style2-tab-content-box-item">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 p-0">
                      <div className="features-style2-text-box text-center m-3 mb-0 text-white heading-box">
                        <h4 className="text-white">Business Banking</h4>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-xl-6 col-md-6">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={SavingAcc}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3">
                              Current Account
                            </h5>
                          </div>
                          <div className="pt-3">
                            <div>
                              <Link to="/PrivilegeCurrentAcc">
                              <ArrowR />
                              Privilege Current Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/ClassicCurrentAccount">
                              <ArrowR />
                              Classic Current Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/SMECurrentAcc">

                              <ArrowR />
                              SME Current Account
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="border"></span>
                      <div className="col-xl-6 col-md-6 ">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={Credit}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3">Credit</h5>
                          </div>
                          <div className="py-3">
                            <div>
                              <Link to="/TermLoan">
                              <ArrowR />
                              Term Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/AutoFinance">
                              <ArrowR />
                              Auto Finance
                              </Link>
                            </div>
                            <div>
                              <Link to="/AgroFinance">
                              <ArrowR />
                              Argo Finance
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="Hborder"></span>
                <div className="d-flex align-items-center justify-content-end p-2">
                  <Link to="/BusinessBanking">

                  Read More
                  <AiOutlineArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
