import React from "react";
import Img1 from "../../../assets/images/IZB/IZB Website Skin/Home_Page/New/1.png";
import { Link } from "react-router-dom";

const SavePlusCard = () => {
  const img = {
    backgroundImage: `url(${Img1})`,
    height: "270px",
    width: "270px",
  };
  return (
    <div style={img} className="col-3 ">
      <div className="text-white p-3" style={{textAlign:"left"}}>
        <h4 className="text-white text-left">IZB Save Plus Account</h4>
        <p className="text-0">
          Exclusively designed savings’ account to inculcate savings habits in
          parents and guardians for their children.
        </p>
      </div>
      <div className="button-box text-center h-25 d-flex justify-content-end p-3">
        <Link to="/SavePlusAccount">
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

export default SavePlusCard;
