import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/1.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";


import {
  AiOutlinePercentage,
  AiFillCreditCard,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineArrowRight,
} from "react-icons/ai";

const BusinessBanking = () => {
  return (
    <>
    
    <Breadcrumb Heading="Business Banking" img={BackgroundBrundcrumb}/>
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
    </div>
    <AllAcountsSection/>
    </>
  );
};

export default BusinessBanking;
