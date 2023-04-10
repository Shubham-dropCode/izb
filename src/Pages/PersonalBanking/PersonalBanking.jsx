import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/1.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";

import {
  AiOutlinePercentage,
  AiFillCreditCard,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineArrowRight,
} from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

const PersonalBanking = () => {
  return (
    <>
      <Breadcrumb Heading="Personal Banking" img={BackgroundBrundcrumb} />
      <div className="container">
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">Benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around my-3">
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around my-3">
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
        <div className="d-flex justify-content-around">
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around my-3">
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container">
        <div className="d-flex justify-content-around mb-3 mt-5">

      <h2>Fixed Deposit</h2>
      <h2>Fixed Deposit</h2>
        </div>

      <div className="d-flex justify-content-between">

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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
                <h4 className="text-white">IZB Classic Savings A/C</h4>
                <h5 className="text text-white fs-4 my-2">benefit</h5>
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
                  <button className="btn btn-light py-0">apply now</button>
                  <a href="" className="text-white">
                    know more <AiOutlineArrowRight />{" "}
                  </a>
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
