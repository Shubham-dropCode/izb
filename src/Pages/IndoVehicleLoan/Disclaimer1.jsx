import React, { useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { data , newData } from "./VehicleDisclaimerData";
import DisclaimerAccordion from "./DisclaimerAccordion";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";


const Disclaimer1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Breadcrumb Heading="Disclaimer" img={BackgroundBrundcrumb} />
      <div className="container mt-5">
        <div className="faq-style1__content">
          <ul className="accordion-box">
            {data.map((item) => {
              const { id } = item.id;
              return <DisclaimerAccordion key={id} {...item} />;
            })}
          </ul>
        </div>
        <div className="bg-light p-3 shadow mb-4">
          Terms and Conditions Apply
        </div>
      </div>
      <div className="col-xl-12 justify-content-center"></div>
      <AllAcountsSection />
    </>
  );
};

export default Disclaimer1;
