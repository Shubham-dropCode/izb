import React from "react";
import BriefHistoryImg from "../../assets/images/IZB/Brief History.png";
const BriefHistory = () => {
  return (
    <section className="overview-area">
      <div className="container">
        <div className="row">
          <div className=" offset-xl-1 col-md-4 col-xl-4">
            <div className="overview-content-box-one">
              <img src={BriefHistoryImg} width="100%" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="overview-content-box-two h-100 d-flex flex-column justify-content-center">
              <div className="inner-title">
                <h2>Brief History</h2>
              </div>
              <div className="text">
                <p>
                Indo Zambia Bank was formed on 19th October, 1984 by the Government of the Republic of Zambia and the Government of India out of the desire to promote banking facilities to support the economic development of Zambia.
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
