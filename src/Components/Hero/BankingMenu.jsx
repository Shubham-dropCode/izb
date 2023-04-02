import React from "react";
import SavingAcc from "../../assets/images/IZB/SavingAcc.png";
import Credit from "../../assets/images/IZB/credit.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";

const BankingMenu = () => {
  return (
    <section
      id="required"
      className=" position-absolute documents-area col-sm-10 col-md-10 col-lg-10 col-xl-10 py-3"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            {/*Start Single Documents Box*/}
            <div className="single-documents-box p-1 rounded-4">
              <div className="features-style2-tab-content-box-item">
                <div className="row">
                  <div className="col-xl-12 col-md-12 p-0">
                    <div className="features-style2-text-box text-center text-white heading-box">
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
                    <span className="border"></span>
                    <div className="col-xl-6 col-md-6 ">
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
                        <div className="py-3">
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
            <div className="single-documents-box p-1 rounded-4">
              <div className="features-style2-tab-content-box-item">
                <div className="row">
                  <div className="col-xl-12 col-md-12 p-0">
                    <div className="features-style2-text-box text-center text-white heading-box">
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
                            Tisunge Savings
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
                            src={SavingAcc}
                            alt="Saving Account"
                          />
                          <h5 className="text-center pt-3">Saving Account</h5>
                        </div>
                        <div className="py-3">
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
