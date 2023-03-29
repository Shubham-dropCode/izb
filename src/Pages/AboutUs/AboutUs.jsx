import React from "react";
// import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import BriefHistory from "../../Components/BriefHistory/BriefHistory";
import Vision from "../../Components/Vision/Vision";
import CoreValues from "../../Components/CoreValues/CoreValues";
import ShareHolders from "../../assets/images/IZB/Shareholders.jpg"

import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";

const AboutUs = () => {
  return (
    <>
    <Breadcrumb/>
    <BriefHistory/>
    <Vision/>
    <CoreValues/>
    <div className="container">
      <div className="heading py-5">
        <h2 className="text-center">Shareholders of the bank</h2>
      </div>
      <div className="d-flex justify-content-center">
        <img src={ShareHolders} width="80%" alt="" />
      </div>
    </div>
   <AllAcountsSection/>
    </>
  );
};

export default AboutUs;
