import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import AllAcountsSection from "../../Components/AllAccountsSection/AllAcountsSection";
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/6.png";
import SavePlusAccountComponent from "../../Components/SavePlusAccount/SavePlusAccountComponent";
import ContainsArea from "../../Components/ContainsArea/ContainsArea";
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Home_Loan/Image_1.png";

import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiFillCaretRight,
} from "react-icons/ai";
import { accountContains } from "../../Data/ContainAreaData";
import { useState } from "react";
console.log(accountContains);

const IndoHomeLoan = () => {
  const accountContent =
    "Looking to buy or renovate. Spruce up your property portfolio with an IZB home loan. Whether you would like a new kitchen or want to give your lounge a new lease of life, you could get more from your home.";
  const data = [
    "Eligibility",
    "Purpose",
    "security",
    "customers contribution",
    "Repayment Period",
  ];
  const [show, setShow] = useState(false);

  return (
    <>
      <Breadcrumb Heading="Indo Home Loan" img={BackgroundBrundcrumb} />
      <SavePlusAccountComponent
        heading="Indo Home Loan"
        subHeading="Know About"
        btnTxt="Apply Now"
        content={accountContent}
        img={img1}
      />
      <ContainsArea title={accountContains} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 justify-content-center">
              <div className="faq-style1__content">
                <ul className="accordion-box mt-5">
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Eligibility
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Individuals (salaried and unsalaried)
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Purpose
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Outright Purchase of a ready-made
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Purchase of a Plot and construction of a house or
                          construction of a house on an already existing plot,
                          within a maximum period of 18 months
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Home Improvement – For
                          repairs/renovation/alteration/extension in the
                          existing house/ﬂat
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Takeover/Reﬁnance of home loans availed from other
                          ﬁnancial institutions
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Security
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Legal mortgage of property purchased or developed out
                          of bank ﬁnance
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Customer Contribution
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && <h5>FOR SALARIED BORROWER</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 90% of the cost of the project up to K 00
                          million (i.e., minimum customer margin/ contribution
                          of 10%).
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 75% of the cost of the project above K 00
                          million (i.e., minimum customer margin/ contribution
                          of 25%).
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Takeover/Reﬁnance of existing home loans availed from
                          other ﬁnancial institutions – loan amount to be Indo
                          Home Loan Scheme restricted to the transfer amount
                          plus any additional amount required to carry out
                          additional/improvement works.
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 75% of the cost of
                          repairs/renovations/alterations of existing house/ﬂat
                          subject to a maximum of 50 million subject of debt
                          service ratio norm.
                        </p>
                      )}
                      <hr style={{ color: "#9E1B1E" }} />
                      {show && <h5>NON-SALARIED BORROWER</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 80% of the cost of the project up to 00 million
                          i.e., minimum customer margin/ contribution of 20%
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 75% of the cost of the project above 00 million
                          i.e., minimum customer margin/ contribution of 25%
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Takeover/Reﬁnance of existing home loans availed from
                          other ﬁnancial institutions – loan amount to be
                          restricted to the transfer amount plus any additional
                          amount required to carry out additional/ improvement
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Up to 75% of the cost of
                          repairs/renovations/alterations of existing house/ﬂat
                          subject to a maximum of 50 million subject to debt
                          service ratio norm.
                        </p>
                      )}
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div
                      className="acc-btn active"
                      style={{
                        backgroundColor: "#9E1B1E",
                        backgroundSize: "20px",
                      }}
                    >
                      <div className="icon-outer text-white">
                        {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
                      </div>
                      <h3 className="text-white" onClick={() => setShow(!show)}>
                        Repayment Period
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && <h5>SALARIED BORROWER</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Maximum repayment period of 240 months within the
                          borrower attaining the age of 60
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          In case of repairs/renovation/alterations of existing
                          house/ﬂat repayment should be made within a maximum
                          period of 120 months, subject to the borrower
                          attaining the age of 60 years.
                        </p>
                      )}
                      <hr style={{ color: "#9E1B1E" }} />
                      {show && <h5>NON-SALARIED BORROWER</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Maximum repayment period of 240 months within the
                          borrower attaining 65 years
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          In case of repairs/renovation/alterations of existing
                          house/ﬂat repayment should be made within a maximum
                          period of 120 months.
                        </p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-light p-3 mt-4">
              <h6 style={{ color: "#9E1B1E" }}> Terms and Conditions Apply</h6>{" "}
            </div>
          </div>
        </div>
      </section>
      <AllAcountsSection />
    </>
  );
};

export default IndoHomeLoan;
