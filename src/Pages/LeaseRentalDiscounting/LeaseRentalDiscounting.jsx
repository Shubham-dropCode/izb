import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import img1 from "../../assets/images/IZB/IZB Website Skin/Lease Rental Discounting IZB/Untitled2.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Lease Rental Discounting IZB/Untitled-1.png";
import { question } from './LeaseData';
import LeaseAccoudion from './LeaseAccoudion';
import { useEffect } from 'react';

const LeaseRentalDiscounting = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent = "Need ﬁnancing against future receivables. We have your back."
  return (
    <>
    <Breadcrumb Heading="Lease Rental Discounting IZB" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="Lease Rental Discounting IZB"
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
                return <LeaseAccoudion key={id} {...item} />;
              })}
            </ul>
          </div>
        </div>
      </section>
    <AllAcountsSection/>
    </>
  )
}

export default LeaseRentalDiscounting