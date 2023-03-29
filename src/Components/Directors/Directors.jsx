import React from "react";
import img1 from "../../assets/images/IZB/IZB Website Skin/Board_of_Directors/1.png";

const Directors = () => {
  const designation = {
    backgroundColor: "#C60000",
    fontFamily: "inter",
    fontWeight: "300",
    letterSpacing: "1.5px",
    fontSize: "17px",
  };
  return (
    <section className="">
      <div className="container">
        <div className="row border p-4">
          <div className="col-3">
            <img src={img1} className="border" alt="" />
          </div>
          <div className="col-9">
            <h3>Dr. Michael Gondwe</h3>
            <div
              className="text col-3 text-white text-center mb-4 mt-2"
              style={designation}
            >
              Board Chairperson
            </div>
            <p>
              Dr. Gondwe is an eminent and highly distinguished Zambian lawyer
              with a wealth of leadership experience of over 35years in the
              Banking and Financial Sector. He is a former Governor of the Bank
              of Zambia and former President and CEO of the Eastern and Southern
              African Trade and Development Bank, commonly known as the PTA
              Bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;
