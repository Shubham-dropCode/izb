import React, { useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { AiFillCaretRight } from "react-icons/ai";
import percent from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/percentage.png";
import CC from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/credit-card.png";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import monitor from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/monitor.png";
import atm from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/atm.png";
import img1 from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Image_2.png";
import statement from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/bank-statement.png";
import transfer from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/bank-transfer.png";
import booking from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/booking.png";
import cheque from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/cheque.png";
import mobileNetwork from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/mobile-network.png";
import selfService from "../../assets/images/IZB/IZB Website Skin//IZB Privilege Current Account/Icons/self-service.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Privilege Savings Accoun/Image_1.png";
import PrivilageSavingsTable from "../../Components/ServiceTable/PrivilageSavingsTable";

const PrivilegeSaving = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accountContent =
    "This savings account comes with a cheque book facility I addition to other features such as SMS Alerts, Internet Banking and the IZB Visa Chip & Pin Debit Card and is an interest bearing savings account.";
  return (
    <>
      <Breadcrumb
        Heading="IZB Privilege Savings Account"
        img={BackgroundBrundcrumb}
        show={true} btnTxt="Open an Account"
      />
      <SavePlusAccountComponent
        heading="IZB Privilege Savings A/C Service Charges"
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
              IZB Privilege Savings A/C Service Charges
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
                    <img src={percent} alt="" />
                  </div>
                  <div className="text">
                    <h5>Attractive Intrest rates payable twice yearly</h5>
                  </div>
                </div>
              </li>
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
                    <h5>Balance IZB atm</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={transfer} alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      Inter Bank Transfers <br />
                      (RTGS/DDACC)
                    </h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={mobileNetwork} alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      Mobile recharge <br /> (Airtel/MTN/Zamtel)
                    </h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={cheque} alt="" />
                  </div>
                  <div className="text">
                    <h5> Cheque book facility</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={selfService} alt="" />
                  </div>
                  <div className="text">
                    <h5>Self service requests</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={booking} alt="" />
                  </div>
                  <div className="text">
                    <h5>
                      Mobile Banking Facility with Bill payments (zesco/ Gotv/
                      Iconnect/ Topstar/ DSTV.
                    </h5>
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
            <h2>IZB Privilege Savings A/C Required Documents</h2>
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
                      Initial cash deposit of K500.00{" "}
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
                    <h3 className="text-white">
                      Copy of NRC/Passport or Driver's Licence
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
      <PrivilageSavingsTable />
      <AllAcountsSection />
    </>
  );
};

export default PrivilegeSaving;
