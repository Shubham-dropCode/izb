import React from 'react'
import { useState } from 'react';
import {
    AiOutlineArrowRight,
    AiOutlineArrowUp,
    AiFillCaretRight,
  } from "react-icons/ai";

const AutoFinanceAccordion = ({question,answer}) => {
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
                <AiFillCaretRight
                  size={15}
                  className="position-absolute mt-2 pe-1"
                  style={{marginLeft:"60px"}}
                />
                <p style={{paddingLeft:"80px" ,paddingRight:"80px"}}>{item.item}</p>
              </span>
            )}
          </div>
        );
      })}
      </li>
    );
}

export default AutoFinanceAccordion