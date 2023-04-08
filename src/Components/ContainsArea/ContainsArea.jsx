import React from "react";
import Arrow_down from "../../assets/images/IZB/arrow_down.png";
import Arrow_right from "../../assets/images/IZB/arrow_right.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
const  ContainsArea = (props) => {

  return (
    <section
      className="page-contains-area"
      style={{ backgroundColor: "#FFF5E7" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="page-contains-box">
              <div className="page-contains-btn">
                <ul className="navigation clearfix scroll-nav">
                  <li className="current">
                    <a href="#benefits">
                      <img src={Arrow_down} />
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#eligibility">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Requirements
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Service Charges{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Service Charges{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#required">
                      <AiOutlineArrowRight size={14} className="me-1" />
                      Service Charges{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainsArea;
