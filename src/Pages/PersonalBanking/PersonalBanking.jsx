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
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img1}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Save Plus A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1">
                  <AiOutlinePercentage className="me-2" />
                  Attractive interest
                </p>
                <p className="fs-small pt-1">
                  <AiFillCreditCard className="me-2" />
                  IZB contactless card
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMail className="me-2" />
                  SMS alert
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMobile className="me-2" />
                  Mobile banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img2}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1">
                  <AiOutlinePercentage className="me-2" />
                  Attractive interest
                </p>
                <p className="fs-small pt-1">
                  <AiFillCreditCard className="me-2" />
                  IZB contactless card
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMail className="me-2" />
                  SMS alert
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMobile className="me-2" />
                  Mobile banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img3}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Privilege Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1">
                  <AiOutlinePercentage className="me-2" />
                  Free E-statement facility
                </p>
                <p className="fs-small pt-1">
                  <AiFillCreditCard className="me-2" />
                  Cheque book facility
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMail className="me-2" />
                  Balance Enquiry on IZB ATM
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMobile className="me-2" />
                  Mobile recharge (Airtel/MTN/Zamtel)
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img4}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Tisunge Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1">
                  <AiOutlinePercentage className="me-2" />
                  Free E-statements
                </p>
                <p className="fs-small pt-1">
                  <AiFillCreditCard className="me-2" />
                  IZB contactless card
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMail className="me-2" />
                  No maintenance charge
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMobile className="me-2" />
                  Mobile banking & internet banking facilities
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img5}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Tonse Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p className="fs-small pt-1">
                  <AiOutlinePercentage className="me-2" />
                  Free E-statement facility
                </p>
                <p className="fs-small pt-1">
                  <AiFillCreditCard className="me-2" />
                  Cheque book facility
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMail className="me-2" />
                  Balance Enquiry on IZB ATM
                </p>
                <p className="fs-small pt-1">
                  <AiOutlineMobile className="me-2" />
                  Mobile recharge (Airtel/MTN/Zamtel)
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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

      <div className="text-center mt-5">
        <h2>Credit</h2>
      </div>
      <div className="container mt-4">
        <div className="row mt-1 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img6}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Indo Home Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Outright Purchase of a ready-made.
                </p>

                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm ps-4 pe-3">
                    Home Improvement – For repairs/
                    renovation/alteration/extension in the existing house/ﬂat.
                  </p>
                </span>

                <div className="d-flex justify-content-between me-4 mt-4 pt-3">
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img7}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Personal Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm ps-4 pe-3">
                    For meeting personal needs such as purchase of
                    furniture/equipment, meeting social obligations, repair of
                    houses etc.
                  </p>
                </span>
                <div className="d-flex justify-content-between me-4 mt-5 pt-4">
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
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img8}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Indo Vehicle Loan</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm ps-4 pe-3">
                    To ﬁnance purchase of second-hand vehicles not more than 5
                    years old for personal and business use from reputable
                    dealers.
                  </p>
                </span>

                <div className="d-flex justify-content-between me-4 mt-5 pt-4">
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

      <div className="container mb-5">
        <div className="d-flex justify-content-around mb-3 mt-5">
          <h2>Fixed Deposit</h2>
          <h2>Agency Banking</h2>
        </div>

        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img6}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">Bumi Fixed Deposit A/C</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm ps-4 pe-3">
                    Credit the principal amount to customers account.
                  </p>
                </span>
                <span>
                  <AiFillCaretRight className="position-absolute mt-2" />
                  <p className="fs-small pt-1 lh-sm ps-4 pe-3">
                    Interest credited upon opening/placement of the deposit
                  </p>
                </span>

                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Attractive rate intrest
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-0">
            <div className="row justify-content-sm-center">
              <div className="col-12 col-md-4 col-xl-4 p-0">
                <img
                  src={img7}
                  style={{ height: "280px", objectFit: "cover" }}
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div
                className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3"
                style={{ backgroundColor: "#9E1B1E" }}
              >
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Easy to use
                </p>
                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Time-Saving
                </p>
                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Secure
                </p>
                <p className="fs-small pt-1">
                  <AiFillCaretRight className="me-2" />
                  Convenient
                </p>
                <div className="d-flex justify-content-between me-4 mt-3">
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

export default PersonalBanking;
