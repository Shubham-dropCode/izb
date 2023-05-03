import React from "react";
import Img1 from "../../../assets/images/IZB/IZB Website Skin/Home_Page/New/1.png";
import { Link } from "react-router-dom";

const TisungeSavings = () => {
  const img = {
    backgroundImage: `url(${Img1})`,
    height: "270px",
    width: "270px",
  };
  return (
    <div style={img} className="col-3">
      <div className="text-white p-3" style={{textAlign:"left"}}>
        <h4 className="text-white">Tisunge Savings A/C</h4>
        <p>
          This is the next level savings which provides account holders with the
          convenience of an IZB Visa Contactless Debit Card.
        </p>
      </div>
      <div className="button-box text-center h-25 d-flex justify-content-end p-3">
        <Link to="/TisungoSaving">
          <button
            className="btn-one p-1"
            style={{ lineHeight: "30px" }}
            type="submit"
          >
            <span className="txt">Create Account</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TisungeSavings;
