import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/1.png";
import img2 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/2.png";
import img3 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/3.png";
import img4 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/4.png";
import img5 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/5.png";
import img6 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/6.png";
import img7 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/7.png";
import img8 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/8.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";

import {
  AiOutlinePercentage,
  AiFillCreditCard,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineArrowRight,
} from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PersonalBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb Heading="Personal Banking" img={BackgroundBrundcrumb} />
      <div className="container">
        <div className="text-center mb-3 mt-5">
          <h2 style={{ color: "#484848" }}>Saving Accounts</h2>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img1}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">IZB Save Plus A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiOutlinePercentage className="me-2" />
                  Attractive interest
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  IZB contactless Card
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  SMS Alert
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Mobile Banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/SavePlusAccount">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/SavePlusAccount" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 me-5" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img2}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiOutlinePercentage className="me-2" />
                  Attractive interest
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  IZB contactless visa Card
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  SMS Alert
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Mobile Banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/ClassicSavingAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/ClassicSavingAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img3}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Privelage Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiOutlinePercentage className="me-2" />
                  Free E-statement facility
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  Cheque book facility
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  Balance inquiry through on IZB ATM
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Mobile recharge(Airtel,MTL,Zamtel)
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/PrivilageSavingAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilageSavingAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 me-5" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img4}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Tisunge Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiOutlinePercentage className="me-2" />
                  Free E-statement facility
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  IZB contactless Card
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  No maintanance charge
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Mobile Banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/TisungoSaving">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/TisungoSaving" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img5}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Tonse Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiOutlinePercentage className="me-2" />
                  Free E-statement facility
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  Cheque book facility
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  Balance inquiry through on IZB ATM
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Mobile recharge(Airtel,MTL,Zamtel)
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/TonseSavingAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/TonseSavingAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-3 mt-5">
        <h2>Credit</h2>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img6}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Indo Home Loan</h4>
                <h5 className="text text-white fs-4 my-2">purpose</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Outright Purchase of a ready-made.
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Home Improvement - For repairs/
                  renovation/alteration/extension in the existing house/ﬂat.
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/IndoHomeLoan">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/IndoHomeLoan" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 me-5" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img7}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Personal Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  For meeting personal needs such as purchase of
                  furniture/equipment, meeting social obligations, repair of
                  houses etc.
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/IndoPersonalLoan">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/IndoPersonalLoan" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img8}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Indo Vehicle Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  To ﬁnance purchase of second-hand vehicles not more than 5
                  years old for personal and business use from reputable
                  dealers.
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/IndoVehicleLoan">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/IndoVehicleLoan" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-around mb-3 mt-5">
          <h2>Fixed Deposit</h2>
          <h2>Agency Banking</h2>
        </div>

        <div className="d-flex justify-content-between pb-5">
          <div className="col-5 offset-1" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img6}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Bumi Fixed Deposit A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Credit the principal amount to customers account.
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Interest credited upon opening/placement of the deposit
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Attractive intrest rate
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/BhumiFixedDepositAccount">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/BhumiFixedDepositAccount" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 me-5" style={{ backgroundColor: "#9E1B1E" }}>
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img7}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Indo Fast Serve</h4>
                <h5 className="text text-white fs-4 my-2">benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Easy to use
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Time saving
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Secure
                </p>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Convinient
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
                  <Link to="/IndoFastServe">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/IndoFastServe" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AllAcountsSection />
    </>
  );
};

export default PersonalBanking;
