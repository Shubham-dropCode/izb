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
// import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/20.png";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Bumi Fixed Deposit Account/Image_1.png";
import { useEffect } from "react";



const BumiFixedDepositAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const [show, setShow] = useState(false);
  return (
    <>
     <Breadcrumb Heading="Bumi Fixed Deposit Account" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="Bumi Fixed Deposit Account"
        subHeading="Know About"
        btnTxt="Apply Now"
        content="The account the pays you interest upfront."
        img={img1}
      />
     <section
      className="page-contains-area"
      style={{ backgroundColor: "#FFF5E7" }}
    >
      <div className="container-fluid">
        <div className="row ">
          <div className="col-xl-12 ">
            <div className="page-contains-box justify-content-center">
              <div className="page-contains-btn">
                <ul className="navigation clearfix scroll-nav">
                  <li>
                    <a href="#eligibility">
                    <img src={Arrow_down} />
                      Eligilibity 
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Minimum initial deposit amount
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Tenor
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Termination
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Interest rate

                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Interest Payment

                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      At Maturity Date

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


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
                          Both individual and corporate customers
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
                      Minimum initial deposit amount
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          K200,000
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
                      Tenor
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Minimum period of 90 days and above
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
                      Termination
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          No pre-withdrawal shall be allowed
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
                      Interest rate
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Attractive interest rate
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
                      Interest Payment
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Interest credited upon opening/placement of the deposit

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
                      Interest Payment
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Credit the principal amount to customers account.
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
  )
}

export default BumiFixedDepositAccount