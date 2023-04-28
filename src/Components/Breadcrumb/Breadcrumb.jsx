import React from "react";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Breadcrumb = ({ Heading, img, show, btnTxt, paths }) => {
  console.log(paths);
  return (
    <section className="breadcrumb-area">
      <div
        className="container-fluid py-2"
        style={{ backgroundColor: "#FFF5E7" }}
      >
        <div className="row">
          <div className="col-xl-12">
            <div className="inner-content" style={{ margin: "0 40px 0 40px" }}>
              <div
                className="breadcrumb-area-bg title d-flex justify-content-center align-items-center position-relative"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration={500}
                style={{
                  backgroundImage: `url(${img})`,
                  height: "300px",
                }}
              >
                <h1 className="text-white">{Heading}</h1>
              </div>
              <div
                className="breadcrumb-menu position-relative offset-md-10 offset-lg-9 pt-2 d-flex "
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration={500}
              >
                {show && (
                  <div
                    className="btn position-absolute col-2 shadow px-2 py-3 d-none d-md-block"
                    style={{
                      right: "301%",
                      width: "250px",
                      backgroundColor: "#FFF",
                      bottom: "-25%",
                      borderTop: "0.3rem outset #9E1B1E",
                    }}
                  >
                    <h5 style={{ color: "#9E1B1E" }}>{btnTxt}</h5>
                  </div>
                )}
                <ul className="d-flex justify-content-sm-center">
                  <li>
                    {/* {paths.map((path)=>{
                      return{
                        
                      }
                    })} */}
                    <Link to="/">Home</Link>
                    <ArrowR className="mx-1" />
                    {Heading}
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

export default Breadcrumb;
