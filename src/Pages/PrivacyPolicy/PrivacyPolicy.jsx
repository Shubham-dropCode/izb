import React from "react";
import { useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import { newData } from "./PrivacyData";
import PrivacyAccordion from "./PrivacyAccordion";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb Heading="PrivacyPolicy" img={BackgroundBrundcrumb} />
      <div className="container mt-5">
        <div className="faq-style1__content">
          <ul className="accordion-box">
            {newData.map((item) => {
              const { id } = item.id;
              return <PrivacyAccordion key={id} {...item} />;
            })}
          </ul>
        </div>
      </div>
      <div className="col-xl-12 justify-content-center"></div>
      <AllAcountsSection />
    </>
  );
};

export default PrivacyPolicy;
