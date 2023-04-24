import React, { useEffect } from "react";
// import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import BriefHistory from "../../Components/BriefHistory/BriefHistory";
import Vision from "../../Components/Vision/Vision";
import CoreValues from "../../Components/CoreValues/CoreValues";
import ShareHolders from "../../assets/images/IZB/Shareholders.jpg"
import BriefHistoryImg from "../../assets/images/IZB/Brief History.png";


import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Breadcrumb Heading="About Us" img={BackgroundBrundcrumb}/>
    <BriefHistory heading ="Brief History" content="Indo Zambia Bank was formed on 19th October, 1984 by the Government of the Republic of Zambia and the Government of India out of the desire to promote banking facilities to support the economic development of Zambia." image={BriefHistoryImg}/>
    <Vision/>
    <CoreValues/>
    <div className="container mb-5">
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
