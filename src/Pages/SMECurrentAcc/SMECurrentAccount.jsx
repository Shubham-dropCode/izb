import React, { useEffect } from 'react'
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import img1 from "../../assets/images/IZB/IZB Website Skin/SME Current Account/Untitled-1.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/SME Current Account/Untitled-2.png";
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
import {AiFillCaretRight, AiOutlineRight } from "react-icons/ai"
import creditCard from "../../assets/images/IZB/IZB Website Skin/Classic Current Account/icons/credit-card.png";
import bgimg from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/image_6.png";
const SMECurrentAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent =
    "This is a current account specifically designed to suport the business banking needs of Small and Medium Scale Enterprise.";
  return (
    <>
      <Breadcrumb
        Heading="SME Current Account"
        img={BackgroundBrundcrumb}
      />
      <SavePlusAccountComponent
        heading="IZB SME Current Account"
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
      <section
        id="required"
        class="documents-area"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center">
            <h1 className="text-white">
              IZB Classic Savings A/C Service Charges
            </h1>
            <p className="text-white">
              Your money is making money for you & Your Family.
            </p>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="job-list-table-box">
                <div className="table-outer">
                  <table className="job-list-table">
                    <thead className="header text-center">
                      <tr>
                        <th>SL. No</th>
                        <th>Product Name</th>
                        <th>IZB Forex Current Account</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr>
                        <td className="department text-white">
                          <h3>1.</h3>
                        </td>
                        <td className="location">
                          <p>Target Groups</p>
                        </td>
                        <td className="location">
                          <p>
                          SME/Individuals
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department text-white">
                          <h3>2.</h3>
                        </td>
                        <td className="location">
                          <p>Account Opening Requirement</p>
                        </td>
                        <td className="location">
                          <p>KYC requirement as stipulated</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>3.</h3>
                        </td>
                        <td className="location">
                          <p>Type of Account</p>
                        </td>
                        <td className="location">
                          <p>Current</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>4.</h3>
                        </td>
                        <td className="location">
                          <p>Rate of Interest</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>5.</h3>
                        </td>
                        <td className="location">
                          <p>Maintenance Charges</p>
                        </td>
                        <td className="location">
                          <p>K100/- per month</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>6.</h3>
                        </td>
                        <td className="location">
                          <p>Maximum Balance</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>7.</h3>
                        </td>
                        <td className="location">
                          <p>Minimum Balance Requirment</p>
                        </td>
                        <td className="location">
                          <p>K300/-</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>8.</h3>
                        </td>
                        <td className="location">
                          <p>Minimum balance Charge</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>9.</h3>
                        </td>
                        <td className="location">
                          <p>Cheque Book</p>
                        </td>
                        <td className="location">
                          <p><AiFillCaretRight/>50 leaves – K3.50 per leaf</p>
                          <p><AiFillCaretRight/>100 leaves – K2.25 per leaf</p>
                          <p><AiFillCaretRight/>200 leaves – K2.25 per leaf</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>10.</h3>
                        </td>
                        <td className="location">
                          <p>Internet Banking</p>
                          <p><AiFillCaretRight/>Internet Banking</p>
                        </td>
                        <td className="location">
                        <p><AiFillCaretRight/>K120/- per annum</p>
                        <p><AiFillCaretRight/>K25/- per occasion</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>11.</h3>
                        </td>
                        <td className="location">
                          <p>SMS Alert</p>
                        </td>
                        <td className="location">
                          <p>Free – (Limited to one mobile number)</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>12.</h3>
                        </td>
                        <td className="location">
                          <p>Monthly Statement</p>
                        </td>
                        <td className="location">
                          <p>Free once permonth</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>13.</h3>
                        </td>
                        <td className="location">
                          <p>Duplicate/Interim Statement</p>
                        </td>
                        <td className="location">
                          <p>K50/- per page per occasion</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>14.</h3>
                        </td>
                        <td className="location">
                          <p>Transaction Fee</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>15.</h3>
                        </td>
                        <td className="location">
                          <p>E-statement</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>16.</h3>
                        </td>
                        <td className="location">
                          <p>Closure of account</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>17.</h3>
                        </td>
                        <td className="location w-50">
                          <p>
                          Cash Deposits (At any IZB Branch)
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Free up to K 100,000/-
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Above K 100,000/- per day of partthereof
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            K5/- per K10,000/-; or part there 
                             of Max. K 100/-)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>18.</h3>
                        </td>
                        <td className="location">
                          <p>Issuance of Deposit Book</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>19.</h3>
                        </td>
                        <td className="location">
                          <p>Issuance of Deposit Book</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>20.</h3>
                        </td>
                        <td className="location">
                          <h5 className="text-white my-2">
                            IZB Visa Chip Debit Card-Charges
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Issuance charge
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Monthly Fee
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Renewal of Card Charges
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Card Replacement / Uncollected card beyond 90 days
                          </p>
                          <div className="location ps-2">
                            <p>
                              <AiOutlineRight className="me-1" />
                              Classic
                            </p>
                            <p>
                              <AiOutlineRight className="me-1" />
                              Gold
                            </p>
                            <p>
                              <AiOutlineRight className="me-1" />
                              Platinum
                            </p>
                          </div>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            PIN Regeneration
                          </p>
                          <h5 className="text-white my-2">IZB ATMs</h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Cash Withdrawals (in Kwacha){" "}
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Balance Enquiry
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Mini Statements
                          </p>
                          <h5 className="text-white my-2">
                            Other Bank's VISA enabled ATMS in Zambia
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Cash Withdrawal (In kwacha)
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Balance Enquiry
                          </p>

                          <h5 className="text-white my-2">
                            {" "}
                            Other Banks VISA enabled ATMs (abroad)
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Cash Withdrawals
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Balance Enquiry
                          </p>
                        </td>
                        <td className="location">
                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <p>Free </p>
                          <p>Free</p>
                          <p>Free</p>
                          <p>
                            <span>&nbsp;</span>
                          </p>
                          <div className="location">
                            <p>K100/- per card</p>
                            <p>K125/- per card</p>
                            <p>K150/- per card</p>
                          </div>
                          <p>Free </p>
                          <h4 className="text-white my-2">
                            {" "}
                            <span>&nbsp;</span>
                          </h4>
                          <p>K8/-</p>
                          <p>Free</p>
                          <p>K3/-</p>
                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <p>K15/-</p>
                          <p>K3/-</p>

                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <p>K35/-</p>
                          <p>K10/-</p>
                          <p>
                            Free, however, if the matter goes for arbitration,
                            appropriate fees shall apply on a cost recovery
                            basis.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>21.</h3>
                        </td>
                        <td className="location">
                          <p>Return of cheques</p>
                          <div>
                          <p>Individual</p>
                          <p><AiFillCaretRight/>For financial reasons (Refer toDrawer)</p>
                          <p><AiFillCaretRight/>For other reasons</p>
                          </div>
                          <div>
                          <p>Corporate A/ct</p>
                          <p><AiFillCaretRight/>For financial reason</p>
                          <p><AiFillCaretRight/>For other reasons</p>
                          </div>
                        </td>
                        <td className="location">
                          <p>K 510 – per cheque</p>
                          <p>Free</p>
                          <p>K840/- per cheque</p>
                          <p>free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>22.</h3>
                        </td>
                        <td className="location">
                          <p>Stop Payment Instructions</p>
                        </td>
                        <td className="location">
                          <p>K 250/- per occasion</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>23.</h3>
                        </td>
                        <td className="location">
                          <h5 className="text-white my-2">
                            Remittances (kwacha)
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Banker's cheque
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Cancellation of Banker's cheque
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Issuance of duplicate Banker's chques in lieu of
                            lost cheque
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Cancelling of lost Banker's cheque{" "}
                          </p>

                          <h5 className="text-white my-2">
                            Other remittances{" "}
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Within IZB branches{" "}
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            RTGS – Manual{" "}
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            RTGS – Electronic{" "}
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            DDACC – Manual{" "}
                          </p>

                          <p>
                            <AiFillCaretRight className="me-1" />
                            DDACC – Electronic{" "}
                          </p>

                          <h5 className="text-white my-2">
                            Transfer of funds on closure of account{" "}
                          </h5>
                        </td>
                        <td className="location">
                          <h5 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h5>
                          <p>K100/- plus VAT</p>
                          <p>K50/-</p>
                          <p>K75/-</p>
                          <p>K75/-</p>

                          <h5 className="text-white my-2">
                            Other remittances{" "}
                          </h5>
                          <p>Free</p>
                          <p>K55/- per transaction</p>
                          <p>K40/- per transaction</p>

                          <p>K25/- per transaction</p>
                          <p>K10/- per transaction</p>

                          <p className="pt-2 ">K50/- per transaction </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>24.</h3>
                        </td>
                        <td className="location">
                          <p>Balance confirmation charges</p>
                        </td>
                        <td className="location">
                          <p>K200/- per certificate</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>25.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Authentication/Authorisation/Verificationof other
                            documents. <br /> (only if closed within last 6
                            months)
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            K50/- per document for confirmation/
                            authorization/verification of documents
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>26.</h3>
                        </td>
                        <td className="location">
                          <h5 className="text-white my-2">
                            Standing Order Charges
                          </h5>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Setting up charges
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Processing (internal) intra-bank
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Processing (external within Zambia) inter-bank
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Amendment
                          </p>
                        </td>
                        <td className="location">
                          <h5 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h5>
                          <p>K50/-</p>
                          <p>K50/- per transaction</p>
                          <p>K25/- per transaction</p>
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>27.</h3>
                        </td>
                        <td className="location">
                          <p>Dormant Account</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>28.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Reactivation of Account <br />
                            (only if closed within last 6 months)
                          </p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>29.</h3>
                        </td>
                        <td className="location">
                          <p>Photocopies at customer’s request</p>
                        </td>
                        <td className="location">
                          <p>K 10/- per page</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>30.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Request for retrieval of paid cheque, deposit slip,
                            transfer request or any Bank record.
                          </p>
                        </td>
                        <td className="location">
                          <p>K 200/- per instrument</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>31.</h3>
                        </td>
                        <td className="location">
                          <p>Status Report/Bankers enquiry/
 														References letter
											    </p>
                        </td>
                        <td className="location">
                          <p>K50/- per letter</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>32.</h3>
                        </td>
                        <td className="location">
                          <p>Search Fees</p>
                        </td>
                        <td className="location">
                          <p>K150/-</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>33.</h3>
                        </td>
                        <td className="location">
                          <p>ZRA Online Tax Payment</p>
                        </td>
                        <td className="location">
                          <p><AiFillCaretRight/>Online K25/- per transaction</p>
                          <p><AiFillCaretRight/>Over the counter (walk-in-customers) 
														K35/- per transaction
													</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>34.</h3>
                        </td>
                        <td className="location">
                          <p>NAPSA Online Payment</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllAcountsSection />
    </>
  );
}

export default SMECurrentAccount