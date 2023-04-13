import React from "react";
import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiFillCaretRight,
} from "react-icons/ai";

const InternationlAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <li className="accordion block active-block">
      <div className="acc-btn active">
        <div className="icon-outer">
          {show ? <AiOutlineArrowRight /> : <AiOutlineArrowUp />}
        </div>
        <h3 onClick={() => setShow(!show)}>{question}</h3>
      </div>

      {answer.map((item) => {
        return (
          <div className="acc-content current">
            {show && (
              <div>
                <h6>{item?.title}</h6>
                <p>
                  <AiFillCaretRight size={15} className="pe-1" />
                  {item?.item}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </li>
  );
};

export default InternationlAccordion;
