import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Forign Business/Untitled-1.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import img1 from "../../assets/images/IZB/IZB Website Skin/Forign Business/Untitled-2.png";
import bgimg from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/image_6.png";
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";


const ForexSavings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accountContent =
    "Savings accounts can be opened for individuals in US Dollar/Pound Sterling/South African Rand/Euro. Cheque book facility is an option available. With this product, we also offer VISA Chip & Pin Debit Card facility, which is ideal for businessment/employees travelling frequently outside Zambia, who can draw money from any of the VISA enabled ATMs around the world.";
  return (
    <>
      <Breadcrumb
        Heading="Forex Savings"
        img={BackgroundBrundcrumb}
        show={true}
        btnTxt="Open an Account"
      />
      <SavePlusAccountComponent
        heading="Forex Savings"
        subHeading="Know About"
        content={accountContent}
        btnTxt="Open an Account"
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
                        IZB Forex Savings Account
                      </a>
                    </li>
                  </ul>
                </div>
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
              IZB Forex Savings A/C Service Charges
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
                    <thead className="header">
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
                          <p>Individual and Joint Account holders</p>
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
                          <p>Savings</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>4.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Always change the PIN as soon as you receive it..
                          </p>
                        </td>
                        <td className="location">
                          <p>Never carry your PIN in your wallet or purse</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>5.</h3>
                        </td>
                        <td className="location">
                          <p>Tenure/Tenor</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>6.</h3>
                        </td>
                        <td className="location">
                          <p>Maintenance Charges</p>
                        </td>
                        <td className="location">
                          <p>USD2.50 per month</p>
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
                          <p>NIL</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>8.</h3>
                        </td>
                        <td className="location">
                          <p>Minimum Balance Charges</p>
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
                          <p>Ledger Fees</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>10.</h3>
                        </td>
                        <td className="location">
                          <p>Cheque Book</p>
                        </td>
                        <td className="location">
                          <p>USD10/- per 25 leaves</p>
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
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>12.</h3>
                        </td>
                        <td className="location">
                          <p>Internet Banking</p>
                        </td>
                        <td className="location">
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>13.</h3>
                        </td>
                        <td className="location">
                          <p>Life Cover Facility</p>
                        </td>
                        <td className="location">
                          <p>N/A</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>14.</h3>
                        </td>
                        <td className="location">
                          <p>Monthly Statement</p>
                        </td>
                        <td className="location">
                          <p>
                            Free – once a month thereafter USD5/- per occasion
                          </p>
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
                          <p>Available – Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>17.</h3>
                        </td>
                        <td className="location w-50">
                          <p>Cash Deposits (At any IZB Branch)</p>
                        </td>
                        <td className="location">
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Free up to USD 5,000/- or equivalent
                          </p>
                          <p>
                            <AiFillCaretRight className="me-1" />
                            Above USD5,000/- or equivalent 0.5% ( min USD20/-,
                            max USD100/-)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>18.</h3>
                        </td>
                        <td className="location">
                          <p>Cash Withdrawal Charges (at any IZB branch)</p>
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
                          <p>USD5.00 per book</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>20.</h3>
                        </td>
                        <td className="location">
                          <p>Transaction Fee</p>
                        </td>
                        <td className="location">
                          <p>USD5.00 per book</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>21.</h3>
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
                            <p>USD10/- per replacement</p>
                            <p>USD12/- per replacement</p>
                            <p>USD15/- per replacement</p>
                          </div>
                          <p>Free </p>
                          <h4 className="text-white my-2">
                            {" "}
                            <span>&nbsp;</span>
                          </h4>
                          <p>USD0.80</p>
                          <p>Free</p>
                          <p>USD0.50</p>
                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <p>USD5.00</p>
                          <p>USD1.50</p>

                          <h4 className="text-white my-2">
                            <span>&nbsp;</span>
                          </h4>
                          <p>USD5.00</p>
                          <p>USD1.50</p>
                          <p>
                            Free, however, if the matter goes for arbitration,
                            appropriate fees shall apply on a cost recovery
                            basis.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>22.</h3>
                        </td>
                        <td className="location">
                          <p>Balance confirmation charges</p>
                        </td>
                        <td className="location">
                          <p>
                            K200.00 foreign currency equivalent per certificate
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>23.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Authentication/Authorisation/Verificationof other
                            documents (only if closed within last 6 months)
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
                          <h3>24.</h3>
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
                          <p>USD5/-</p>
                          <p>USD2.50/- per transaction</p>
                          <p>USD5/- per transaction</p>
                          <p>Free</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>25.</h3>
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
                          <h3>26.</h3>
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
                          <h3>27.</h3>
                        </td>
                        <td className="location">
                          <p>Photocopies at customer’s request</p>
                        </td>
                        <td className="location">
                          <p>USD 0.50 per page</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>28.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Request for retrieval of paid cheque, deposit slip,
                            transfer request or any Bank record.
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            K200.00 foreign currency equivalent per instrument
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="department">
                          <h3>29.</h3>
                        </td>
                        <td className="location">
                          <p>
                            Status Report/Bankers enquiry/ References letter
                          </p>
                        </td>
                        <td className="location">
                          <p>
                            K50.00 foreign currency equivalent per
                            report/enquiry/letter
                          </p>
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
};

export default ForexSavings;
