import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import img from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/21.jpg";
import bgimg from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/3459071.jpg";
import fastServe from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/indo-fast-serve_png.png";
import cashWithdrawal from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/Icon/money-withdrawal.png";
import CashDeposit from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/Icon/deposit.png";
import BalanceEnquiry from "../../assets/images/IZB/IZB Website Skin/Indo Fast Serve/Icon/calculator.png";
import { BsBank } from "react-icons/bs";

const IndoFastServe = () => {
  return (
    <>
      <Breadcrumb Heading="Indo Fast Serve" />
      <section className="overview-area">
        <div className="container">
          <div className="row">
            <div className=" offset-xl-1 col-md-4 col-xl-4">
              <div className="overview-content-box-one">
                <img src={img} width="100%" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 ">
              <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
                <div className="inner-title">
                  <h5>Know More</h5>
                  <h2>Indo Fast Serve</h2>
                </div>
                <div className="text">
                  <p>
                    Indo Fast Serve Agency Banking gives you the convenience to
                    access banking services near you. Transfer money, deposit or
                    withdraw cash and much more by visiting your nearest IZB
                    Fast Serve Agent!
                  </p>

                  <p>
                    • Easy to use - Just walk to the nearest IZB Fast Serve
                    Agent.
                    <br /> • Time-Saving - No queues to know account activity or
                    fund transfers <br />• Secure – Confirm all transactions
                    with a 4-digit One Time Password
                    <br /> • Convenient – Access banking services near you.
                  </p>
                </div>
                {/* <button className="btn btn-danger w-50 text-white fs-5" style={{backgroundColor:"#9E1B1E"}}>
                <BsBank className="me-4 mb-1 text-white" size={25}/>
                Open Your Account
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <img
                src={fastServe}
                width="70%"
                className="mx-auto d-block mt-5"
                alt=""
              />
              <div className="content my-5">
                <h3
                  style={{ color: "rgb(158, 27, 30)" }}
                  className="text-center"
                >
                  Why use Indo Fast Serve
                </h3>
                <div className=" d-flex justify-content-around text-center mt-4">
                  <div>
                    <img src={cashWithdrawal} width={60} alt="" />
                    <p>Cash Withdrawal</p>
                  </div>

                  <div className="">
                    <img src={CashDeposit} width={60} alt="" />
                    <p>Cash Deposit</p>
                  </div>
                  <div>
                    <img src={BalanceEnquiry} width={60} alt="" />
                    <p>Balance Enquiry</p>
                  </div>
                </div>
                <h3
                  style={{ color: "rgb(158, 27, 30)" }}
                  className="text-center mt-5 mb-4"
                >
                  Requirements
                </h3>
                <div className="d-flex flex-column align-items-center gap-4">
                  <button
                    className="btn btn-danger w-50 text-white fs-5"
                    style={{ backgroundColor: "#9E1B1E" }}
                  >
                    
                    Active IZB bank account
                  </button>
                  <button
                    className="btn btn-danger w-50 text-white fs-5"
                    style={{ backgroundColor: "#9E1B1E" }}
                  >
                    NRC or valid ID
                  </button>
                  <button
                    className="btn btn-danger w-50 text-white fs-5"
                    style={{ backgroundColor: "#9E1B1E" }}
                  >
                    Registered mobile number
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndoFastServe;
