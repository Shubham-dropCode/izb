import React from "react";
import img1 from "../../assets/images/IZB/IZB Website Skin/Board_of_Directors/1.png";
import data from "../../Data/BoardOfDirector.json";
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

const Directors = () => {
  const designationStyle = {
    backgroundColor: "#C60000",
    fontFamily: "inter",
    fontWeight: "300",
    letterSpacing: "1.5px",
    fontSize: "17px",
    textAlign: "left",
  };
  const before = data[1];
  const after = data[2];
  console.log(data);
  return (
    <section className="">
      <div className="container">
        {before.map((item) => {
          return (
            <div className="row border justify-content-sm-center  p-4 my-5">
              <div className="col-12 col-md-3 col-xl-3">
                <img src={item.Image} className="border" alt="" />
              </div>
              <div className="col-12 col-md-9 col-xl-9">
                <h3 style={{ textAlign: "left" }}>{item.Name}</h3>
                <div
                  className="text col-12 col-md-4 col-lg-4 col-xl-4  text-white ps-1 mb-4 mt-2 "
                  style={designationStyle}
                >
                  <p>{item.Designation}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-xl-12">
            <div className="inner-content" style={{ margin: "0 40px 0 60px" }}>
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
                <h1 className="text-white">Executive Management</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {after.map((item) => {
        return (
          <div className="container">
            <div className="row border justify-content-sm-center p-4 my-5">
              <div className="col-12 col-md-3 col-xl-3">
                <img src={item.Image} className="border" alt="" />
              </div>
              <div className="col-12 col-md-9 col-xl-9">
                <h3 style={{ textAlign: "left" }}>{item.Name}</h3>
                <div
                  className="text col-12 col-md-5 col-lg-5 col-xl-5 text-white ps-1 mb-4 mt-2"
                  style={designationStyle}
                >
                  {item.Designation}
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Directors;
