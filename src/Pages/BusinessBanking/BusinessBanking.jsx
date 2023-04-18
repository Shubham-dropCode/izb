import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/1.png";
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
import img20 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/20.png";
import img21 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/21.jpg";

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
                  src={img9}
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
                  src={img10}
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
                  Foreign exchange services.
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  Overdraft.
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  Asset financing.
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Term loans.
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
                  src={img11}
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
                  Foreign exchange services.
                </p>
                <p>
                  <AiFillCreditCard className="me-2" />
                  Overdraft.
                </p>
                <p>
                  <AiOutlineMail className="me-2" />
                  Asset financing.
                </p>
                <p>
                  <AiOutlineMobile className="me-2" />
                  Term loans.
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
                  src={img12}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">MSME Loan</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  The MSME Sector is the corner stone of 
                  any great economy. We firmly on board 
                  to act as a catalyst for the economic 
                  development of Zambia
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
                  src={img13}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Term Loan</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Access our long and short-term loans 
                  designed to meet your specific funding 
                  requirements.
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
                  src={img14}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">IZB Auto Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Purchase of brand new and second hand 
                  utility vehicle. Age of Second- hand 
                  vehicle not to exceed 5 years.
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
                  src={img15}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">IZB Agro Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  We understand the need for food security
                  and the importance agriculture plays 
                  into the country’s national development 
                  goals. At Indo Zambia Bank we study, 
                  examine and analyse the ﬁnancial 
                  aspects pertaining to farm business.
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
                  src={img16}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Equity Release</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Looking for a quick finance solution and 
                  have immovable assets. Our equity 
                  release is a solution to get financing 
                  backed by your assets. 
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
                  src={img17}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Business Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  This is a specialised overdraft facility for 
                  business designed for business for 
                  quick working capital solutions backed 
                  by security.
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
                  src={img18}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Working Capital Finance</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Improve working capital by unlocking 
                  funds caught in the supply chain, and 
                  manage incoming and outgoing cash
                  flows more effectively with IZB 
                  overdraft facility.
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
                  src={img19}
                  style={{ height: "280px", objectFit: "cover" }}
                  className=""
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-8 col-xl-8 pe-0 text-white p-3">
                <h4 className="text-white">Lease Rental Discounting</h4>
                <h5 className="text text-white fs-4 my-2">Benefits</h5>
                <p>
                  <AiFillCaretRight className="me-2" />
                  Need ﬁnancing against future receivables. 
                  We have your back.
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
