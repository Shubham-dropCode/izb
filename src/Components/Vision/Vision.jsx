import React from "react";
import BPromise from '../../assets/images/IZB/BPromise.png'
import VisionImg from '../../assets/images/IZB/Vision.png'
import Mission from '../../assets/images/IZB/Mission.png'

const Vision = () => {
  return (
    <section className="">
      <div className="container pb-5">
        <div className="text-center mb-5">
          <h2>About Indo Zambia Bank</h2>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-xl-10">
            <div className="statements-content-box">
              <ul>
                <li>
                  <div className="single-statements-box">
                    <div className="img-box">
                      <img
                        src={VisionImg}
                        alt=""
                      />
                      <div className="static-content">
                        <h2>VISION</h2>
                        <p className="text-white">To become the bank of choice for <br/>all retail and corporate customers</p>
                      </div>
                      <div className="overlay-content">V</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-statements-box">
                    <div className="img-box">
                      <img
                        src={Mission}
                        alt=""
                        style={{height:"320px"}}
                      />
                      <div className="static-content">
                        <h2>MISSION</h2>
                        <p className="text-white">To act as the catalyst for the economic development of Zambia</p>
                      </div>
                      <div className="overlay-content">M</div>
                    </div>
                  </div>
                  <div className="single-statements-box">
                    <div className="img-box">
                      <img
                        src={BPromise}
                        alt=""
                        style={{height:"320px"}}
                      />
                      <div className="static-content">
                        <h2>BRAND PROMISE</h2>
                        <p className="text-white">Brand Promise</p>
                      </div>
                      <div className="overlay-content">B</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
