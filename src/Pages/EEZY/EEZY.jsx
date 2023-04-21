import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import MobileStoreButton from "react-mobile-store-button";
import img from "../../assets/images/IZB/IZB Website Skin/Indo EEZY/Untitled-2.png";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/IZB Contactless Card/Untitled-1.png";
import ServiceTable from "../../Components/ServiceTable/ServiceTable";
import { useEffect } from "react";

const EEZY = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const iosUrl =
    "https://apps.apple.com/us/app/izb-retail-banking/id1507943733";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.izb&hl=en&gl=US";
  const content =
    "Indo Mobile Banking gives you access to your account on your mobile/tab device. Perform your banking tasks from the palm of your hand, from anywhere and at anytime!";
  return (
    <>
      <Breadcrumb Heading="Indo EEZY" img={BackgroundBrundcrumb} />
      <section className="overview-area">
        <div className="container">
          <div className="row">
            <div className=" offset-xl-1 col-md-4 col-xl-4">
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

      <section>
        <div className="container my-5">
          <div className="row gap-3 justify-content-center">
            <div className="heading text-center">
              <h1>Simple Steps to Open an Account</h1>
              <p>We help business and cutomers achieve more.</p>
            </div>
            <div className="col-md-2 text-wrap d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor:"#9E1B1E", height:"12em"}}>
              <h5 className="text-white">Step 1</h5>
              <p className="text-center">Download the Indo Zambia Bank App.</p>
            </div>
            <div className="col-md-2 text-wrap d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor:"#9E1B1E", height:"12em"}}>
              <h5 className="text-white">Step 2</h5>
              <p className="text-center">Register as a new customer or existing customer.</p>
            </div>
            <div className="col-md-2 text-wrap d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor:"#9E1B1E", height:"12em"}}>
              <h5 className="text-white">Step 3</h5>
              <p className="text-center">
                Submit details and wait whilst your account is being activated.
              </p>
            </div>
            <div className="col-md-2 text-wrap d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor:"#9E1B1E", height:"12em"}}>
              <h5 className="text-white">Step 4</h5>
              <p className="text-center">Account Opened</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceTable title="Indo EEZY Service Charges"/>
      <AllAcountsSection />
    </>
  );
};

export default EEZY;
