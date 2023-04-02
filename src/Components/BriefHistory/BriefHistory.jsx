import React from "react";
const BriefHistory = ({heading,image,content}) => {
  return (
    <section className="overview-area">
      <div className="container">
        <div className="row">
          <div className=" offset-xl-1 col-md-4 col-xl-4">
            <div className="overview-content-box-one">
              <img src={image} width="100%" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
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
