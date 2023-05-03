import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import "../../Components/Hero/Hero.css";

const DisclaimerAccordion = ({ title, description }) => {
  const [show, setShow] = useState(false);

  return (
    <li className="accordion block active-block">
      <div
        className="acc-btn active"
        style={{ backgroundColor: "#9E1B1E", backgroundSize: "20px" }}
      >
        <div className="icon-outer">
          {show ? (
            <AiOutlineArrowRight className="text-white" />
          ) : (
            <AiOutlineArrowUp className="text-white" />
          )}
        </div>
        <h3 className="text-white" onClick={() => setShow(!show)}>
          {title}
        </h3>
      </div>
      <div className="acc-content current">
        {show && (
          <span>
            <ArrowR className="position-absolute mt-1 ms-4" />
            <p className="px-5">{description}</p>
          </span>
        )}
      </div>
    </li>
  );
};

export default DisclaimerAccordion;
