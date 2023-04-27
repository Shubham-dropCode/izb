import React from "react";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import { Link } from "react-router-dom";

const Breadcrumb = ({ Heading, img }) => {
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
                className="breadcrumb-area-bg title d-flex justify-content-center align-items-center"
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
                className="breadcrumb-menu offset-md-8 offset-lg-8 pt-2 d-flex position-relative "
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration={500}
              >
                <div className="btn position-absolute shadow px-2 py-3" style={{right:"208%" ,width: "250px",backgroundColor:"#FFF",bottom:"-25%",borderTop:"0.3rem outset #9E1B1E"}}>
                  <h5 style={{color:"#9E1B1E"}}>Open an Account</h5>
                </div>
                <ul className="d-flex justify-content-sm-center">
                  <li>
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
