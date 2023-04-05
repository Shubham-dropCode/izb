import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowUp } from "react-icons/ai";

const Accordion = ({question,answer}) => {
    const [show, setShow] = useState(false)
  return (
    <li className="accordion block active-block">
      <div className="acc-btn active">
        <div className="icon-outer">
            { show? <AiOutlineArrowRight/> : <AiOutlineArrowUp />

            }
        </div>
        <h3 onClick={() => setShow(!show)}>{question}</h3>
      </div>
      <div className="acc-content current">
       {show && <p>
         {answer}
        </p>}
      </div>
    </li>
  );
};

export default Accordion;
