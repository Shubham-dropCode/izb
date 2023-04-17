import React, { useEffect } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import {AiFillCaretRight , AiOutlineArrowRight, AiOutlineArrowUp} from "react-icons/ai"
import img1 from "../../assets/images/IZB/IZB Website Skin/Personal Acounts/7.png";
import { useState } from 'react';
import SavePlusAccountComponent from '../../Components/SavePlusAccount/SavePlusAccountComponent';
import ContainsArea from '../../Components/ContainsArea/ContainsArea';
import BackgroundBrundcrumb from "../../assets/images/IZB/IZB Website Skin/Personal_Loan/Image_1.png";



const IndoPersonalLoan = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const accountContent = "For meeting personal needs such as purchase of furniture/equipment, meeting social obligations, repair of houses etc."
  const [show, setShow] = useState(false);

  return (
    <>
    <Breadcrumb Heading="Personal Loan" img={BackgroundBrundcrumb}/>
    <SavePlusAccountComponent
        heading="Personal Loan"
        subHeading="Know About"
        btnTxt="Apply Now"
        content={accountContent}
        img={img1}
      />
      <ContainsArea />
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
                          Individuals (salaried and non-salaried). Inclusive of Memorandum of Understanding (M.O.U) loans
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
                          For meeting of personal needs
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
                    {show && <h5>SALARIED</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Undertaking from employer (M.O.U)
                        </p>
                      )}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Legal/equitable mortgage will be required where no undertaking or M.O.U is available
                        </p>
                      )}
                    {show && <h5>NON-SALARIED</h5>}
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Legal/Equitable mortgage
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
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          Maximum of 36 months
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
                       Note
                      </h3>
                    </div>
                    <div className="acc-content current">
                      {show && (
                        <p>
                          <AiFillCaretRight className="me-1" />
                          In case of more number of employees MOUs can be arranged with the respective employers. Please contact your nearest branch for further details.
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
    <AllAcountsSection/>
    </>
  )
}

export default IndoPersonalLoan