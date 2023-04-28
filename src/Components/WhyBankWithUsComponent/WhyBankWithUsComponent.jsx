import React from "react";
import growth from "../../assets/images/IZB/IZB Website Skin/Why bank with us/icons/growth.png";
import Fingerprint from "../../assets/images/IZB/IZB Website Skin/Why bank with us/icons/fingerprint.png";
import Shield from "../../assets/images/IZB/IZB Website Skin/Why bank with us/icons/shield.png";
import AllAcountsSection from "../AllAccountsSection/AllAcountsSection";

const WhyBankWithUsComponents = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-5">
          <h2>About Indo Zambia Bank</h2>
        </div>
        <div className="col-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10">
          <div
            className="row border  justify-content-sm-center my-5 "
            style={{ backgroundColor: "#9E1B1E" }}
          >
            <div className="col-12 col-md-3 col-xl-3 shadow text-center p-3">
              <img src={growth} width={180} className="" alt="" />
            </div>
            <div className="col-12 col-md-9 col-xl-9 text-white align-self-center">
              <h3 className="text-white text-center text-md-start my-3">
                Growth
              </h3>
              <p className="py-2">
                Your Money grows with us, as returns are assured As a bank we
                are growing at the rate of 25% We have a national branch network
                coverage of 34 outlets We are enabling the growth of the economy
                by promoting financial inclusion especially for women.
              </p>
            </div>
          </div>
          <div
            className="row border justify-content-sm-center my-5"
            style={{ backgroundColor: "#9E1B1E" }}
          >
            <div className="col-12 col-md-3 col-xl-3 shadow text-center p-3">
              <img src={Shield} width={180} className="" alt="" />
            </div>
            <div className="col-12 col-md-9 col-xl-9 text-white align-self-center">
              <h3 className="text-white text-center text-md-start my-3">
                Safety
              </h3>
              <p className="py-2">
                A bank with impeccable and consistent record of excellent
                performance under all major financial parameters for the last 36
                years; A bank which has unique shareholding pattern with
                participation of two governments; the government of the republic
                of Zambia through industrial development corporation and the
                government of India.
              </p>
            </div>
          </div>
          <div
            className="row border justify-content-sm-center my-5"
            style={{ backgroundColor: "#9E1B1E" }}
          >
            <div className="col-12 col-md-3 col-xl-3 shadow text-center p-3">
              <img src={Fingerprint} width={180} className="" alt="" />
            </div>
            <div className="col-12 col-md-9 col-xl-9 text-white align-self-center">
              <h3 className="text-white text-center text-md-start my-3">
                Human Touch
              </h3>
              <p className="py-2">
                A technology savvy bank with a gentle human face. The credo is
                at building relationships Ingenuity and flexible solutions
                worked out for each customer The extra “interest” over normal
                interest The service you need with expertise you desire.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AllAcountsSection />
    </section>
  );
};

export default WhyBankWithUsComponents;
