import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/1.png";
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

const BusinessBanking = () => {
  return (
    <>
      <Breadcrumb Heading="Business Banking" img={BackgroundBrundcrumb} />
      <div className="container">
        <div className="text-center text my-4">
          <h2>Current Accounts</h2>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">IZB Privilege Current A/C</h4>
                <h5 className="text text-white fs-4 my-2">Purpose</h5>
                <p className="fs-small lh-sm pe-4">
                  <AiFillCaretRight className="me-2" />
                  This is a business current account offering premier business
                  banking solutions and services designed specifically to meet
                  business operation needs including concessions on service
                  charges
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

          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Classic Current A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/ClassicCurrentAccount">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/ClassicCurrentAccount" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">SME Current Account</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/SMECurrentAcc">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/SMECurrentAcc" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="container mt-5">
        <div className="text-center text">
          <h2>Credit</h2>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">MSME Loan</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/MSMELoan">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/MSMELoan" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Term Loan</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/TermLoan">
                    <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/TermLoan" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">IZB Auto Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/AutoFinance">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/AutoFinance" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">IZB Agro Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/AgroFinance">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link href="/AgroFinance" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Equity Release</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/EquityRelease">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/EquityRelease" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Business Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/BusinessFinance">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/BusinessFinance" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Working Capital Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/WorkingCapitalFinance">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/WorkingCapitalFinance" className="text-white">
                    Know more <AiOutlineArrowRight />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5" style={{ backgroundColor: "#9E1B1E" }}>
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
                <h4 className="text-white">Lease Rental Discounting</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
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
                  <Link to="/LeaseRentalDiscounting">
                  <button className="btn btn-light py-0">Apply now</button>
                  </Link>
                  <Link to="/LeaseRentalDiscounting" className="text-white">
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
