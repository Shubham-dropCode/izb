import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { data } from "./VehicleDisclaimerData";
import DisclaimerAccordion from "./DisclaimerAccordion";

const Disclaimer1 = () => {
  console.log(data);
  return (
    <>
      <Breadcrumb Heading="Disclaimer" />
      <div className="container mt-5">
        <div className="faq-style1__content">
          <ul className="accordion-box">
            {data.map((item) => {
              const { id } = item.id;
              return <DisclaimerAccordion key={id} {...item} />;
            })}
          </ul>
        </div>
      </div>
      <div className="col-xl-12 justify-content-center"></div>
      <AllAcountsSection />
    </>
  );
};

export default Disclaimer1;
