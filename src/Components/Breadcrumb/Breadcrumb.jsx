import React from "react";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import { Link } from "react-router-dom";

const Breadcrumb = ({Heading}) => {
  return (
    <section className="breadcrumb-area"> 
      <div className="container-fluid" style={{ backgroundColor: "#FFF5E7" }}>
        <div className="container py-2">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner-content">
                <div
                  className="breadcrumb-area-bg title d-flex justify-content-center align-items-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration={500}
                  style={{
                    backgroundImage: `url(${BackgroundBrundcrumb})`,
                    height: "300px",
                  }}
                >
                  <h1 className="text-white">{Heading}</h1>
                </div>
                <div
                  className="breadcrumb-menu d-flex justify-content-end"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration={500}
                >
                  <ul className="d-flex">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      {" "}
                      <ArrowR className="mx-1" />
                    </li>
                    <li className="active">{Heading}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
