import React from "react";
const BriefHistory = ({heading,image,content}) => {
  
  return (
    <section className="overview-area">
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1 col-xl-5 ps-0">
            <div className="overview-content-box-one">
              <img src={image} width="100%" alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-md-5">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title">
                <h2>{heading}</h2>
              </div>
              <div className="text">
                <p>
               {content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefHistory;
