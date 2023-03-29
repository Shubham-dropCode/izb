import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const FiniancialPerformanceComponent = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="faq-style1__content">
            <ul className="accordion-box">
              <li
                onClick={() => setIsActive(!isActive)}
                className="accordion block active-block"
              >
                <div
                  className="acc-btn active"
                  style={{ backgroundColor: "#9E1B1E", backgroundSize: "20px" }}
                >
                  <div className="icon-outer text-white">
                    <AiOutlineArrowRight size={20} />
                  </div>
                  <h3 className="text-white">What is the minimum balance?</h3>
                </div>
                <div className="acc-content current">
                  {isActive && (
                    <div className="row">
                      <div className="col-sm-6 col-md-3 col-xl-3">
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p><strong>Report - 2021</strong></p>
                            <div className="btn-one">
                                <a href=""></a>
                            </div>
                        </div>

                      </div>
                      <div className="col-sm-6 col-md-3 col-xl-3">hi</div>
                      <div className="col-sm-6 col-md-3 col-xl-3">hi</div>
                      <div className="col-sm-6 col-md-3 col-xl-3">hi</div>
                    </div>
                  )}
                </div>
              </li>
              <li
                onClick={() => setIsActive(!isActive)}
                className="accordion block active-block"
              >
                <div
                  className="acc-btn active"
                  style={{ backgroundColor: "#9E1B1E", backgroundSize: "20px" }}
                >
                  <div className="icon-outer text-white">
                    <AiOutlineArrowRight size={20} />
                  </div>
                  <h3 className="text-white">What is the minimum balance?</h3>
                </div>
                <div className="acc-content current">
                  {isActive && (
                    <p>
                      Rationally encounter consequences that are extremely
                      painful again there anyone who loves or pursues desire.
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiniancialPerformanceComponent;
