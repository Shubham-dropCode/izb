import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/Untitled-1.png";
import img from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Untitled-1.png";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import moneyTransfer from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/transfer-money.png";
import ZambiaRevenue from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/download.jpeg";
import napsa from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/NAPSA-logo-2018.png";
import nihma from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/nhima_logo_02.jpg";
import bill from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/bill.png";
import mobileApp from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/mobile-app.png";
import img1 from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/icons/bank-statement.png";
import onlineBanking from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/online-banking.png";
import stockMarket from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/stock-market.png";
import CC from "../../assets/images/IZB/IZB Website Skin/Indo Net Banking/Icons/credit-card.png";
import { useEffect } from "react";
import bgimg from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/image_6.png";


const NetBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const content =
    "Manage your account conveniently through the Internet. Up-to-the-second details of your account Access anytime, from anywhere No queues to stand in, or turns to wait for.View Account Balances Monitor cleared transactions, forex rates inquiry vew, print and store electronic copies of your statements";
  return (
    <>
      <Breadcrumb Heading="Indo Net Banking" img={BackgroundBrundcrumb} />
      <section className="overview-area">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-xl-5">
              <div className="overview-content-box-one">
                <img src={img} width="100%" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 ">
              <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
                <div className="inner-title">
                  <h5>Know About</h5>
                  <h2>Indo Mobile Banking</h2>
                </div>
                <div className="text">
                  <p>{content}</p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-danger w-25 text-white fs-5"
                    style={{ backgroundColor: "#9E1B1E" }}
                  >
                    <a className="text-white" href="https://ebanking.izb.co.zm:7004/Retail/#/landing">

                    Retail
                    </a>
                  </button>
                  <button
                    className="btn btn-danger w-25 text-white fs-5"
                    style={{ backgroundColor: "#9E1B1E" }}
                  >
                    <a className="text-white" href="https://ebanking.izb.co.zm:7004/CorporateBanking/#/landing">

                    Corporate
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContainsArea />

      <section
        id="benefits"
        class="benefits-style2-area"
        className="choose-style1-area"
      >
        <div className="container pt-4">
          <div className="text-center my-5">
            <h1 style={{ color: "#484848" }}>INDO Moblie Banking Benefits</h1>
            <p style={{ color: "#484848" }}>
              We help Businesses and customers achieve more.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="row choose-style1__content">
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={moneyTransfer} alt="" />
                  </div>
                  <div className="text">
                    <h5>Money Transfers</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={ZambiaRevenue} alt="" />
                  </div>
                  <div className="text">
                    <h5>Online tax payments to ZRA</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={napsa} alt="" />
                  </div>
                  <div className="text">
                    <h5>Online payments for NAPSA</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={nihma} alt="" />
                  </div>
                  <div className="text">
                    <h5>Online payments for NHIMA</h5>
                  </div>
                </div>
              </li>
        
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={bill} alt="" />
                  </div>
                  <div className="text">
                    <h5>Bill payments</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={mobileApp} alt="" />
                  </div>
                  <div className="text">
                    <h5>Mobile recharge</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={onlineBanking} alt="" />
                  </div>
                  <div className="text">
                    <h5>Bank to Wallet transfer</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={stockMarket} alt="" />
                  </div>
                  <div className="text">
                    <h5>Purchase forex</h5>
                  </div>
                </div>
              </li>
             
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={CC} alt="" />
                  </div>
                  <div className="text">
                    <h5>Block debit card and much more...</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={img1} alt="" />
                  </div>
                  <div className="text">
                    <h5>Account Monitoring & statement requests</h5>
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
            <h2>How to Sign Up for Mobile Banking</h2>
            {/* <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div> */}
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-11">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-100"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <ul>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Open below link in your web browser
                          https://ebanking.izb.co.zm:7004/RetailBanking/
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Click on the sign up tab and enter the required
                          details in the fields provided
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Accept the terms and conditions and Click the submit
                          button
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Setup your Desired USERNAME, and Password in the
                          second screen and submit
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          After setting up your USERNAME and Password an
                          activation link will be sent to your registered mobile
                          number and email. Open the activation link to activate
                          your account and login to transact.
                        </p>
                      </div>
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
           IZB Net Banking Service Charges
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
                  <thead className="header ">
                    <tr>
                      <th>SL. No</th>
                      <th>Service</th>
                      <th>Service Charge</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr>
                      <td className="department text-white">
                        <h3>1.</h3>
                      </td>
                      <td className="location">
                        <p>Balance inquiry</p>
                      </td>
                      <td className="location">
                        <p>
                        Free
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department text-white">
                        <h3>2.</h3>
                      </td>
                      <td className="location">
                        <p>Maintenance</p>
                      </td>
                      <td className="location">
                        <p>Retail → Free • Corporate → K120/-p.ad</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>3.</h3>
                      </td>
                      <td className="location">
                        <p>Password Reset</p>
                      </td>
                      <td className="location">
                        <p>Electronic → Free • Manual → K25/- per reset</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>4.</h3>
                      </td>
                      <td className="location">
                        <p>Bill Payment</p>
                      </td>
                      <td className="location">
                        <p>Free</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>5.</h3>
                      </td>
                      <td className="location">
                        <p>Mini-statement</p>
                      </td>
                      <td className="location">
                        <p>Free</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>6.</h3>
                      </td>
                      <td className="location">
                        <p>Internal Transfer</p>
                      </td>
                      <td className="location">
                        <p>Free</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>7.</h3>
                      </td>
                      <td className="location">
                        <p>DDACC</p>
                      </td>
                      <td className="location">
                        <p>K10/- per transaction</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>8.</h3>
                      </td>
                      <td className="location">
                        <p>RTGS</p>
                      </td>
                      <td className="location">
                        <p>K40/- per transaction</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>9.</h3>
                      </td>
                      <td className="location">
                        <p>Outward Telegraphic Transfer</p>
                      </td>
                      <td className="location">
                        <p>0.6%, (Min USD40/- Max. USD75/-)  <br />
                           USD20/- for INR</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>10.</h3>
                      </td>
                      <td className="location">
                        <p>Mobile Transfer (MNO/NFS)</p>
                      </td>
                      <td className="location">
                        <p>K150/- & below → K5/- per transaction  <br />
                           Above K150/- → K10/- per transaction</p>
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

export default NetBanking;
