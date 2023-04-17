import React from "react";
import Img1 from "../../../assets/images/IZB/IZB Website Skin/Home_Page/New/1.png";
const classicCurrentCard = () => {
  const img = {
    backgroundImage: `url(${Img1})`,
    height: "270px",
    width: "270px",
  };
  return (
    <div style={img} className="col-3">
      <div className="text-white p-3">
        <h4 className="text-white">Classic Current A/C</h4>
        <p>
          This standard business current account is designed to support the
          banking needs of the business fraternity.
        </p>
      </div>
      <div class="button-box text-center h-25 d-flex justify-content-end p-3">
        <button
          class="btn-one p-1"
          style={{ lineHeight: "30px" }}
          type="submit"
        >
          <span class="txt">Create Account</span>
        </button>
      </div>
    </div>
  );
};

export default classicCurrentCard;
