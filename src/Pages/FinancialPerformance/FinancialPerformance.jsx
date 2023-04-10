import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import FiniancialPerformanceComponent from "../../Components/FiniancialPerformanceComponent/FiniancialPerformanceComponent";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

const FinancialPerformance = () => {
  return (
    <>
      <Breadcrumb Heading="Indo Zambia Bank Financial Performance" img={BackgroundBrundcrumb} />
      <FiniancialPerformanceComponent />
      <AllAcountsSection />
    </>
  );
};

export default FinancialPerformance;
