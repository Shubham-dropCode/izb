import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Forign Business/Untitled-2.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Forign Business/Untitled-1.png";
import InternationlAccordion from "./InternationlAccordion";
import { question } from "./InternationalData";
import { useEffect } from "react";

const InternationalBankingForeignBusiness = () => {
  const textColor = {
    color: "#949292",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accountContent =
    "Go beyond borders with our International Banking facilities.we tap into Global presence of our shareholding banks tomake your foreign business swift.";
  return (
    <>
      <Breadcrumb
        Heading="International Banking Foreign Business"
        img={BackgroundBrundcrumb}
      />
      <section className="overview-area SaveAccountSection">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xl-5">
              <div className="overview-content-box-one">
                <img src={img1} className="ps-0" width="100%" alt="" />
              </div>
            </div>
            <div className="col-xl col-md ">
              <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
                <div className="inner-title">
                  <h5>Know About</h5>
                  <h2 style={{ color: "#484848" }}>
                    International Banking Foreign Business
                  </h2>
                </div>
                <div className="text">
                  <p style={textColor}>
                    Go beyond borders with our International Banking
                    facilities.we tap into Global presence of our shareholding
                    banks tomake your foreign business swift.
                  </p>
                </div>
                <p  style={{ color: "#9E1B1E" }}>Contact for dealing room</p>

                <button
                  className="btn btn-danger font-weight-bold text-white fs-5"
                  style={{ backgroundColor: "#9E1B1E", width: "180px",fontWeight:"600" }}
                >
                  0211 389900
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-contains-area"
        style={{ backgroundColor: "#FFF5E7" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-contains-box">
                <div className="page-contains-btn">
                  <ul className="navigation clearfix scroll-nav">
                    <li className="current">
                      <a href="#benefits">
                        <img src={Arrow_down} className="me-1" />
                        Eligibility
                      </a>
                    </li>
                    <li>
                      <a href="#eligibility">
                        <AiOutlineArrowRight size={14} className="me-1" />
                        Purpose
                      </a>
                    </li>
                    <li>
                      <a href="#required">
                        <AiOutlineArrowRight size={14} className="me-1" />
                        Security
                      </a>
                    </li>
                    <li>
                      <a href="#required">
                        <AiOutlineArrowRight size={14} className="me-1" />
                        Customers Contribution
                      </a>
                    </li>
                    <li>
                      <a href="#required">
                        <AiOutlineArrowRight size={14} className="me-1" />
                        Repayment Period
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="MSMEAccodion">
        <div className="container justify-content-center mt-5">
          <div className="faq-style1__content">
            <ul className="accordion-box my-5">
              {question.map((item) => {
                const { id } = item;
                return <InternationlAccordion key={id} {...item} />;
              })}
            </ul>
          </div>
        </div>
      </section>

      <AllAcountsSection />
    </>
  );
};

export default InternationalBankingForeignBusiness;
