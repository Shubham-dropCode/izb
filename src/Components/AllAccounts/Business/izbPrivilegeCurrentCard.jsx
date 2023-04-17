import React from "react";
import Img1 from "../../../assets/images/IZB/IZB Website Skin/Home_Page/New/1.png";

const IzbPrivilegeCurrentCard = () => {
  const imgStyle = {
    backgroundImage: `url(${Img1})`,
    height: "270px",
    width: "270px",
  };
  return (
    <div style={imgStyle} className="col-3">
      <div className="text-white p-3">
        <h4 className="text-white">IZB Privilege Current A/C</h4>
        <p className="lh-sm">
          This is a business current account offering premier business banking
          solutions and services designed specifically to meet...
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

export default IzbPrivilegeCurrentCard;
