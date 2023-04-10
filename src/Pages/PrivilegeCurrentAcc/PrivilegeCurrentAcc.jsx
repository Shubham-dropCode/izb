import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/IZB Privilege Current Account/Image_1.png";
import SavePlusAccountComponent from '../../Components/SavePlusAccount/SavePlusAccountComponent';
import img1 from "../../assets/images/IZB/IZB Website Skin/IZB Privilege Current Account/Image_2.png"
import Arrow_down from "../../assets/images/IZB/arrow_down.png";

import { AiOutlineArrowRight } from "react-icons/ai";

const PrivilegeCurrentAcc = () => {
  const accountContent = "This is a business current account offering premier business banking solutions and services designed specifically to meet business operation needs including concessions on service charges"
  return (
    <>
    <Breadcrumb Heading="IZB Privilege Current Account" img={BackgroundBrundcrumb}/>
    <SavePlusAccountComponent heading="IZB Privilege Current Account" subHeading="Know About" content={accountContent} img={img1}  btnTxt="Open an Account" />

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
                      <img src={Arrow_down} className='me-1'/>
                      Service Charges
                    </a>
                  </li>
                  <li>
                    <a href="#eligibility">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Remittances (Kwacha)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AllAcountsSection/>
    </>
  )
}

export default PrivilegeCurrentAcc