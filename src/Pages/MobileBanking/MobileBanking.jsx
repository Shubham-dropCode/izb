import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/Untitled-1.png";
import img from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/Untitled-2.png";
import MobileStoreButton from "react-mobile-store-button";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import img1 from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/icons/bank-statement.png";
import img4 from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/icons/money-transfer.png";
import img5 from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/icons/money.png";
import img6 from "../../assets/images/IZB/IZB Website Skin/Indo Mobile Banking/icons/online-banking.png";
import bannerPhones from "../../assets/images/IZB/IZB Website Skin/Home_Page/SliderPhone.png";
import bgimg from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/image_6.png";
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";


const MobileBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const textColor = {
    color: "#9E1B1E",
  };
  const iosUrl =
    "https://apps.apple.com/us/app/izb-retail-banking/id1507943733";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.izb&hl=en&gl=US";
  const content =
    "Indo Mobile Banking gives you access to your account on your mobile/tab device. Perform your banking tasks from the palm of your hand, from anywhere and at anytime!";
  return (
    <>
      <Breadcrumb Heading="Indo  Mobile Banking" img={BackgroundBrundcrumb} />
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
                <div className="d-flex align-items-center">
                  <MobileStoreButton
                    store="android"
                    className=""
                    url={androidUrl}
                    width="10.5rem"
                    linkProps={{ Title: "Google Play" }}
                  />
                  <MobileStoreButton
                    className="pt-2"
                    store="ios"
                    width="10rem"
                    url={iosUrl}
                    linkProps={{ Title: "IOS Store" }}
                  />
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
                    <img src={img4} alt="" />
                  </div>
                  <div className="text">
                    <h5>Money Transfers</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={img6} alt="" />
                  </div>
                  <div className="text">
                    <h5>Bank To wallet transfers</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={img5} alt="" />
                  </div>
                  <div className="text">
                    <h5>Pay Bills and Top up Airtime</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={img1} alt="" />
                  </div>
                  <div className="text">
                    <h5>Account Statement Requests & much more...</h5>
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
            <h2>How to Sign Up for Mobile Banking</h2>
            {/* <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div> */}
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                {/*Start Single Documents Box*/}
                <div
                  className="single-documents-box h-100"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <ul>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Go to your phones PlayStore/App Store and search for
                          IZB Retail Banking
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Download and install the IZB retails retail banking
                          app
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="inner-title">
                        <p className="text-white">
                          Open the application and click on GetStarted to open
                          the login page
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
                          Go to your phones PlayStore/App Store and search for
                          IZB Retail Banking
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
                        <p className="text-white lh-base">
                          After setting up your USERNAME and Password an
                          activation link will be sent toyour registered mobile
                          number and email. Open the activation link to activate
                          youraccount and login to transact.
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

      <section className="overview-area">
        <div className="container">
          <div className="row">
            <div
              className=" col-md-6 col-xl-6"
            >
              <div className="overview-content-box-one text-center">
                <img
                  src={bannerPhones}
                  width="360px"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 ">
              <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
                <div className="inner-title">
                  <h2 style={textColor}>INDO MOBILE BANKING</h2>
                  <div className="d-flex align-items-center gap-3 my-3">
                    <img src={img1} width={50} alt="" />
                    <h5>Anytime, Anywhere.</h5>
                  </div>
                  <p>
                    Indo Mobile Banking gives you access to your account on your
                    mobile/tab device. Perform your banking tasks from the palm
                    of your hand, from anywhere and at anytime!
                  </p>
                  <h3 className="py-3" style={textColor}>
                    USSD Dial *232#
                  </h3>
                </div>
                <div className="d-flex align-items-center">
                  <MobileStoreButton
                    store="android"
                    className=""
                    url={androidUrl}
                    width="9rem"
                    linkProps={{ Title: "Google Play" }}
                  />
                  <MobileStoreButton
                    className="pt-2"
                    store="ios"
                    width="8.5rem"
                    url={iosUrl}
                    linkProps={{ Title: "IOS Store" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile banking table */}

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
          IZB Mobile Banking Service Charges
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
                        <p>Target Groups</p>
                      </td>
                      <td className="location">
                        <p>
                          Children (underguidance) Individual and Joint Account
                          holders
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
                        <p>California</p>
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
                        <p>6% p.a payable twice-yearly</p>
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
                        <p>Free</p>
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
                        <p>K1,000/-</p>
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
                        <p>K25/-</p>
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
                        <p>N/A</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="department">
                        <h3>10.</h3>
                      </td>
                      <td className="location">
                        <p>SMS Alert</p>
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
};

export default MobileBanking;
