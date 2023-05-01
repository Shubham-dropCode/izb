import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img9 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/9.png";
import img10 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/10.png";
import img11 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/11.png";
import img12 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/12.png";
import img13 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/13.png";
import img14 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/14.png";
import img15 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/15.png";
import img16 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/16.png";
import img17 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/17.png";
import img18 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/18.png";
import img19 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/19.png";
import assetsFinance from "../../assets/images/icon/asset-finance-img.png";
import foreignCurrency from "../../assets/images/icon/foreign-currency-img.png";
import overdraft from "../../assets/images/icon/overdraft-img.png";
import termLoan from "../../assets/images/icon/term-loan-img.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

import {
  AiOutlinePercentage,
  AiFillCreditCard,
  AiFillCaretRight,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BusinessBanking = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Breadcrumb Heading="Business Banking" img={BackgroundBrundcrumb} show={true} btnTxt="Apply Now" />
      <div className="container">
        <div className="text-center text my-4">
          <h2>Current Accounts</h2>
        </div>
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center h-100">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img9}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 h-100 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                    This is a business current account offering premier business
                    banking solutions and services designed specifically to meet
                    business operation needs including concessions on service
                    charges
                  </p>
                </span>
                <span className="d-flex justify-content-between align-items-center mt-2 h-50 me-4">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img10}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Classic Current Account</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img
                    src={foreignCurrency}
                    className="me-2"
                    width="15"
                    alt=""
                  />
                  Foreign exchange services
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={overdraft} className="me-2" width="15" alt="" />
                  Overdraft.
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={assetsFinance} className="me-2" width="15" alt="" />
                  Asset Financing.
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={termLoan} className="me-2" width="15" alt="" />
                  Term Loans.
                </p>
                <div className="d-flex justify-content-between me-4 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5 mt-4">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img11}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">SME Current Account</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img
                    src={foreignCurrency}
                    className="me-2"
                    width="15"
                    alt=""
                  />
                  Foreign exchange services
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={overdraft} className="me-2" width="15" alt="" />
                  Overdraft.
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={assetsFinance} className="me-2" width="15" alt="" />
                  Asset financing
                </p>
                <p className="fs-small pt-1 lh-sm pe-4">
                  <img src={termLoan} className="me-2" width="15" alt="" />
                  Term Loans.
                </p>
                <div className="d-flex justify-content-between me-4 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 pb-5">
        <div className="text-center text">
          <h2>Credit</h2>
        </div>
        <div className="row mt-4 gx-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img12}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">MSME Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  The MSME Sector is the corner stone of any great economy. We
                  firmly on board to act as a catalyst for the economic
                  development of Zambia
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 mt-2 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img13}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Term Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  Access our long and short-term loans designed to meet your
                  specific funding requirements.
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 mt-4 pt-1 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img14}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Auto Finance</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  Purchase of brand new and second hand utility vehicle. Age of
                  Second- hand vehicle not to exceed 5 years.
                  </p>
                </span>
              
                <div className="d-flex justify-content-between me-4 mt-4 pt-2 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img15}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Agro Finance</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  We understand the need for food security and the importance
                  agriculture plays into the country’s national development
                  goals. At Indo Zambia Bank we study, examine and analyse the
                  ﬁnancial aspects pertaining to farm business.
                  </p>
                </span>
                
                <div className="d-flex justify-content-between me-4 h-50 pb-3 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img16}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Equity Release</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  Looking for a quick finance solution and have immovable
                  assets. Our equity release is a solution to get financing
                  backed by your assets.
                  </p>
                </span>
             
                <div className="d-flex justify-content-between me-4 mt-4 h-50 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img17}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Business Finance</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  This is a specialised overdraft facility for business designed
                  for business for quick working capital solutions backed by
                  security.
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 h-50 mt-4 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img18}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Working Capital Finance</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  Improve working capital by unlocking funds caught in the
                  supply chain, and manage incoming and outgoing cash flows more
                  effectively with IZB overdraft facility.
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 h-50 mt-2 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-md-0 mt-sm-1">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img19}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Lease Rental Discounting </h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm px-3">
                  Need ﬁnancing against future receivables. We have your back.
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 h-75 mt-3 align-items-center">
                  <Link to="/PrivilegeCurrentAcc">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/PrivilegeCurrentAcc" className="text-white">
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

export default BusinessBanking;
