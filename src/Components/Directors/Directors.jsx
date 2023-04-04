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
  };
  const before = data[1];
  const after = data[2];
  console.log(data);
  return (
    <section className="">
      <div className="container">
        {before.map((item) => {
          return (
            <div className="row border justify-content-sm-center p-4 my-5">
              <div className="col-12 col-md-3 col-xl-3">
                <img src={item.Image} className="border" alt="" />
              </div>
              <div className="col-12 col-md-9 col-xl-9">
                <h3>{item.Name}</h3>
                <div
                  className="text col-3 text-white text-center mb-4 mt-2"
                  style={designationStyle}
                >
                  {item.Designation}
                </div>
                <p>
                 {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

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
                  <h1 className="text-white">Executive Manager</h1>
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
                <h3>{item.Name}</h3>
                <div
                  className="text col-3 text-white text-center mb-4 mt-2"
                  style={designationStyle}
                >
                  {item.Designation}
                </div>
                <p>
                 {item.description}
                </p>
              </div>
            </div>
            </div>
            

          );
        })}
    </section>
  );
};

export default Directors;
