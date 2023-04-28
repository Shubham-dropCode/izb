import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/MSME Loan/Untitled-2.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/MSME Loan/Untitled-1.png";
import MSMEaccordion from "./MSMEaccordion";
import { question } from "./MSMEData";
import { useEffect } from "react";

const MSMELoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accountContent =
    "The MSME Sector is the corner stone of any great economy. We firmly on board to act as a catalyst for the economic development of Zambia";
  return (
    <>
      <Breadcrumb Heading="MSME Loan" img={BackgroundBrundcrumb} show={true} btnTxt="Apply Now"/>
      <SavePlusAccountComponent
        heading="MSME Loan"
        subHeading="Know About"
        content={accountContent}
        btnTxt="Apply Now"
        img={img1}
        logo={true}
      />

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
            <ul className="accordion-box my-4">
              {question.map((item) => {
                const { id } = item;
                return <MSMEaccordion key={id} {...item} />;
              })}
            </ul>
          </div>
        </div>
      </section>
      <div className="container">
        <div
          className="bg-light my-3"
          style={{
            padding: "20px 0px 20px 60px",
          }}
        >
          <h6 style={{ color: "#9E1B1E" }}>Terms and Conditions Apply</h6>
        </div>
      </div>
      <AllAcountsSection />
    </>
  );
};

export default MSMELoan;
