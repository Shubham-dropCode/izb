import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import {
  AiFillCaretRight,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useState } from "react";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/8.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Personal_Loan/Image_1.png";


const IndoVehicleLoan = () => {
  const accountContent =
    "Looking for a quick finance solution and have immovable assets. Our equity release is a quick solution to get financing backed by your assets.";
  const [show, setShow] = useState(false);
  return (
    <>
      <Breadcrumb Heading="Indo Vehicle Loan" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="Indo Vehicle Loan"
        subHeading="Know About"
        btnTxt="Apply Now"
        content={accountContent}
        img={img1}
      />
      <ContainsArea />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box mt-5">
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Eligibility
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Individual and corporate customers
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Purpose
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          To ﬁnance purchase of Brand-New vehicles from an
                          Authorized Automobile Dealer, including Electric.
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          To ﬁnance purchase of second-hand vehicles not more
                          than 5 years old for personal and business use from
                          reputable dealers.
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Security
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Charge on vehicle purchased out of bank ﬁnance to be
                          registered at the Road Transport and Safety Agency
                          with Bank registered as absolute owner of the vehicle
                          on the white book.
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Any other appropriate collateral may be considered, at
                          the bank’s
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Customer Contribution
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Minimum margin of 30% upfront.
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Repayment Period{" "}
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          For new vehicles, maximum 72 months.
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          For second vehicles, maximum 60 months.
                        </p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-light p-3 mt-4">
              <h6 style={{ color: "#9E1B1E" }}> Terms and Conditions Apply</h6>{" "}
            </div>
          </div>
        </div>
      </section>
      <AllAcountsSection />
    </>
  );
};

export default IndoVehicleLoan;
