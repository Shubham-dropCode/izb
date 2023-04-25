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
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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
        </div>
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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
        </div>
        </div>
        <div className="container">
          <div className="row g-5 mt-1">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                  <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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
          </div>
        </div>
   

      <div className="text-center mb-3 mt-5">
        <h2>Credit</h2>
      </div>
      <div className="container">
        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
        </div>
        </div>
        <div className="container">
          <div className="row g-5 mt-1">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                  <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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
          </div>
        </div>
    

      <div className="container">
        <div className="d-flex justify-content-around mb-3 mt-5">
          <h2>Fixed Deposit</h2>
          <h2>Agency Banking</h2>
        </div>

        <div className="row mt-4 g-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
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
                <h4 className="text-white pe-2">IZB Privilege Current A/C</h4>
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
        </div>
      </div>

      <AllAcountsSection />
    </>
  );
};

export default PersonalBanking;
