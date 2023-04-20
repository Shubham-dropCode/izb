import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Image_2.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import Benefits from "../../Components/Benefits/Benefits";
import percent from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/percentage.png";
import CC from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/credit-card.png";
import EmailAlert from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/alert.png";
import monitor from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/monitor.png";
import atm from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/Icons/atm.png";
import booking from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/booking.png";
import file from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/file.png";
import transferMoney from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Icons/transfer-money.png";
import { AiFillCaretRight } from "react-icons/ai";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/IZB Classic Savings Account/Image_1.png";
import { useEffect } from "react";
import ClassicSavingsTable from "../../Components/ServiceTable/ClassicSavingsAccTable";


const ClassicSavingAcc = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent =
    "This is a standard level savings account with value addedfeatures of SMS alerts, Internet Banking with the IZB Visa Chip & Pin Debit Card facilities and is as an interest bearing savings account.";
  return (
    <>
      <Breadcrumb Heading="Classic Saving Account" img={BackgroundBrundcrumb}/>
      <SavePlusAccountComponent
        heading="IZB Classic Savings Account"
        subHeading="Know About"
        content={accountContent}
        img={img1}
        btnTxt="Open an Account"
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
                    <img src={percent} alt="" />
                  </div>
                  <div className="text">
                    <h5>Attractive Intrest</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={CC} alt="" />
                  </div>
                  <div className="text">
                    <h5>IZB contactless Card</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={EmailAlert} alt="" />
                  </div>
                  <div className="text">
                    <h5>SMS alert</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={monitor} alt="" />
                  </div>
                  <div className="text">
                    <h5>Internet Banking</h5>
                  </div>
                </div>
              </li>

              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={file} alt="" />
                  </div>
                  <div className="text">
                    <h5>Free monethly statement</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={atm} alt="" />
                  </div>
                  <div className="text">
                    <h5>Free balance enquiry on IZB atm</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={transferMoney} alt="" />
                  </div>
                  <div className="text">
                    <h5>Electronic funds transfer</h5>
                  </div>
                </div>
              </li>
              <li className="col-xl-3 col-lg-3 single-choose-style1-colum text-center">
                <div className="single-choose-style1">
                  <div className="icon">
                    <img src={booking} alt="" />
                  </div>
                  <div className="text">
                    <h5>Mobile banking facility</h5>
                  </div>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="eligibility" class="eligibility-area" style={{backgroundColor:"#FFF5E7"}}>
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>IZB Classic Savings A/C Required Documents</h2>
            <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div>
          </div>
          <div className="container">
            
          
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    Account opening application form.
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                   <h3 className="text-white">
                  Initial cash deposit of K250.00.                </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-4 col-lg-6 mb-0">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-100" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <p className="text-white">One reference (applicant’s employer or account holder of Indo -Zambia Bank maintaining a good account with us).</p>
                </div>
                <div className="inner-title">
                  <h3 className="text-white">Proof of residence</h3>
                </div>
                <ul>
                  <li>
                    <p className='text-white lh-base'>
                    <AiFillCaretRight size={15} className='pe-1'/>
                        
                        Minimum of k1000 per month to be maintained.</p>
                  </li>
                  <li>
                  <p className='text-white lh-base'>
                    <AiFillCaretRight size={15} className='pe-1'/>
                        
                       T-Pin.</p>
                  </li>
                  
                </ul>
              </div>
              {/*End Single Documents Box*/}
            </div>
           
            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                  Copy of NRC/Passport
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                  Two recent passport 
                  size photographs.
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            </div>
          </div>
        </div>
      </section>
      <ClassicSavingsTable />
      <AllAcountsSection />
    </>
  );
};

export default ClassicSavingAcc;
