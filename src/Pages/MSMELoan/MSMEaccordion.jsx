import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiFillCaretRight,
} from "react-icons/ai";

const MSMEaccordion = ({ question, answer }) => {
  console.log(answer);
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
              <span>
              <AiFillCaretRight className="position-absolute mt-2 ms-4" />
              <p className="px-5">{item.item}</p>
            </span>
            )}
          </div>
        );
      })}
    </li>
  );
};

export default MSMEaccordion;
