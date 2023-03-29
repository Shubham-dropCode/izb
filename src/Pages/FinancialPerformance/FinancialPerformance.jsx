import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import FiniancialPerformanceComponent from "../../Components/FiniancialPerformanceComponent/FiniancialPerformanceComponent";

const FinancialPerformance = () => {
  return (
    <>
      <Breadcrumb Heading="Indo Zambia Bank Financial Performance" />
      <FiniancialPerformanceComponent />
      <AllAcountsSection />
    </>
  );
};

export default FinancialPerformance;
