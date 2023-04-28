import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../Hero/Hero.css";

const SavePlusAccountComponent = ({
  heading,
  subHeading,
  content,
  img,
  btnTxt,
  link,
  logo,
  showBtn
}) => {
  const textColor = {
    color: "#949292",
  };
  return (
    <section className="overview-area SaveAccountSection">
      <div className="container">
        <div className="row">
          <div className=" offset-md-1 col-md-5 col-xl-5">
            <div className="overview-content-box-one">
              <img src={img} width="100%" alt="" />
            </div>
          </div>
          <div className="col-xl col-md ">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title">
                <h5>{subHeading}</h5>
                <h2 style={{ color: "#484848" }}>{heading}</h2>
              </div>
              <div className="text">
                <p style={textColor}>{content}</p>
              </div>
              {showBtn ?? 
              <Link to={link}>
                <button
                  className="btn btn-danger text-white fs-5"
                  style={{ backgroundColor: "#9E1B1E" }}
                >
                  {logo ?? (
                    <BsBank className="me-4 mb-1 text-white" size={25} />
                  )}
                  {btnTxt}
                </button>
              </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavePlusAccountComponent;
