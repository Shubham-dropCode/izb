import React, { useEffect } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import img1 from "../../assets/images/IZB/IZB Website Skin/Agro Finance/image_2.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Agro Finance/image_1.png";
import AgroFinanceAccordion from './AgroFinanceAccordion';
import {question} from "./AgroFinanceData"

const AgroFinance = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent = "We understand the need for food security and the importance agriculture plays into the country’s national development goals. At Indo Zambia Bank we study, examine and analyse the ﬁnancial aspects pertaining to farm business. Tailor made Agro ﬁnancing product is available making us your all WEATHER Agro Partner of choice."
  return (
    <>
     <Breadcrumb Heading="Agro Finance" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="Agro Finance"
        subHeading="Know About"
        content={accountContent}
        btnTxt="Apply Now"
        img={img1}
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
            <ul className="accordion-box">
              {question.map((item) => {
                const { id } = item;
                return <AgroFinanceAccordion key={id} {...item} />;
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
          <h6 style={{ color: "#9E1B1E" }}>All other standard lending terms of the Bank shall be applicable.</h6>
        </div>
      </div>
      <AllAcountsSection/>
    </>
  )
}

export default AgroFinance