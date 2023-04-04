import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import BoardOfDirectors from "./Pages/BoardOfDirectors/BoardOfDirectors";
import FinancialPerformance from "./Pages/FinancialPerformance/FinancialPerformance";
import WhyBankWithUs from "./Pages/WhyBankWithUs/WhyBankWithUs";
import SavePlusAccount from "./Pages/SavePlusAccount/SavePlusAccount";
import ClassicSavingAcc  from "./Pages/ClassicSavingAcc/ClassicSavingAcc";
import PrivilageSavingAcc from "./Pages/PrivilageSavingAcc/PrivilegeSaving"
import TisungoSaving from "./Pages/TisungoSaving/TisungeSavingsAcc"
import TonseSavingAcc from "./Pages/TonseSavingAcc/TonseSavingAcc"
import IndoHomeLoan from "./Pages/IndoHomeLoan/IndoHomeLoan"
import IndoPersonalLoan from "./Pages/IndoPersonalLoan/IndoPersonalLoan"
import IndoVehicleLoan from "./Pages/IndoVehicleLoan/IndoVehicleLoan"
import BhumiFixedDepositAccount from "./Pages/BhumiFixedDepositAccount/BumiFixedDepositAccount"
import IndoFastServe from "./Pages/IndoFastServe/IndoFastServe"
import PrivilegeCurrentAcc from "./Pages/PrivilegeCurrentAcc/PrivilegeCurrentAcc"
import ClassicCurrentAccount from "./Pages/ClassicCurrentAccount/ClassicCurrentAccount"
import SMECurrentAcc from "./Pages/SMECurrentAcc/SMECurrentAccount"
import MSMELoan from "./Pages/MSMELoan/MSMELoan"
import TermLoan from "./Pages/TermLoan/TermLoan"
import AutoFinance from "./Pages/AutoFinance/AutoFinance"
import AgroFinance from "./Pages/AgroFinance/AgroFinance"
import EquityRelease from "./Pages/EquityRelease/EquityRelease"
import BusinessFinance from "./Pages/BusinessFinance/BusinessFinance"
import WorkingCapitalFinance from "./Pages/WorkingCapitalFinance/WorkingCapitalFinance"
import LeaseRentalDiscounting from "./Pages/LeaseRentalDiscounting/LeaseRentalDiscounting"
import InternationalBankingForeignBusiness from "./Pages/InternationalBankingForeignBusiness/InternationalBankingForeignBusiness"
import ForexSavings from "./Pages/ForexSavings/ForexSavings"
import ForexCurrent from "./Pages/ForexCurrent/ForexCurrent"
import MobileBanking from "./Pages/MobileBanking/MobileBanking"
import NetBanking from "./Pages/NetBanking/NetBanking"
import ContactlessCard from "./Pages/ContactlessCard/ContactlessCard"
import EEZY from "./Pages/EEZY/EEZY"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/BoardOfDirectors" element={<BoardOfDirectors />} />
          <Route path="/FinancialPerformance" element={<FinancialPerformance />} />
          <Route path="/WhyBankWithUs" element={<WhyBankWithUs />} />
          <Route path="/SavePlusAccount" element={<SavePlusAccount />} />
          <Route path="/ClassicSavingAcc" element={<ClassicSavingAcc />} />
          <Route path="/PrivilageSavingAcc" element={<PrivilageSavingAcc />} />
          <Route path="/TisungoSaving" element={<TisungoSaving />} />
          <Route path="/TonseSavingAcc" element={<TonseSavingAcc />} />
          <Route path="/IndoHomeLoan" element={<IndoHomeLoan />} />
          <Route path="/IndoPersonalLoan" element={<IndoPersonalLoan />} />
          <Route path="/IndoVehicleLoan" element={<IndoVehicleLoan />} />
          <Route path="/BhumiFixedDepositAccount" element={<BhumiFixedDepositAccount />} />
          <Route path="/IndoFastServe" element={<IndoFastServe />} />
          <Route path="/PrivilegeCurrentAcc" element={<PrivilegeCurrentAcc />} />
          <Route path="/ClassicCurrentAccount" element={<ClassicCurrentAccount />} />
          <Route path="/SMECurrentAcc" element={<SMECurrentAcc />} />
          <Route path="/MSMELoan" element={<MSMELoan />} />
          <Route path="/TermLoan" element={<TermLoan />} />
          <Route path="/AutoFinance" element={<AutoFinance />} />
          <Route path="/AgroFinance" element={<AgroFinance />} />
          <Route path="/EquityRelease" element={<EquityRelease />} />
          <Route path="/BusinessFinance" element={<BusinessFinance />} />
          <Route path="/WorkingCapitalFinance" element={<WorkingCapitalFinance />} />
          <Route path="/LeaseRentalDiscounting" element={<LeaseRentalDiscounting />} />
          <Route path="/InternationalBankingForeignBusiness" element={<InternationalBankingForeignBusiness />} />
          <Route path="/ForexSavings" element={<ForexSavings />} />
          <Route path="/ForexCurrent" element={<ForexCurrent />} />
          <Route path="/MobileBanking" element={<MobileBanking />} />
          <Route path="/NetBanking" element={<NetBanking />} />
          <Route path="/ContactlessCard" element={<ContactlessCard />} />
          <Route path="/EEZY" element={<EEZY />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
