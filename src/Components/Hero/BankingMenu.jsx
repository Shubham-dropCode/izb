import React from "react";
import SavingAcc from "../../assets/images/IZB/SavingAcc.png";
import Credit from "../../assets/images/IZB/IZB Website Skin/Home_Page/Credit.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";

const BankingMenu = () => {
  return (
    <section
      id="required"
      className=" position-absolute documents-area col-sm-10 col-md-10 col-lg-10 col-xl-10 py-3"
      style={{ borderRadius: "12px", backgroundColor: "#FFF5E7" }}
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
                            <ArrowR />
                            Save Plus Account
                          </div>
                          <div>
                            <ArrowR />
                            Privilege Savings Account
                          </div>
                          <div>
                            <ArrowR />
                            Tisunge Savings Account
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
                            <ArrowR />
                            Personal Loan
                          </div>
                          <div>
                            <ArrowR />
                            Indo Home Loan
                          </div>
                          <div>
                            <ArrowR />
                            Vehicle Loan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="Hborder"></span>
              
              <div className="d-flex align-items-center justify-content-end p-2">
                Read More
                <AiOutlineArrowRight className="ms-4" />
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
                          <h5 className="text-center pt-3">Current Account</h5>
                        </div>
                        <div className="pt-3">
                          <div>
                            <ArrowR />
                            Privilege Current Account
                          </div>
                          <div>
                            <ArrowR />
                            Classic Current Account
                          </div>
                          <div>
                            <ArrowR />
                            SME Current Account
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
                            <ArrowR />
                            Term Loan
                          </div>
                          <div>
                            <ArrowR />
                            Auto Finance
                          </div>
                          <div>
                            <ArrowR />
                            Argo Finance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="Hborder"></span>
              <div className="d-flex align-items-center justify-content-end p-2">
                Read More
                <AiOutlineArrowRight className="ms-4" />
              </div>
            </div>
            {/*End Single Documents Box*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingMenu;
