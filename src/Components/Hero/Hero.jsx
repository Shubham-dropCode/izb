import React from "react";
import SavingAcc from "../../assets/images/IZB/SavingAcc.png";
import Credit from "../../assets/images/IZB/IZB Website Skin/Home_Page/Credit.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import ArrowLeft from "../../assets/images/IZB/IZB Website Skin/LeftArrow.png";
import ArrowRight from "../../assets/images/IZB/IZB Website Skin/RightArrow.png";
import "./Hero.css";

import BankingMenu from "./BankingMenu";
import HeroSlide1 from "./HeroSlide1";
import HeroSlide2 from "./HeroSlide2";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowLeft}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          left: "50px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={ArrowRight}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "50px",
          height: "50px",
          right: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const bankMenu = {
    position: "absolute",
    borderRadius: "12px",
    backgroundColor: "#FFF5E7",
    left: "8%",
    top: "90%",
  };
  const textColor = {
    color: "#9E1B1E",
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
        className="documents-area col-sm-10 col-md-10 col-lg-10 col-xl-10 shadow p-0 p-md-3 me-3"
        style={bankMenu}
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-xl-6 col-lg-6 px-0 px-md-3">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box p-0"
                style={{ borderRadius: "12px" }}
              >
                <div className="features-style2-tab-content-box-item">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 p-0">
                      <div
                        className="features-style2-text-box text-center p-2 mx-1 mb-0 text-white heading-box"
                        style={{ borderRadius: "13px 13px 0 0" }}
                      >
                        <Link to="/PersonalBanking">
                          <h4 className="text-white" style={textColor}>
                            Personal Banking
                          </h4>
                          <AiOutlineArrowRight
                            size={20}
                            className="ms-2 text-white position-absolute"
                            style={{ top: "32%", right: "1%" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-xl-6 col-md-6 w-50">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={SavingAcc}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3" style={textColor}>
                              Saving Account
                            </h5>
                          </div>
                          <div className="pt-3">
                            <div>
                              <Link to="/SavePlusAccount" style={textColor}>
                                <ArrowR />
                                Save Plus Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/PrivilageSavingAcc" style={textColor}>
                                <ArrowR />
                                Privilege Savings Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/TisungoSaving" style={textColor}>
                                <ArrowR />
                                Tisunge Savings Account
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="border"></span>
                      <div className="col-xl-6 col-md-6 w-50 ">
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
                            <h5 className="text-center pt-3" style={textColor}>
                              Credit
                            </h5>
                          </div>
                          <div className="py-3 BankingMenu">
                            <div>
                              <Link to="/IndoPersonalLoan" style={textColor}>
                                <ArrowR />
                                Personal Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/IndoHomeLoan" style={textColor}>
                                <ArrowR />
                                Indo Home Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/IndoVehicleLoan" style={textColor}>
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
                  <Link to="/PersonalBanking" style={textColor}>
                    Read More
                    <AiOutlineArrowRight className="ms-2" />
                  </Link>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-6 col-lg-6 px-0 px-md-3">
              {/*Start Single Documents Box*/}
              <div
                className="single-documents-box p-0 rounded-4 "
                style={{ borderRadius: "12px" }}
              >
                <div className="features-style2-tab-content-box-item">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 p-0">
                      <div
                        className="features-style2-text-box text-center p-2 mx-1 mb-0 text-white heading-box"
                        style={{ borderRadius: "13px 13px 0 0" }}
                      >
                        <Link to="/BusinessBanking">
                          <h4 className="text-white" style={textColor}>
                            Business Banking
                          </h4>
                          <AiOutlineArrowRight
                            size={20}
                            className="ms-2 text-white position-absolute"
                            style={{ top: "32%", right: "1%" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-xl-6 col-md-6 w-50">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={SavingAcc}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3" style={textColor}>
                              Current Account
                            </h5>
                          </div>
                          <div className="pt-3">
                            <div>
                              <Link to="/PrivilegeCurrentAcc" style={textColor}>
                                <ArrowR />
                                Privilege Current Account
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/ClassicCurrentAccount"
                                style={textColor}
                              >
                                <ArrowR />
                                Classic Current Account
                              </Link>
                            </div>
                            <div>
                              <Link to="/SMECurrentAcc" style={textColor}>
                                <ArrowR />
                                SME Current Account
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="border"></span>
                      <div className="col-xl-6 col-md-6 w-50">
                        <div className="features d-flex flex-column align-items-center">
                          <div className="text-box d-flex flex-column align-items-center">
                            <img
                              className="pt-3"
                              width={70}
                              src={Credit}
                              alt="Saving Account"
                            />
                            <h5 className="text-center pt-3" style={textColor}>
                              Credit
                            </h5>
                          </div>
                          <div className="py-3 BankingMenu">
                            <div>
                              <Link to="/TermLoan" style={textColor}>
                                <ArrowR />
                                Term Loan
                              </Link>
                            </div>
                            <div>
                              <Link to="/AutoFinance" style={textColor}>
                                <ArrowR />
                                Auto Finance
                              </Link>
                            </div>
                            <div>
                              <Link to="/AgroFinance" style={textColor}>
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
                  <Link to="/BusinessBanking" style={textColor}>
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
