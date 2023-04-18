import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";

const SavePlusAccountComponent = ({
  heading,
  subHeading,
  content,
  img,
  btnTxt,
  link,
}) => {
  return (
    <section className="overview-area">
      <div className="container">
        <div className="row">
          <div className=" offset-xl-1 col-md-4 col-xl-4">
            <div className="overview-content-box-one">
              <img src={img} width="100%" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title">
                <h5>{subHeading}</h5>
                <h2>{heading}</h2>
              </div>
              <div className="text">
                <p>{content}</p>
              </div>
              <Link to={link}>
                <button
                  className="btn btn-danger w-50 text-white fs-5"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  <BsBank className="me-4 mb-1 text-white" size={25} />
                  {btnTxt}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavePlusAccountComponent;
