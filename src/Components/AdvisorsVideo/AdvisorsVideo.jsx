import React from "react";
import AdvisorsImg from "../../assets/images/IZB/IZB Website Skin/Home_Page/New_changes/Untitled-3.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const AdvisorsVideo = () => {
  const AdvisorsBgImg = {
    backgroundImage: `url(${AdvisorsImg})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };
  return (
    <div className="container-fluid py-5">
      <div className="row" style={AdvisorsBgImg}>
        <div className="d-flex flex-column justify-content-end py-3">
          <h2 className="text-center text-white py-2">
            Learn More From Our Financial Advisor.
          </h2>
          <p className="text-center text-white py-2">
            Lyapa Mnewe discusses all finance related queries in a series of
            videos that you can watch now
          </p>
          <div class="button-box text-center">
            <button class="btn-one" type="submit">
              <span class="txt">Send Request</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsVideo;
