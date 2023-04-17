import React, { useEffect } from "react";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import img1 from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/image_2.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/image_1.png";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import monitor from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/monitor.png";
import statement from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/bank-statement.png";
import assets from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/assets.png";
import money from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/transfer-money.png";
import cheque1 from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/cheque.png";
import overdraft from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/overdraft.png";
import certificate from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/guarantee-certificate.png";
import rent from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/rent.png";
import termLoan from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/term-loan.png";
import padloack from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/padlock.png";
import currency from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/foreign-currency-exchange.png";
import cheque2 from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/cheque.png";
import {AiFillCaretRight} from "react-icons/ai"
import creditCard from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/credit-card.png";
const ClassicCurrentAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent =
    "This standard business current account is designed to support the banking needs of the business fraternity. Grow your business with the right set of tools, provided specifically for your progress.";
  return (
    <>
      <Breadcrumb
        Heading="Classic Current Account"
        img={BackgroundBrundcrumb}
      />
      <SavePlusAccountComponent
        heading="Classic Current Account"
        subHeading="Know About"
        content={accountContent}
        btnTxt="Open an Account"
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
              Our IZB Save Plus Account Benefits
            </h1>
            <p style={{ color: "#484848" }}>
              We help businesses and customers achieve more.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="row choose-style1__content">
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={monitor} alt="" />
                  </div>
                  <div className="text">
                    <h5>Internet Banking facility</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={cheque2} alt="" />
                  </div>
                  <div className="text">
                    <h5> Cheque book facility</h5>
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
                    <img src={currency} alt="" />
                  </div>
                  <div className="text">
                    <h5>Foreign exchange services</h5>
                  </div>
                </div>
              </li>

              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={overdraft} alt="" />
                  </div>
                  <div className="text">
                    <h5>overdraft</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={certificate} alt="" />
                  </div>
                  <div className="text">
                    <h5>Bank guarantee facility</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={rent} alt="" />
                  </div>
                  <div className="text">
                    <h5>Lease rentals discounting</h5>
                  </div>
                </div>
              </li>

              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={cheque1} alt="" />
                  </div>
                  <div className="text">
                    <h5>Bank certified cheques</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={assets} alt="" />
                  </div>
                  <div className="text">
                    <h5>Assest financing</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={termLoan} alt="" />
                  </div>
                  <div className="text">
                    <h5>Term loans</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={creditCard} alt="" />
                  </div>
                  <div className="text">
                    <h5>Letters of credit</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={money} alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      Remittances <br></br> (RTGS/DDACC)
                    </h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={padloack} alt="" />
                  </div>
                  <div className="text">
                    <h5>Investment in securities</h5>
                  </div>
                </div>
              </li>
              <li></li>
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
            <h2>Savings A/c Required Documents</h2>
            <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-100"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <ul>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Certificate of registration (Ent) or Certification of Incorporation (Co.)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        List of Directors (Form II for Enterprises)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        List of Directors (From v for Company)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Articles of Association (Company)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Resolution of Board of Directors to open Account
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Share Certificate (Company)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Copy of Declaration of Consent to Act as Director (Company)
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Identification document of the Directors with two passport size photos, Copy of NRC/Valid Passport for each signatory.
                      </p>
                    </li>
                  </ul>
                </div>
                {/*End Single Documents Box*/}
              </div>

              <div className="col-xl-6 col-lg-6">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-100"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <ul>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Introductory letter from a good current account holder which has been in operation for six months.
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Copy of latest annual Returns to the Registrar of Companies
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Utility bill water, electricity, telephone etc in the name of the company of Lease. Agreement on the physical premises of the company
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        Employment/Residential permit in case of Foreign Nationals
                      </p>
                    </li>
                    <li>
                      <p className="text-white lh-base">
                        <AiFillCaretRight size={15} className="pe-1" />
                        K500 minimum balance
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

              
            </div>
          </div>
        </div>
      </section>
      <AllAcountsSection />
    </>
  );
};

export default ClassicCurrentAccount;
