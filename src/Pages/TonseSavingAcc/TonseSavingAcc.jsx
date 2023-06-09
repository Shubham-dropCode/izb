import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import {AiFillCaretRight} from "react-icons/ai"
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/5.png";
import CC from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/credit-card.png";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import money from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/money.png";
import booking from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/booking.png";
import statement from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/bank-statement.png";
import atm from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/atm.png";
import ContainsArea from '../../Components/ContainsArea/ContainsArea'
import SavePlusAccountComponent from '../../Components/SavePlusAccount/SavePlusAccountComponent'
import {loan} from '../../Data/ContainAreaData';
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Tonse Savings Account/image_1.png";
import { useEffect } from 'react';
import TonseTable from '../../Components/ServiceTable/TonseTable';

console.log(loan);

const TonseSavingAcc = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent = "A starter saving Account which allows the account holder to operate a savings account at the minimum level and offers an IZB Visa Chip & Pin Debit Card."
  return (
    <>
    <Breadcrumb Heading="Tonse Savings Account" img={BackgroundBrundcrumb} show={true} btnTxt="Open an Account"/>
    <SavePlusAccountComponent
    btnTxt="Open an Account"
        heading="IZB Tonse Savings Account"
        subHeading="Know About"
        content={accountContent}
        img={img1}
      />
      <ContainsArea />
      <section
        id="benefits"
        class="benefits-style2-area"
        className="choose-style1-area"
      >
        <div className="container pt-4">
          <div className="text-center my-5">
            <h1 style={{ color: "#484848" }}>
              Our IZB Tonse Savings A/C Benefits
            </h1>
            <p style={{ color: "#484848" }}>
              We help businesses and customers achieve more.
            </p>
          </div> 
          <div className="">
            <ul className="row choose-style1__content justify-content-center">
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={CC} alt="" />
                  </div>
                  <div className="text">
                    <h5>IZB contactless Card visa cards</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={EmailAlert} alt="" />
                  </div>
                  <div className="text">
                    <h5>SMS alert facility</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={money} alt="" />
                  </div>
                  <div className="text">
                    <h5>No maintenance charge</h5>
                  </div>
                </div>
              </li>

              
            </ul>
          </div>
          <div className="">
            <ul className="row choose-style1__content justify-content-center">
            <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={statement} alt="" />
                  </div>
                  <div className="text">
                    <h5>Free E-statement facility</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={atm} alt="" />
                  </div>
                  <div className="text">
                    <h5>Balance enquiry on IZB atm</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={booking} alt="" />
                  </div>
                  <div className="text">
                    <h5>Mobile banking facility
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="eligibility"
        class="eligibility-area"
        style={{ backgroundColor: "#FFF5E7" }}
      >
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>IZB Tonse Savings A/C Required Documents</h2>
            <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-50 m-0 mb-1"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <div className="inner-title">
                    <h3 className="text-white">
                      Account opening application form.
                    </h3>
                  </div>
                </div>
                {/*End Single Documents Box*/}
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-50 m-0 mb-1"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <div className="inner-title">
                    <h3 className="text-white">
                      Initial cash deposit of K100.00{" "}
                    </h3>
                  </div>
                </div>
                {/*End Single Documents Box*/}
              </div>
              <div className="col-xl-4 col-lg-6 mb-0">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-100"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <div className="inner-title">
                    <p className="text-white">
                      One reference (applicant’s employer or account holder of
                      Indo -Zambia Bank maintaining a good account with us).
                    </p>
                  </div>
                  <div className="inner-title mt-2">
                    <h3 className="text-white">Proof of residence</h3>
                  </div>
                  <ul>
                  <li>
                    <span className="d-flex">
                      <AiFillCaretRight
                        size={15}
                        className="pe-1 position-absolute text-white"
                        style={{ top: "5px" }}
                      />
                    </span>
                    <p className="text-white lh-base ps-3">
                    Latest utility bill (Water, Electricity Telephone etc.)
                    </p>
                  </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        T-Pin.
                      </p>
                    </li>
                  </ul>
                </div>
                {/*End Single Documents Box*/}
              </div>

              <div className="col-xl-4 col-lg-6">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-50 m-0 mb-1"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <div className="inner-title">
                    <h3 className="text-white">Copy of NRC/Passport or Driver's Licence</h3>
                  </div>
                </div>
                {/*End Single Documents Box*/}
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-50 m-0 mb-1"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <div className="inner-title">
                    <h3 className="text-white">
                      Two recent passport
                      <br />
                      size Photographs
                    </h3>
                  </div>
                </div>
                {/*End Single Documents Box*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TonseTable />
    <AllAcountsSection/>
    </>
  )
}

export default TonseSavingAcc